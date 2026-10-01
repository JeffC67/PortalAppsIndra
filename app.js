/* Portal de Aplicaciones — catálogo + CRUD + publicación a GitHub Pages.

   Capas de datos (gana la primera disponible):
     1. data.js (window.PORTAL_DATA) -> catálogo publicado, lo ve todo el equipo
     2. localStorage                  -> borrador local de quien edita
     3. FALLBACK                      -> respaldo embebido si no hay data.js

   Permisos: GitHub Pages es estático, no hay servidor que autentique.
   - El PIN protege la interfaz de edición (evita ediciones accidentales).
     NO es seguridad real: el código es público y cualquiera puede saltárselo.
   - El token de GitHub es lo que realmente controla quién publica al repo.

   Para regenerar el respaldo embebado tras cambiar data.js:
     node tools/build-fallback.js
*/

const FALLBACK = {
  "INDRA": [
    {
      "name": "Herramientas Indra",
      "apps": [
        {
          "name": "GENESYS",
          "url": "https://login.mxc1.pure.cloud/#/signup/a25tYWxkb25hZG9AaW5kcmFjb21wYW55LmNvbTpSQVdubTBXVHV5aWlSMllsQTZseA",
          "description": "CONEXIÓN A LINEA Y CHAT"
        },
        {
          "name": "TIPIFICADOR",
          "url": "https://voxnexo.flexitco.co/signalcore/login",
          "description": "TIPIFICACIÓN INDRA"
        },
        {
          "name": "INDRA WEB",
          "url": "https://login.indraweb.net/logon/LogonPoint/tmindex.html",
          "description": "INDRA"
        },
        {
          "name": "CORREO",
          "url": "https://login.microsoftonline.com",
          "description": "CORREO INDRA"
        },
        {
          "name": "INDRA LIFE",
          "url": "https://indralifeprod-b9d6hphxbveubpap.a03.azurefd.net/Login/Index",
          "description": "INDRA"
        },
        {
          "name": "CONVERGENCIA",
          "url": "https://convergencia.claro.com.co/sigma/app/index#/login",
          "description": "DESBLOQUEAR USUARIO CLARO"
        }
      ]
    }
  ],
  "HOGAR": [
    {
      "name": "HERRAMIENTAS CONSULTA",
      "apps": [
        {
          "name": "CONECTADOS",
          "url": "https://conectados.com.co/inicio",
          "description": "CONSULTA DE CAPSULAS INFORMACIÓN"
        }
      ]
    },
    {
      "name": "FACTURA HOGAR Y CERTIFICADO",
      "apps": [
        {
          "name": "PARADIGMA",
          "url": "https://facturasclaro.paradigma.com.co/ebpTelmex/Login.aspx?",
          "description": "CONSULTA DE FACTURA"
        },
        {
          "name": "CERTIFICADO CUENTA AL DÍA",
          "url": "https://100.123.251.118:8086/",
          "description": "CUENTA AL DÍA"
        }
      ]
    },
    {
      "name": "AJUSTE HOGAR",
      "apps": [
        {
          "name": "DIME",
          "url": "https://dime.claro.com.co/Portal/Produccion/Sesion/Inicio/Ingresar?",
          "description": "AJUSTE HOGAR Y MÓVIL"
        }
      ]
    },
    {
      "name": "AGENDAR OT Y LLS",
      "apps": [
        {
          "name": "MODULO DE AGENDAMIENTO",
          "url": "https://moduloagenda.cable.net.co/",
          "description": "AGENDAR VISITAS (OT Y LLS)"
        }
      ]
    },
    {
      "name": "SOPORTE ENVIO URL OTT HOGAR Y MOVIL",
      "apps": [
        {
          "name": "CLARO OTTs",
          "url": "http://172.24.216.149:8002/Otts/#/login",
          "description": "ENVIO DE URL DE OTT (NETFLIX-DISNEY-AMAZON)"
        }
      ]
    },
    {
      "name": "ESCALAR CASOS POR MI ASISTENCIA 360 HOGAR Y MOVIL",
      "apps": [
        {
          "name": "MI ASISTENCIA 360",
          "url": "https://miasistencia360-dwp.claro.com.co/dwp/app/#/page/vffgofyw",
          "description": "ESCALAR CASOS POR FALLAS HOGAR Y MOVIL"
        },
        {
          "name": "FORMATOS",
          "url": "http://wweb02prod:91/Pages/Default.aspx",
          "description": "FORMATOS MÓVIL"
        }
      ]
    },
    {
      "name": "SOPORTE HOGAR",
      "apps": [
        {
          "name": "T&D",
          "url": "http://100.126.23.19:3000/tyd/login",
          "description": "GUIA DE SOPORTE"
        },
        {
          "name": "DIAGNOSTICADOR RESIDENCIAL",
          "url": "http://100.123.246.38/diagnosticador/residencial/",
          "description": "ESTADO DEL SERVICIO HFC Y FTTH"
        },
        {
          "name": "APROVISIONAMIENTO",
          "url": "https://moduloagenda.cable.net.co/",
          "description": "APROVISIONAMIENTO"
        },
        {
          "name": "TR69",
          "url": "https://acstr069.claro.net.co/CSR/Default.aspx",
          "description": "SOPORTE FTTH"
        }
      ]
    },
    {
      "name": "SOPORTE HOGAR RED EXTERNA",
      "apps": [
        {
          "name": "XPERTRAK",
          "url": "https://100.123.88.84/pathtrak",
          "description": "ESTADO DEL NODO BOGOTA"
        },
        {
          "name": "XPERTRAK BOGOTA",
          "url": "https://100.123.88.85/pathtrak",
          "description": "ESTADO DEL NODO NACIONAL"
        },
        {
          "name": "MAXIMO",
          "url": "",
          "description": "RED EXTERNA (sin URL configurada)"
        },
        {
          "name": "DIAGNOSTICADOR DE NODOS",
          "url": "http://100.123.247.15:8080/diagNodos",
          "description": "NIVELES DEL NODO"
        },
        {
          "name": "KOU",
          "url": "http://172.31.228.132/kou_residencial/graph_view.php?action=list",
          "description": "GRAFICAS DE KOU"
        }
      ]
    },
    {
      "name": "TECNOLOGIA",
      "apps": [
        {
          "name": "ASCARD",
          "url": "https://ascard.claro.com.co:10110/AdminWeb/pages/login/login.jsf",
          "description": "CONSULTA DE EQUIPOS FINANCIADOS"
        },
        {
          "name": "ABSOLUT",
          "url": "https://ds.absolute.com/idp-discovery?entityID=https%3A%2F%2Fnamespace.absolute.com%2Fsaml2%2Fsp%2Fcc.absolute.com.shib&return=https%3A%2F%2Fcc.absolute.com%2FShibboleth.sso%2FLogin%3FSAMLDS%3D1%26target%3Dss%253Amc%253Ac84fe14d3ad3e587c82130563c1a34cc062158624cb5b2acc3921f251fc8ff95%20Absolute%20Absolute%20IDP%20Discovery%20Service",
          "description": "LIBERAR TABLET Y PC"
        },
        {
          "name": "LOGITECH",
          "url": "https://appsnotus.logytechmobile.com/notusils/Trazabilidad/BusquedaServicios.aspx?",
          "description": "VALIDAR ENTREGA DE EQUIPOS A DOMICILIO"
        },
        {
          "name": "PHONE PROTECT",
          "url": "https://phpterminal.claro.com.co:8080/PhoneProtectWeb/login",
          "description": "LIBERAR CELULARES"
        }
      ]
    },
    {
      "name": "CASA DE COBRANZA HOGAR Y MÓVIL",
      "apps": [
        {
          "name": "GEVENUE",
          "url": "https://portalgevenue.claro.com.co/gevenue/",
          "description": "CASAS DE COBRO"
        }
      ]
    },
    {
      "name": "CREAR HHPP-DIRECCIÓN HOGAR",
      "apps": [
        {
          "name": "MER",
          "url": "https://mglapp.claro.com.co/catastro-warIns/view/MGL/template/login.xhtml",
          "description": "CREAR HHPP HOGAR"
        }
      ]
    },
    {
      "name": "ELIMINAR APP MI CLARO",
      "apps": [
        {
          "name": "MI CLARO USUARIOS",
          "url": "https://www.claroparatiprimero.co/landing-eliminacion/",
          "description": "ELIMINAR APP MI CLARO"
        }
      ]
    },
    {
      "name": "HOGAR CREAR OT",
      "apps": [
        {
          "name": "VISOR MOVILIDAD",
          "url": "https://visormobile.claro.com.co/VisorMobile-war/SessionExpirada;jsessionid=aU6DKnKxPAhSEB2jVinr-hMe9FRfuoSrgqiJPyq9gcJYAcKCbh24!2107910534",
          "description": "CREAR TRASLADO-MIGRACIÓN Y OT"
        }
      ]
    }
  ],
  "MÓVIL": [
    {
      "name": "HERRAMIENTAS CONSULTA",
      "apps": [
        {
          "name": "CONECTADOS",
          "url": "https://conectados.com.co/inicio",
          "description": "CONSULTA DE CAPSULAS INFORMACIÓN"
        }
      ]
    },
    {
      "name": "FACTURA MÓVIL Y CERTIFICADO",
      "apps": [
        {
          "name": "PARADIGMA",
          "url": "https://facturasclaro.paradigma.com.co/ebpTelmex/Login.aspx?",
          "description": "CONSULTA DE FACTURA"
        },
        {
          "name": "CERTIFICADO CUENTA AL DÍA",
          "url": "https://100.123.251.118:8086/",
          "description": "CUENTA AL DÍA"
        }
      ]
    },
    {
      "name": "AJUSTE MÓVIL",
      "apps": [
        {
          "name": "DIME",
          "url": "https://dime.claro.com.co/Portal/Produccion/Sesion/Inicio/Ingresar?",
          "description": "AJUSTE HOGAR Y MÓVIL"
        }
      ]
    },
    {
      "name": "SOPORTE ENVIO URL OTT HOGAR Y MOVIL",
      "apps": [
        {
          "name": "CLARO OTTs",
          "url": "http://172.24.216.149:8002/Otts/#/login",
          "description": "ENVIO DE URL DE OTT (NETFLIX-DISNEY-AMAZON)"
        }
      ]
    },
    {
      "name": "SOPORTE MÓVIL",
      "apps": [
        {
          "name": "PERFIL SIM",
          "url": "https://minisitiosclaro.claro.com.co/SimCardPerfil/",
          "description": "PERFIL DE LA SIM CARD"
        },
        {
          "name": "SARA",
          "url": "https://100.123.27.221/sara/login",
          "description": "FALLA DE RED"
        },
        {
          "name": "PCFR",
          "url": "http://100.123.250.103:8083/User/InformacionConsumos.aspx",
          "description": "CONSUMO DE DATOS"
        },
        {
          "name": "SMO",
          "url": "http://100.123.251.118:82/consulta_usuarios.aspx",
          "description": "APROVISIONAR LA LINEA SMO"
        },
        {
          "name": "CONFIRMAR IMEI REGISTRADO/ROBADO",
          "url": "https://www.imeicolombia.com.co/",
          "description": "IMEI BLOQUEO Y DUPLICADO"
        },
        {
          "name": "CONFIGURACIÓN APN",
          "url": "https://www.helpforsmartphone.com/ting/es-ES/devices/?make=plum",
          "description": "CONFIGURAR CONEXIÓN A INTERNET"
        },
        {
          "name": "CMC",
          "url": "http://wweb02prod:82/Claro.Cmc/Login/Login.aspx",
          "description": "CONCILIAR LA LINEA MÓVIL"
        },
        {
          "name": "CONSULTA BROADCAST",
          "url": "http://100.123.251.118:8082/Componentes/Asp/ConsultaBroadCast.aspx",
          "description": "MENSAJES BROADCAST"
        },
        {
          "name": "PORTAL SMS",
          "url": "http://172.24.216.148:8002/PortalSMS/#/login",
          "description": "SUSCRIPCIÓN Y CONTENIDOS SMS"
        },
        {
          "name": "MAPA DE COBERTURA",
          "url": "https://www.claro.com.co/personas/servicios/servicios-moviles/cobertura/",
          "description": "MAPA DE COBERTURA 2G,3G,4G,5G"
        },
        {
          "name": "PORTABILIDAD",
          "url": "https://www.portabilidadcolombia.com.co/",
          "description": "CONFIRMAR PORTABILIDAD"
        },
        {
          "name": "VISOR UNICO",
          "url": "http://wweb02prod:8084/VisorUnico/Login.aspx",
          "description": "VISOR ÚNICO"
        }
      ]
    },
    {
      "name": "SOPORTE MÓVIL PREPAGO PAQUETES",
      "apps": [
        {
          "name": "C_MAX",
          "url": "http://172.24.4.168/custcare_cmax/",
          "description": "RECARGAS Y PAQUETES"
        }
      ]
    },
    {
      "name": "AC PLUS",
      "apps": [
        {
          "name": "AC PLUS",
          "url": "https://acplus.claro.com.co/login",
          "description": "AC GESTIÓN"
        }
      ]
    },
    {
      "name": "TECNOLOGIA",
      "apps": [
        {
          "name": "ASCARD",
          "url": "https://ascard.claro.com.co:10110/AdminWeb/pages/login/login.jsf",
          "description": "CONSULTA DE EQUIPOS FINANCIADOS"
        },
        {
          "name": "ABSOLUT",
          "url": "https://ds.absolute.com/idp-discovery?entityID=https%3A%2F%2Fnamespace.absolute.com%2Fsaml2%2Fsp%2Fcc.absolute.com.shib&return=https%3A%2F%2Fcc.absolute.com%2FShibboleth.sso%2FLogin%3FSAMLDS%3D1%26target%3Dss%253Amc%253Ac84fe14d3ad3e587c82130563c1a34cc062158624cb5b2acc3921f251fc8ff95%20Absolute%20Absolute%20IDP%20Discovery%20Service",
          "description": "LIBERAR TABLET Y PC"
        },
        {
          "name": "LOGITECH",
          "url": "https://appsnotus.logytechmobile.com/notusils/Trazabilidad/BusquedaServicios.aspx?",
          "description": "VALIDAR ENTREGA DE EQUIPOS A DOMICILIO"
        },
        {
          "name": "PHONE PROTECT",
          "url": "https://phpterminal.claro.com.co:8080/PhoneProtectWeb/login",
          "description": "LIBERAR CELULARES"
        }
      ]
    },
    {
      "name": "CASA DE COBRANZA HOGAR Y MÓVIL",
      "apps": [
        {
          "name": "GEVENUE",
          "url": "https://portalgevenue.claro.com.co/gevenue/",
          "description": "CASAS DE COBRO"
        }
      ]
    },
    {
      "name": "ELIMINAR APP MI CLARO",
      "apps": [
        {
          "name": "MI CLARO USUARIOS",
          "url": "https://www.claroparatiprimero.co/landing-eliminacion/",
          "description": "ELIMINAR APP MI CLARO"
        }
      ]
    }
  ]
};

