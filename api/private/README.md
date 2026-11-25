# Private VoidWare account data

`logins.txt` format (one user per line): `login password`
`keys.txt` format (one subscription per line): `key DD-MM-YYYY tier prefix`

Example:
`Admin 1234Pass`
`VW-ADMIN-ALPHA-7K9Q-2M4X 26-12-2026 alpha ADMIN`

These files are excluded by `.gitignore`; do not force-add them to GitHub or put them in `public/`.
For deployment (Vercel), set server-only environment variables:
- `VOIDWARE_LOGIN_DATA` — contents of logins.txt, one entry per line
- `VOIDWARE_SUBSCRIPTION_KEYS` — contents of keys.txt, one entry per line
- `SESSION_SECRET` — long random secret (32+ random bytes; never NEXT_PUBLIC_)
- `NEXT_PUBLIC_LAUNCHER_URL` — optional public launcher download URL

The included Admin credentials/key are demo values. Replace them before deploying publicly.
