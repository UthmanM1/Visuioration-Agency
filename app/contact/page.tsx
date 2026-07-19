"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Contact() {
  const [status, setStatus] = useState<{ type: "idle" | "sending" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "sending", message: "" });

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      sector: (form.elements.namedItem("sector") as HTMLSelectElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus({
        type: "success",
        message: "Request received. We reply within 1 business day at the email you provided.",
      });
      form.reset();
    } catch (err: any) {
      setStatus({
        type: "error",
        message: `${err.message} You can also email us directly at contact@visuioration.com.`,
      });
    }
  }

  return (
    <>
      <Header active="contact" />
      <RevealObserver />

      <section className="page-head">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap">
          <div className="eyebrow">Request a project</div>
          <h1>Tell us about your business. We&apos;ll come back with a realistic target.</h1>
          <p>This goes straight to our team. We reply with next steps and, where there&apos;s a fit, a date for the pipeline audit.</p>
        </div>
      </section>

      <section>
        <div className="wrap reveal">
          <div className="form-shell">
            <div className="form-side">
              <h3>What happens next</h3>
              <p>Every request is read by a person before anything is scheduled. No auto-generated proposals.</p>
              <div className="row"><span>Response time</span><span>Within 1 business day</span></div>
              <div className="row"><span>First call</span><span>Pipeline audit, ~30 min</span></div>
              <div className="row"><span>Next step</span><span>Contracted target proposal</span></div>
              <div className="row"><span>Direct email</span><span>contact@visuioration.com</span></div>
            </div>
            <div className="form-main">
              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" required />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="sector">Sector</label>
                    <select id="sector" name="sector" required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Residential construction</option>
                      <option>Commercial contracting</option>
                      <option>Civil engineering</option>
                      <option>Roofing</option>
                      <option>Property development</option>
                      <option>HVAC / M&amp;E</option>
                      <option>Electrical</option>
                      <option>Groundworks &amp; landscaping</option>
                      <option>Other construction-related</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="budget">Monthly budget range</label>
                    <select id="budget" name="budget" required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Under £1,000</option>
                      <option>£1,000 – £3,000</option>
                      <option>£3,000 – £7,000</option>
                      <option>£7,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">What are you trying to solve?</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="e.g. inconsistent enquiry volume, low tender invitations, rising cost per lead..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" disabled={status.type === "sending"}>
                  {status.type === "sending" ? "Sending..." : "Send request →"}
                </button>
                <div className="form-note">
                  Submitting saves your request and notifies our team directly — no email client required.
                </div>
                {status.type !== "idle" && status.message && (
                  <div id="form-status" className={`show ${status.type === "error" ? "error" : status.type === "success" ? "success" : ""}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