const STORAGE_KEY = 'portal-apps-indra:v1';
const AUTH_KEY = 'portal-apps-indra:auth';
const PIN_HASH_KEY = 'portal-apps-indra:pin';
const PUBLISHED_KEY = 'portal-apps-indra:published';

const GH_CONFIG = { owner:'JeffC67', repo:'PortalAppsIndra', branch:'main', file:'data.js' };

/* ---------- catálogo publicado ---------- */

const PUBLISHED = (window.PORTAL_DATA && isValidData(window.PORTAL_DATA.data))
  ? { version:Number(window.PORTAL_DATA.version) || 0,
      build:String(window.PORTAL_DATA.build || '0'),
      data:window.PORTAL_DATA.data }
  : { version:0, build:'0', data:FALLBACK };

/* ---------- estado ---------- */

let DATA = loadData();
// Exposición mínima para pruebas automatizadas y depuración en consola.
window.PORTAL_CATALOG = () => DATA;
let currentMain = Object.keys(DATA)[0] || '';
let editMode = false;
let focusGroup = null;
let auth = loadAuth();

const $ = id => document.getElementById(id);
const topNav = $('topNav');
const content = $('content');
const search = $('search');
const clear = $('clear');
const counter = $('counter');
const adminBar = $('adminBar');
const modal = $('modal');
const toast = $('toast');

