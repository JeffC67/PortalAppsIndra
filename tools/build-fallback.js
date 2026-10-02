/* Regenera el respaldo FALLBACK de app.js a partir de data.js.
   El portal ya no se edita en el navegador: data.js es la fuente y el
   respaldo solo sirve para que el sitio no quede vacío si data.js falla.
   Úsalo cada vez que cambies el catálogo, y sube ambos archivos juntos.
   Uso: node tools/build-fallback.js            */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dataPath = path.join(root, 'data.js');
const appPath = path.join(root, 'app.js');

const START = 'const FALLBACK = ';
const END = '\n};\n';

const sandbox = { window:{} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(dataPath, 'utf8'), sandbox, { filename: dataPath });

const payload = sandbox.window.PORTAL_DATA;
if(!payload || !payload.data || typeof payload.data !== 'object'){
  console.error('data.js no define window.PORTAL_DATA con un catálogo válido.');
  process.exit(1);
}

const fallback = START + JSON.stringify(payload.data, null, 2) + ';\n';

const app = fs.readFileSync(appPath, 'utf8');
const from = app.indexOf(START);
if(from === -1) throw new Error('No se encontró "const FALLBACK = " en app.js.');
// El bloque termina en el cierre del objeto literal: "\n};\n"
const to = app.indexOf(END, from);
if(to === -1) throw new Error('No se encontró el cierre del FALLBACK en app.js.');

fs.writeFileSync(appPath, app.slice(0, from) + fallback + app.slice(to + END.length));
console.log(`FALLBACK regenerado con ${Object.keys(payload.data).length} categorías.`);