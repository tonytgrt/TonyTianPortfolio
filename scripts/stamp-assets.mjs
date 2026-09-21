// Cache-busts every local file the site's pages load. Cloudflare, and browsers
// after it, keep CSS, JS and images for hours, so a file changed in place goes
// unseen until that runs out. This rewrites each reference to one as
// `file?v=<hash of its contents>`: a changed file gets a new URL, and an
// unchanged one keeps its URL and stays cached.
//
// Runs as the last step of `npm run build`, since it has to hash the files that
// actually ship. Stylesheets are stamped for the images they use before they
// are hashed themselves, so a changed background image changes the
// stylesheet's URL too. Links to pages are left alone: Cloudflare doesn't cache
// HTML, and their URLs are what visitors see.
import {createHash} from 'node:crypto';
import {existsSync, readFileSync, readdirSync, statSync, writeFileSync} from 'node:fs';
import {extname, join, relative, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

// References are resolved as URLs against this stand-in origin, so ./, ../ and
// leading slashes come out exactly as a browser would read them.
const SITE = 'http://site/';

// Anything with a scheme (https:, data:, mailto:...), protocol-relative, or a
// bare fragment points somewhere other than a file here.
const NOT_LOCAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i;

const hashes = new Map();
const stamped = new Set();
const changed = [];

function hashOf(file) {
  if (!hashes.has(file)) {
    hashes.set(file, createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 8));
  }
  return hashes.get(file);
}

// `ref` as written in `fromFile`, with its ?v= set to the hash of the file it
// points to. Returned unchanged if it isn't a local file to stamp.
function stampRef(ref, fromFile) {
  if (!ref || NOT_LOCAL.test(ref)) {
    return ref;
  }
  const fragmentAt = ref.indexOf('#');
  const fragment = fragmentAt < 0 ? '' : ref.slice(fragmentAt);
  const [path, query] = (fragmentAt < 0 ? ref : ref.slice(0, fragmentAt)).split('?', 2);

  // A query of its own means the URL does more than name a file. Leave it be.
  if (query !== undefined && !/^v=[^&]*$/.test(query)) {
    return ref;
  }

  const page = SITE + relative(ROOT, fromFile).split(sep).join('/');
  const file = join(ROOT, decodeURIComponent(new URL(path, page).pathname));
  if (path === '' || extname(file) === '' || extname(file) === '.html') {
    return ref;
  }
  if (!existsSync(file) || !statSync(file).isFile()) {
    console.warn(`stamp-assets: ${relative(ROOT, fromFile)} refers to missing ${ref}`);
    return ref;
  }

  if (extname(file) === '.css') {
    stampFile(file);
  }
  return `${path}?v=${hashOf(file)}${fragment}`;
}

// Stamp every reference in one page or stylesheet, writing it only if that
// changed anything, so a build with nothing new leaves every file untouched.
function stampFile(file) {
  if (stamped.has(file)) {
    return;
  }
  stamped.add(file);

  const before = readFileSync(file, 'utf8');
  const after = extname(file) === '.css'
    ? before.replace(/url\((["']?)([^"')]*)\1\)/g,
                     (_, q, ref) => `url(${q}${stampRef(ref, file)}${q})`)
    : before.replace(/\b(src|href)=(["'])(.*?)\2/g,
                     (_, attr, q, ref) => `${attr}=${q}${stampRef(ref, file)}${q}`);

  if (after !== before) {
    writeFileSync(file, after);
    hashes.delete(file);
    changed.push(relative(ROOT, file));
  }
}

for (const name of readdirSync(ROOT).filter((n) => n.endsWith('.html')).sort()) {
  stampFile(join(ROOT, name));
}
console.log(changed.length ? `stamp-assets: stamped ${changed.join(', ')}`
                           : 'stamp-assets: nothing changed');