/* ---------- utilidades ---------- */

function isValidData(data){
  return !!data && typeof data === 'object' && !Array.isArray(data)
    && Object.values(data).every(groups =>
      Array.isArray(groups) && groups.every(g =>
        g && typeof g.name === 'string' && Array.isArray(g.apps) &&
        g.apps.every(a => a && typeof a.name === 'string' && typeof a.url === 'string')
      )
    );
}

function isValidUrl(url){
  return /^https?:\/\/\S+$/i.test(String(url || '').trim());
}

function esc(str){
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[c]));
}

function clone(obj){
  return JSON.parse(JSON.stringify(obj));
}

function countApps(data){
  return Object.values(data || {}).reduce((n,groups) =>
    n + groups.reduce((m,g) => m + (g.apps ? g.apps.length : 0), 0), 0);
}

function uniqueName(base, taken){
  const has = n => taken.some(t => String(t).toLowerCase() === n.toLowerCase());
  if(!has(base)) return base;
  let i = 2;
  while(has(`${base} (${i})`)) i++;
  return `${base} (${i})`;
}

function downloadText(filename, text){
  // MIME según el tipo: un .js guardado como text/plain no lo ejecuta el navegador
  const mime = filename.endsWith('.js') ? 'text/javascript;charset=utf-8'
    : filename.endsWith('.json') ? 'application/json;charset=utf-8'
    : 'text/plain;charset=utf-8';
  // el <a> debe estar en el DOM para que Firefox acepte el click programático
  const url = URL.createObjectURL(new Blob([text], {type:mime}));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function showToast(msg, kind){
  if(!toast) return;
  toast.textContent = msg;
  toast.className = `toast show ${kind || ''}`;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.className = 'toast'; }, 4200);
}

