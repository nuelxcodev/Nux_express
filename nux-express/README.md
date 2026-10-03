# Nux Express: three deployable parts

| Folder | What | Deploy to |
|---|---|---|
| `site/` | Public website (the approved design) + `GET /api/track/:id` | Vercel, Netlify (Next), any Node host |
| `admin/` | Separate admin website: sign in, create orders, update status | Its own host / domain, e.g. admin.yourdomain.com |
| `database/` | json-server holding `db.json`, protected by API keys | A host with a **persistent disk** (Render, Railway, Fly, a VPS). Not serverless |

```
customer -> site  ----(read key)---->  database
you      -> admin ----(admin key)--->  database
```
The browser never talks to the database. Each Next app calls it from its server code.

## Local run (three terminals)
```bash
# 1) database
cd database && npm install && cp .env.example .env   # set the two keys
npm run dev

# 2) public site (http://localhost:3000)
cd site && npm install && cp .env.example .env.local  # JSON_SERVER_URL + DB_READ_KEY
npm run dev

# 3) admin (http://localhost:3001)
cd admin && npm install && cp .env.example .env.local # JSON_SERVER_URL + DB_ADMIN_KEY + ADMIN_PASSWORD + SESSION_SECRET
npm run dev
```
Open the admin, create an order, copy the generated tracking ID, paste it on the public site.

## Deploying
1. **database**: deploy first, attach a persistent disk, set `DB_READ_KEY`, `DB_ADMIN_KEY` (different, long, random), `HOST=0.0.0.0`,
   and `DATA_DIR` to the disk path (copy `db.json` there once). Put it behind HTTPS and note its URL.
2. **site**: set `JSON_SERVER_URL` (the database URL) and `DB_READ_KEY`.
3. **admin**: set `JSON_SERVER_URL`, `DB_ADMIN_KEY`, `ADMIN_PASSWORD`, `SESSION_SECRET` (required in production).

## Security notes
- The admin has no link from the public site, is `noindex`, and every admin API route checks a signed httpOnly cookie
  (SameSite strict). Login is limited to 5 tries/min per IP. For extra safety also restrict the admin domain by IP or put it behind
  your host's access control (e.g. Cloudflare Access).
- The public site holds only the READ key, which cannot create, change or delete anything. It strips customer details before replying.
- Rate limits are in memory per instance; use Redis if you scale to several instances.
- json-server is a single JSON file with no locking, fine for an MVP. When you outgrow it, replace the six functions in
  `site/lib/db.js` and `admin/lib/db.js` (or the `database/` service) with Postgres/Mongo; nothing else changes.

## Customising the public site
Same as before: styles in `site/app/globals.css`, UI engine in `site/public/app.js`, pictures in `site/public/images/`
(see the README there), placeholder contact details and country list inside `site/public/app.js`.
