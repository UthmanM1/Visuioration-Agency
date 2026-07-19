# Visuioration

Next.js app for visuioration.com — marketing site + a working "Request a project"
form that saves to Supabase and emails your team via Resend.

## 1. Supabase — create the table

1. Open your Supabase project → **SQL Editor**.
2. Paste the contents of `supabase/schema.sql` and run it. This creates a
   `project_requests` table with RLS enabled and no public policies, so it's
   only reachable via the service role key (server-side only).
3. Go to **Project Settings → API** and copy:
   - **Project URL** → `SUPABASE_URL`
   - **service_role key** (not the anon key) → `SUPABASE_SERVICE_ROLE_KEY`

   The service role key bypasses RLS — never expose it in client-side code.
   It's only used inside `app/api/request/route.ts`, which runs on the server.

## 2. Resend — for the auto-email

1. Sign up at resend.com (free tier is enough for this volume).
2. Create an API key → `RESEND_API_KEY`.
3. To start, leave `RESEND_FROM_EMAIL` as `onboarding@resend.dev` — it works
   immediately with no setup, but the email will show that address as sender.
4. When you're ready, add `visuioration.com` as a domain in Resend, verify the
   DNS records it gives you, then set `RESEND_FROM_EMAIL` to something like
   `notifications@visuioration.com` so emails come from your own domain.
5. `NOTIFY_EMAIL` controls where the notification lands — defaults to
   `contact@visuioration.com` if you don't set it.

## 3. Environment variables

Copy `.env.local.example` to `.env.local` for local dev, and add the same four
variables in **Vercel → Project Settings → Environment Variables** for
production:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `NOTIFY_EMAIL` (optional, defaults to contact@visuioration.com)
- `RESEND_FROM_EMAIL` (optional, defaults to onboarding@resend.dev)

## 4. Deploy

```bash
npm install
npm run build   # sanity check locally first
```

Then push this folder to a GitHub repo and import it in Vercel (New Project →
select the repo), or run `vercel` from the CLI if you already have it set up.
Add the environment variables above in the Vercel dashboard before the first
production deploy, then redeploy.

## 5. Connect visuioration.com

In Vercel → your project → **Settings → Domains**, add `visuioration.com` and
`www.visuioration.com`, then update the DNS records at your domain registrar
as Vercel instructs (usually an A record + CNAME, or nameserver delegation if
you choose Vercel DNS).

## 6. Test the form end-to-end

Once deployed, submit the contact form once yourself:
- Check **Supabase → Table Editor → project_requests** for the new row.
- Check the inbox at `NOTIFY_EMAIL` for the notification.

If the email doesn't arrive but the row saves, the request itself still
worked — check the Vercel function logs for the Resend error (usually a
missing/invalid API key, or an unverified sending domain).