/* ---------- autenticación (PIN + token) ---------- */

function loadAuth(){
  try{ return JSON.parse(sessionStorage.getItem(AUTH_KEY)) || {}; }
  catch{ return {}; }
}

function saveAuth(){
  try{ sessionStorage.setItem(AUTH_KEY, JSON.stringify(auth)); }catch{}
}

async function hashPin(pin){
  if(!crypto.subtle) return `plain:${pin}`;
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pin));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,'0')).join('');
}

/* El PIN se configura una vez por el administrador y vive en localStorage.
   Recordar: es una barrera de uso, no un control de acceso real. */
async function ensurePin(){
  let stored = null;
  try{ stored = localStorage.getItem(PIN_HASH_KEY); }catch{}
  if(stored) return stored;
  const pin = prompt(
    'Primera vez: define un PIN de 4+ caracteres para el modo edición.\n\n' +
    'Ojo: en un sitio estático esto NO es seguridad real, solo evita ediciones accidentales.'
  );
  if(!pin) return null;
  if(pin.length < 4) { showToast('El PIN necesita al menos 4 caracteres.', 'err'); return null; }
  const hash = await hashPin(pin);
  try{ localStorage.setItem(PIN_HASH_KEY, hash); }catch{}
  return hash;
}

async function requestUnlock(){
  const hash = await ensurePin();
  if(!hash) return false;
  const entered = prompt('PIN de edición:');
  if(entered == null) return false;
  const given = await hashPin(entered);
  if(given !== hash){
    showToast('PIN incorrecto.', 'err');
    return false;
  }
  auth.unlocked = true;
  saveAuth();
  return true;
}

/* ---------- persistencia local ---------- */

function loadData(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return clone(PUBLISHED.data);
    const parsed = JSON.parse(raw);
    return isValidData(parsed) ? parsed : clone(PUBLISHED.data);
  }catch(err){
    console.warn('No se pudieron leer los datos guardados:', err);
    return clone(PUBLISHED.data);
  }
}

