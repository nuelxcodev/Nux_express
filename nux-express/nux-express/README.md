# Nux Express: three folders

| Folder | What | Deploy to |
|---|---|---|
| `site/` | Public website (the approved design) + `GET /api/track/:id` | Vercel, Netlify (Next), any Node host |
| `admin/` | Separate admin website: sign in, create orders, update status, **pause / resume with a customer message** | Its own host / domain, e.g. admin.yourdomain.com |
| `database/` | **MongoDB tooling only** (one-time import from the old `db.json`, index setup). There is no database server in this repo any more | Nothing to deploy. Run the scripts from your laptop |

```
customer -> site  --(read-only Mongo user)--> MongoDB
you      -> admin --(read/write Mongo user)-> MongoDB
```
The browser never talks to MongoDB. Each Next app connects from its server code (`lib/db.js`).

## What changed in this release
1. **Pause / resume a parcel.** In the admin, the "..." menu on an order has *Pause progress*: pick a reason (customs, immigration, weather,
   documents, address, other) and write a message (max 300 characters). The public tracking page then shows an amber "On hold" card with the
   reason, your message and the time it was paused. A paused parcel cannot be advanced (the API answers 409) until you press *Resume*.
2. **Admin refresh.** Summary cards, search, filters, New order / Advance / Delete dialogs, toasts, responsive table. Original navy and red palette kept.
3. **JSON-server replaced by MongoDB** in both apps. Same API URLs, same admin UI behaviour.

Nothing else on the public site changed: its design, colours and copy are as before. Old orders keep working (they simply have no hold fields).

## Environment variables
| App | Old | New |
|---|---|---|
| `site` | `JSON_SERVER_URL`, `DB_READ_KEY` | `MONGODB_URI` (**read-only** Mongo user), `MONGODB_DB` (default `nux_express`) |
| `admin` | `JSON_SERVER_URL`, `DB_ADMIN_KEY`, `ADMIN_PASSWORD`, `SESSION_SECRET` | `MONGODB_URI` (**readWrite** Mongo user), `MONGODB_DB`, plus the same `ADMIN_PASSWORD`, `SESSION_SECRET` |
| `database` (scripts) | `DB_READ_KEY`, `DB_ADMIN_KEY`, `DATA_DIR`... | `MONGODB_URI`, `MONGODB_DB`, optional `JSON_FILE` |

## Go-live checklist (do it in this order; the old site keeps working until step 5)
1. **Create the database.** MongoDB Atlas (free tier is fine) or your own server. Create two users on the `nux_express` database:
   `nux_admin` with role *readWrite* and `nux_site` with role *read*. In Atlas, allow your hosts' IPs (or 0.0.0.0/0 with strong passwords if your hosts have no fixed IP).
2. **Import your existing orders.**
   ```bash
   cd database && npm install && cp .env.example .env     # put the nux_admin URI in MONGODB_URI
   cp /path/to/your/live/db.json ./db.json                # the file from the old database server's disk (DATA_DIR)
   npm run migrate:dry                                    # preview, writes nothing
   npm run migrate                                        # import
   ```
   Safe to repeat: orders are matched on `trackingId`, existing ones are never overwritten, nothing is duplicated.
3. **Set the new env vars** on the `site` and `admin` hosts (table above) and remove the old `JSON_SERVER_URL` / `DB_*_KEY` ones.
4. **Push and deploy** `site` and `admin`. Check: open the admin, confirm your old orders are listed, track one on the public site,
   pause it with a message, refresh the public page, resume it.
5. **Retire the old json-server host** once everything checks out. Orders created after step 4 live only in MongoDB, so do not switch back
   after that without re-importing.

Rollback before step 5: redeploy the previous commit with the old env vars; json-server still has all your data.

## Local run
```bash
# MongoDB must be running locally (or use an Atlas URI)
cd site  && npm install && cp .env.example .env.local && npm run dev     # http://localhost:3000
cd admin && npm install && cp .env.example .env.local && npm run dev     # http://localhost:3001
```
Open the admin, create an order, copy the tracking ID, paste it on the public site.

## Security notes
- The admin has no link from the public site, is `noindex`, and every admin API route checks a signed httpOnly cookie
  (SameSite strict). Login is limited to 5 tries/min per IP. For extra safety also restrict the admin domain by IP or put it behind
  your host's access control (e.g. Cloudflare Access).
- The public site connects with a **read-only** Mongo user, so it cannot create, change or delete anything even if compromised.
  It also asks Mongo only for the fields the tracking page needs: customer names, emails and phone numbers are never loaded by the public site.
- Hold messages are shown to customers exactly as typed (escaped, never run as HTML). Do not put private details in them.
- `trackingId` has a unique index, so two orders can never share an ID.
- Rate limits are in memory per instance; use Redis if you scale to several instances.

## Customising the public site
Same as before: styles in `site/app/globals.css`, UI engine in `site/public/app.js`, pictures in `site/public/images/`
(see the README there), placeholder contact details and country list inside `site/public/app.js`.
