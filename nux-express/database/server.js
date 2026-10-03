// Shared database service (json-server). Both websites call it server-to-server with an API key.
// READ key: GET only (public site). ADMIN key: full access (admin site). No key: rejected.
const crypto = require('node:crypto');
const path = require('node:path');
const jsonServer = require('json-server');

const READ = process.env.DB_READ_KEY;
const ADMIN = process.env.DB_ADMIN_KEY;
if (!READ || !ADMIN || READ === ADMIN) {
  console.error('Set two different keys: DB_READ_KEY and DB_ADMIN_KEY');
  process.exit(1);
}
const same = (a, b) => {
  const x = crypto.createHash('sha256').update(String(a || '')).digest();
  const y = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(x, y);
};
function auth(req, res, next) {
  const k = req.get('x-api-key');
  if (same(k, ADMIN)) return next();
  if (same(k, READ) && req.method === 'GET') return next();
  return res.sendStatus(401);
}

const server = jsonServer.create();
server.use(auth);
server.use(jsonServer.defaults({ noCors: true, logger: process.env.NODE_ENV !== 'production' }));
server.use(jsonServer.router(path.join(process.env.DATA_DIR || __dirname, 'db.json')));
server.listen(process.env.PORT || 4000, process.env.HOST || '127.0.0.1', () => console.log('database ready'));