function saveData(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA));
    markDirty();
    return true;
  }catch(err){
    console.warn('No se pudieron guardar los datos:', err);
    showToast('No se pudo guardar: el almacenamiento del navegador está lleno o bloqueado.', 'err');
    return false;
  }
}

/* Estado de sincronización respecto a lo publicado */
function publishedFingerprint(){
  return JSON.stringify(PUBLISHED.data);
}

function hasLocalChanges(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return false;
    return JSON.stringify(JSON.parse(raw)) !== publishedFingerprint();
  }catch{ return false; }
}

function markDirty(){
  updateSyncBadge();
}

function updateSyncBadge(){
  const badge = $('syncBadge');
  if(!badge) return;
  const dirty = hasLocalChanges();
  badge.textContent = dirty
    ? `Cambios locales sin publicar · publicado v${PUBLISHED.version} (${PUBLISHED.build})`
    : `Al día con lo publicado · v${PUBLISHED.version} (${PUBLISHED.build})`;
  badge.classList.toggle('dirty', dirty);
}

/* ---------- render ---------- */

function renderNav(){
  const keys = Object.keys(DATA);
  topNav.innerHTML = keys.map(key => `
    <div class="nav-item">
      <button class="main-btn ${key===currentMain?'active':''}" data-main="${esc(key)}">${esc(key)}</button>
      ${editMode ? `
        <button class="nav-act" data-act="edit-main" data-main="${esc(key)}" title="Editar categoría">✎</button>
        <button class="nav-act" data-act="del-main" data-main="${esc(key)}" title="Eliminar categoría">🗑</button>
      ` : ''}
    </div>
  `).join('') + (editMode ? `<button class="main-btn add" data-act="add-main">+ Categoría</button>` : '');

  topNav.querySelectorAll('.main-btn[data-main]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMain = btn.dataset.main;
      search.value = '';
      renderNav();
      renderMain();
    });
  });
  bindActions(topNav);
}

/* Resalta el término buscado. Escapa antes de marcar para que un texto con
   HTML o con caracteres de expresión regular no rompa la búsqueda. */
