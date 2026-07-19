import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

interface RequestBody {
  name: string;
  company: string;
  email: string;
  phone?: string;
  sector: string;
  budget: string;
  message: string;
}

function isValid(body: Partial<RequestBody>): body is RequestBody {
  return Boolean(
    body.name && body.company && body.email && body.sector && body.budget && body.message
  );
}

export async function POST(req: NextRequest) {
  let body: Partial<RequestBody>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // 1. Store the request in Supabase
  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("project_requests").insert({
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone || null,
      sector: body.sector,
      budget: body.budget,
      message: body.message,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Could not save your request right now. Please try again shortly." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Supabase client error:", err);
    return NextResponse.json(
      { error: "Server is not configured correctly. Please email us directly." },
      { status: 500 }
    );
  }

  // 2. Email the team via Resend — this is best-effort; a failure here
  // should not make the whole request fail, since the record is already saved.
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || "contact@visuioration.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: `Visuioration Site <${fromEmail}>`,
        to: notifyEmail,
        replyTo: body.email,
        subject: `New project request — ${body.company} (${body.sector})`,
        text: `Name: ${body.name}
Company: ${body.company}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}
Sector: ${body.sector}
Monthly budget range: ${body.budget}

What they're trying to solve:
${body.message}`,
      });
    } catch (err) {
      console.error("Resend email error (request was still saved):", err);
    }
  } else {
    console.warn("RESEND_API_KEY not set — skipping email notification, request was still saved.");
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
