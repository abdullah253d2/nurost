// Local dev: reads from process.env (.env.local)
// Production: this file is overwritten by amplify.yml before `next build`
export const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY ?? "";
export const zohoUser = process.env.ZOHO_USER ?? "";
export const zohoAppPassword = process.env.ZOHO_APP_PASSWORD ?? "";