function highlight(str, term){
  if(!term) return esc(str);
  const safe = String(term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return esc(str).replace(new RegExp(`(${safe})`, 'ig'), '<mark>$1</mark>');
}

function appCard(a, extra){
  const valid = isValidUrl(a.url);
  return `
    <a class="app${valid?'':' no-url'}"
       ${valid ? `href="${esc(a.url)}"` : ''}
       target="_blank" rel="noopener noreferrer"
       ${valid ? '' : 'title="Sin URL configurada" aria-disabled="true"'}>
      <div class="app-name">${extra ? extra.name : esc(a.name)}</div>
      <div class="app-desc">${extra ? extra.desc : esc(a.description || 'Abrir aplicación')}</div>
      <div class="app-url">${extra ? extra.foot : esc(a.url)}</div>
    </a>`;
}

function appTools(main, gi, ai){
  if(!editMode) return '';
  return `
    <div class="app-tools">
      <button class="btn sm" data-act="edit-app" data-main="${esc(main)}" data-gi="${gi}" data-ai="${ai}" title="Editar">✎</button>
      <button class="btn sm danger" data-act="del-app" data-main="${esc(main)}" data-gi="${gi}" data-ai="${ai}" title="Eliminar">🗑</button>
    </div>`;
}

function renderMain(){
  const groups = DATA[currentMain] || [];
  const total = groups.reduce((n,g) => n + g.apps.length, 0);
  counter.textContent = `${currentMain} · ${total} aplicación(es)${editMode?' · modo edición':''}`;

  const openIndex = Number.isInteger(focusGroup) ? focusGroup : 0;
  focusGroup = null;

  if(!groups.length){
    content.innerHTML = editMode
      ? `<div class="empty"><strong>Esta categoría no tiene grupos.</strong><br><br>
         <button class="btn" data-act="add-group" data-main="${esc(currentMain)}">+ Crear grupo</button></div>`
      : `<div class="empty"><strong>Esta categoría está vacía.</strong></div>`;
    bindActions(content);
    return;
  }

  content.innerHTML = groups.map((g,gi) => `
    <div class="group ${gi===openIndex?'open':''}" data-gi="${gi}">
      <button class="group-header" aria-expanded="${gi===openIndex}">
        <span>${esc(g.name)} <em class="count">${g.apps.length}</em></span>
        <span class="chevron">▼</span>
      </button>
      ${editMode ? `
        <div class="group-tools">
          <button class="btn sm" data-act="add-app" data-main="${esc(currentMain)}" data-gi="${gi}">+ Enlace</button>
          <button class="btn sm" data-act="edit-group" data-main="${esc(currentMain)}" data-gi="${gi}">✎ Grupo</button>
          <button class="btn sm danger" data-act="del-group" data-main="${esc(currentMain)}" data-gi="${gi}">🗑 Grupo</button>
        </div>` : ''}
      <div class="apps">
        ${g.apps.map((a,ai) => `
          <div class="app-cell">
            ${appCard(a)}
            ${appTools(currentMain, gi, ai)}
          </div>`).join('')}
      </div>
    </div>
  `).join('');

  content.querySelectorAll('.group-header').forEach(header => {
    header.addEventListener('click', () => {
      const group = header.parentElement;
      group.classList.toggle('open');
      header.setAttribute('aria-expanded', group.classList.contains('open'));
    });
  });

  bindActions(content);
}

function renderAll(){
  if(!DATA[currentMain]) currentMain = Object.keys(DATA)[0] || '';
  search.value = '';
  updateSyncBadge();
  searchApps('');
}

function bindActions(root){
  root.querySelectorAll('[data-act]').forEach(btn => {
    btn.addEventListener('click', ev => {
      ev.stopPropagation();
      handleAction(btn.dataset.act, btn.dataset);
    });
  });
}

/* ---------- búsqueda ---------- */

function searchApps(term){
  const q = term.trim().toLowerCase();
  if(!q){
    renderNav();
    renderMain();
    return;
  }

  topNav.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active'));
  counter.textContent = 'Resultados de búsqueda';

  const results = [];
  Object.entries(DATA).forEach(([main,groups]) => {
    groups.forEach((group,gi) => {
      group.apps.forEach((app,ai) => {
        const hay = [main, group.name, app.name, app.description, app.url].join(' ').toLowerCase();
        if(hay.includes(q)) results.push({ main, group:group.name, gi, ai, app });
      });
    });
  });

  if(!results.length){
    content.innerHTML = `<div class="empty"><strong>No encontramos aplicaciones.</strong><br><br>Prueba con palabras como factura, soporte, IMEI, correo, hogar, móvil, tecnología, etc.</div>`;
    return;
  }

  content.innerHTML = `
    <div class="group open">
      <div class="group-header" style="cursor:default">
        <span>${results.length} resultado(s)</span>
        <span>🔎</span>
      </div>
      <div class="apps" style="display:grid">
        ${results.map(r => `
          <div class="app-cell">
            ${appCard(r.app, {
              name: highlight(r.app.name, q),
              desc: highlight(r.app.description || 'Abrir aplicación', q),
              foot: `${esc(r.main)} · ${esc(r.group)}`
            })}
            ${appTools(r.main, r.gi, r.ai)}
          </div>`).join('')}
      </div>
    </div>`;

  bindActions(content);
}

/* ---------- modal ---------- */

let modalEsc = null;

function openModal({ title, fields, submitLabel='Guardar', onSubmit }){
  modal.innerHTML = `
    <div class="modal-backdrop" data-close>
      <form class="modal-box" id="modalForm" novalidate>
        <h3>${esc(title)}</h3>
        ${fields.map(f => `
          <label class="field">
            <span>${esc(f.label)}</span>
            <input name="${esc(f.name)}" value="${esc(f.value ?? '')}"
                   placeholder="${esc(f.placeholder || '')}"
                   ${f.required ? 'required' : ''}
                   ${f.type === 'url' ? 'inputmode="url"' : ''}>
          </label>`).join('')}
        <p class="modal-error" id="modalError" hidden></p>
        <div class="modal-actions">
          <button type="button" class="btn" data-close>Cancelar</button>
          <button type="submit" class="btn primary">${esc(submitLabel)}</button>
        </div>
      </form>
    </div>`;
  modal.hidden = false;

  const form = modal.querySelector('#modalForm');
  const error = modal.querySelector('#modalError');
  const fail = msg => { error.textContent = msg; error.hidden = false; };

  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', e => {
      if(el.classList.contains('modal-backdrop') && e.target !== el) return;
      closeModal();
    });
  });

  modalEsc = e => { if(e.key === 'Escape') closeModal(); };
  document.addEventListener('keydown', modalEsc);
  form.querySelector('input')?.focus();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const values = {};
    for(const f of fields){
      const raw = (form.elements[f.name].value || '').trim();
      if(f.required && !raw) return fail(`El campo "${f.label}" es obligatorio.`);
      if(f.type === 'url' && raw && !isValidUrl(raw)) return fail('La URL debe empezar con http:// o https://');
      values[f.name] = raw;
    }
    onSubmit(values);
    closeModal();
  });
}

function closeModal(){
  modal.hidden = true;
  modal.innerHTML = '';
  if(modalEsc){
    document.removeEventListener('keydown', modalEsc);
    modalEsc = null;
  }
}

/* ---------- CRUD ---------- */

function groupAt(main, gi){
  return (DATA[main] || [])[gi] || null;
}

