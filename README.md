# Sasani & Dinith

Mobile-first four-page wedding invitation. Plain HTML/CSS/JS, no build dependencies. Original photos remain unchanged; WebP copies and CSS gradients provide the soft blending.

## Preview
Run `npm run dev`, then open http://127.0.0.1:3000. Online RSVP returns an honest unavailable message until the backend is configured. Phone links work immediately.

## Deploy to Vercel
Import this repository into Vercel. Select Other as framework, no build command, and `public` as output directory. The root `api/rsvp.js` is a Vercel serverless function.

1. Create a free Supabase project and run `supabase/schema.sql` in SQL Editor.
2. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to Vercel environment variables. Never expose the service-role key in browser code or commit it.
3. Deploy/redeploy. Test a real RSVP, then inspect the `rsvps` table in Supabase Table Editor. Export CSV there as needed.
4. Configure a Vercel Firewall rate-limit rule for POST `/api/rsvp` before widely sharing the link. The form has server validation and a honeypot; it does not yet have CAPTCHA or persistent rate limiting.

For local backend testing, set the two environment variables in your shell before `npm run dev`. No env file loader is required by the website.

RSVP submissions are separate records, not verified guest identities. Repeated replies can be reconciled in Table Editor. Guest counts currently allow 1–6; change both UI and server validation if needed. Free Supabase projects may pause after inactivity. Fonts load from Google Fonts, with Georgia and system sans-serif fallbacks. The site requests search-engine exclusion but is accessible to anyone with the link.