function handleAction(act, ds){
  let main = ds.main || currentMain;

  switch(act){
    /* categorías */
    case 'add-main':
      openModal({
        title:'Nueva categoría',
        fields:[{ name:'name', label:'Nombre', required:true, placeholder:'Ej. HOGAR' }],
        onSubmit:v => {
          const name = uniqueName(v.name.toUpperCase(), Object.keys(DATA));
          DATA[name] = [];
          currentMain = name;
          if(saveData()) renderAll();
        }
      });
      break;

    case 'edit-main':
      if(!DATA[main]) return;
      openModal({
        title:`Editar categoría "${main}"`,
        fields:[{ name:'name', label:'Nombre', required:true, value:main }],
        onSubmit:v => {
          const name = uniqueName(v.name.toUpperCase(), Object.keys(DATA).filter(k => k !== main));
          if(name === main) return;
          DATA[name] = DATA[main];
          delete DATA[main];
          DATA = Object.fromEntries(Object.entries(DATA).sort(([a],[b]) => a.localeCompare(b,'es')));
          currentMain = name;
          if(saveData()) renderAll();
        }
      });
      break;

    case 'del-main': {
      if(!DATA[main]) return;
      const n = countApps({ [main]: DATA[main] });
      if(!confirm(`¿Eliminar la categoría "${main}" y sus ${n} enlace(s)?`)) return;
      delete DATA[main];
      currentMain = Object.keys(DATA)[0] || '';
      if(saveData()) renderAll();
      break;
    }

    /* grupos */
    case 'add-group':
      if(!DATA[main]){
        const created = uniqueName((main || 'NUEVA').toUpperCase(), Object.keys(DATA));
        DATA[created] = [];
        main = currentMain = created;
      }
      openModal({
        title:`Nuevo grupo en ${main}`,
        fields:[{ name:'name', label:'Nombre del grupo', required:true, placeholder:'Ej. FACTURACIÓN' }],
        onSubmit:v => {
          DATA[main].push({ name:uniqueName(v.name.toUpperCase(), DATA[main].map(g => g.name)), apps:[] });
          focusGroup = DATA[main].length - 1;
          if(saveData()) renderAll();
        }
      });
      break;

    case 'edit-group': {
      const g = groupAt(main, +ds.gi);
      if(!g) return;
      openModal({
        title:'Editar grupo',
        fields:[{ name:'name', label:'Nombre del grupo', required:true, value:g.name }],
        onSubmit:v => {
          g.name = uniqueName(v.name.toUpperCase(), DATA[main].map(x => x.name).filter(n => n !== g.name));
          if(saveData()) renderAll();
        }
      });
      break;
    }

    case 'del-group': {
      const g = groupAt(main, +ds.gi);
      if(!g) return;
      if(!confirm(`¿Eliminar el grupo "${g.name}" y sus ${g.apps.length} enlace(s)?`)) return;
      DATA[main].splice(+ds.gi, 1);
      focusGroup = DATA[main].length ? Math.min(+ds.gi, DATA[main].length - 1) : 0;
      if(saveData()) renderAll();
      break;
    }

    /* enlaces */
    case 'add-app':
    case 'edit-app': {
      const gi = +ds.gi;
      const g = groupAt(main, gi);
      if(!g) return;
      const editing = act === 'edit-app' ? g.apps[+ds.ai] : undefined;
      if(act === 'edit-app' && !editing) return showToast('Ese enlace ya no existe.', 'err');

      openModal({
        title: editing ? 'Editar enlace' : `Nuevo enlace en ${g.name}`,
        fields:[
          { name:'name', label:'Nombre', required:true, value:editing?.name, placeholder:'Ej. PARADIGMA' },
          { name:'url', label:'URL', type:'url', value:editing?.url, placeholder:'https://... (vacío = sin enlace)' },
          { name:'description', label:'Descripción', value:editing?.description, placeholder:'Opcional' }
        ],
        onSubmit:v => {
          if(editing) Object.assign(editing, v);
          else g.apps.push(v);
          currentMain = main;
          focusGroup = gi;
          if(saveData()) renderAll();
        }
      });
      break;
    }

    case 'del-app': {
      const g = groupAt(main, +ds.gi);
      const a = g?.apps[+ds.ai];
      if(!g || !a) return;
      if(!confirm(`¿Eliminar el enlace "${a.name}"?`)) return;
      g.apps.splice(+ds.ai, 1);
      currentMain = main;
      if(saveData()) renderAll();
      break;
    }

    /* datos locales */
    case 'export':
      downloadText('portal-apps.json', JSON.stringify(DATA, null, 2));
      showToast('Descargando portal-apps.json', 'ok');
      break;

    case 'import': {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json,.json';
      input.addEventListener('change', async () => {
        const file = input.files?.[0];
        if(!file) return;
        try{
          const parsed = JSON.parse(await file.text());
          if(!isValidData(parsed)) throw new Error('formato');
          if(!confirm('¿Reemplazar todos los datos actuales por los del archivo?')) return;
          DATA = parsed;
          currentMain = Object.keys(DATA)[0] || '';
          if(saveData()) renderAll();
          showToast('Catálogo importado.', 'ok');
        }catch{
          showToast('El archivo no tiene un formato válido.', 'err');
        }
      });
      input.click();
      break;
    }

    case 'discard':
      if(!hasLocalChanges()) return showToast('No hay cambios locales que descartar.');
      if(!confirm('Se descartarán tus cambios locales y se volverá al catálogo publicado. ¿Continuar?')) return;
      try{ localStorage.removeItem(STORAGE_KEY); }catch{}
      DATA = clone(PUBLISHED.data);
      currentMain = Object.keys(DATA)[0] || '';
      renderAll();
      showToast('Vuelves al catálogo publicado.', 'ok');
      break;

    case 'download-data':
      downloadText(GH_CONFIG.file, buildDataJs(DATA));
      showToast(`Descargando ${GH_CONFIG.file}. Súbelo al repo para que lo vea el equipo.`, 'ok');
      break;

    case 'publish':
      publishToGitHub();
      break;

    case 'config':
      configureGitHub();
      break;

    case 'logout':
      auth = {};
      try{ sessionStorage.removeItem(AUTH_KEY); }catch{}
      editMode = false;
      adminBar.hidden = true;
      renderAll();
      showToast('Sesión de edición cerrada.');
      break;
  }
}

/* ---------- publicación a GitHub ---------- */

function buildDataJs(data){
  // Sin este guardia, publicar por error generaría un data.js sin catálogo
  // y el equipo vería el portal vacío.
  if(!isValidData(data)) throw new Error('No hay un catálogo válido para publicar.');

  const payload = {
    version: PUBLISHED.version + 1,
    build: new Date().toISOString().slice(0,10),
    data
  };
  return '/* Catálogo publicado. Lo ve todo el equipo en GitHub Pages.\n'
    + '   Actualízalo desde la app con «Publicar al equipo» y sube el archivo al repo.\n'
    + '   Si este archivo falta o se rompe, la app usa el respaldo de app.js. */\n'
    + `window.PORTAL_DATA = ${JSON.stringify(payload, null, 2)};\n`;
}

function configureGitHub(){
  const has = !!auth.token;
  openModal({
    title:'Publicar cambios con la API de GitHub',
    fields:[
      { name:'owner', label:'Dueño (owner)', required:true, value:auth.owner || GH_CONFIG.owner },
      { name:'repo', label:'Repositorio', required:true, value:auth.repo || GH_CONFIG.repo },
      { name:'branch', label:'Rama', required:true, value:auth.branch || GH_CONFIG.branch },
      { name:'token', label:'Token de GitHub', value:'', placeholder: has ? '•••• (guardado en esta sesión)' : 'ghp_… o github_pat_…' }
    ],
    submitLabel:'Guardar configuración',
    onSubmit:v => {
      auth.owner = v.owner.trim();
      auth.repo = v.repo.trim();
      auth.branch = v.branch.trim();
      if(v.token.trim()) auth.token = v.token.trim();
      saveAuth();
      showToast('Configuración guardada en esta sesión.', 'ok');
      updateSyncBadge();
    }
  });
}

/* GitHub responde con {message}; una vista 401 sin leer el cuerpo solo decía "HTTP 401". */
async function apiError(res, fallback){
  let detail = '';
  try{ detail = (await res.json()).message || ''; }catch{}
  return detail ? `${fallback}: ${res.status} ${detail}` : `${fallback}: HTTP ${res.status}`;
}

async function publishToGitHub(){
  if(!auth.token){
    return configureGitHub();
  }
  if(!hasLocalChanges() && !confirm('No hay cambios locales respecto a lo publicado. ¿Subir igual?')) return;

  const owner = auth.owner || GH_CONFIG.owner;
  const repo = auth.repo || GH_CONFIG.repo;
  const branch = auth.branch || GH_CONFIG.branch;
  const path = GH_CONFIG.file;
  const api = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers = {
    'Authorization': `Bearer ${auth.token}`,
    'Accept': 'application/vnd.github+json',
    'Content-Type': 'application/json'
  };

  const btn = document.querySelector('[data-act="publish"]');
  if(btn){ btn.disabled = true; btn.textContent = 'Publicando…'; }

  try{
    // 1. leer el sha actual del archivo (necesario para actualizar)
    let sha = null;
    const resFile = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, { headers });
    if(resFile.ok){
      sha = (await resFile.json()).sha;
    } else if(resFile.status !== 404){
      throw new Error(await apiError(resFile, `no se pudo leer ${path}`));
    }

    // 2. enviar el contenido nuevo
    const content = btoa(unescape(encodeURIComponent(buildDataJs(DATA))));
    const res = await fetch(api, {
      method:'PUT',
      headers,
      body: JSON.stringify({
        message:`Actualiza catálogo del portal (${countApps(DATA)} enlaces)`,
        content,
        branch,
        ...(sha ? { sha } : {})
      })
    });

    if(!res.ok) throw new Error(await apiError(res, 'GitHub rechazó la publicación'));

    const { commit } = await res.json();
    showToast('Publicado. GitHub Pages lo sirve en ~1 minuto.', 'ok');
    console.log('Commit:', commit && commit.html_url);
  }catch(err){
    console.warn(err);
    showToast(`No se pudo publicar: ${err.message}`, 'err');
  }finally{
    if(btn){ btn.disabled = false; btn.textContent = 'Publicar al equipo'; }
  }
}

/* ---------- arranque ---------- */

async function toggleEditMode(){
  if(editMode){
    editMode = false;
    adminBar.hidden = true;
    renderAll();
    return;
  }
  if(!auth.unlocked && !(await requestUnlock())) return;
  editMode = true;
  adminBar.hidden = false;
  renderAll();
}

$('editToggle').addEventListener('click', toggleEditMode);
bindActions(adminBar);
search.addEventListener('input', e => searchApps(e.target.value));
clear.addEventListener('click', () => { search.value = ''; search.focus(); renderAll(); });

renderAll();
