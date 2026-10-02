/* Portal de Aplicaciones — visor de solo lectura del catálogo.

   Origen del catálogo (gana el primero disponible):
     1. data.js (window.PORTAL_DATA) -> catálogo del repo, lo ve todo el equipo
     2. FALLBACK                      -> respaldo embebido si data.js no carga

   El portal no edita nada: para agregar o cambiar enlaces se edita data.js
   y se sube al repo (commit o Pull Request). GitHub Pages lo sirve en ~1 min.

   Tras cambiar data.js, vuelve a generar el respaldo embebido:
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
          "name": "PORTAL PAC",
          "url": "http://wweb02prod:8084/VisorUnico/Login.aspx",
          "description": "ACTIVAR VOLTE Y FAMILIA Y AMIGOS"
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

/* ---------- catálogo ---------- */

const PUBLISHED = (window.PORTAL_DATA && isValidData(window.PORTAL_DATA.data))
  ? { version:Number(window.PORTAL_DATA.version) || 0,
      build:String(window.PORTAL_DATA.build || '0'),
      data:window.PORTAL_DATA.data }
  : { version:0, build:'0', data:FALLBACK };

const DATA = PUBLISHED.data;

// Exposición mínima para pruebas automatizadas y depuración en consola.
window.PORTAL_CATALOG = () => DATA;

let currentMain = Object.keys(DATA)[0] || '';

const $ = id => document.getElementById(id);
const topNav = $('topNav');
const content = $('content');
const search = $('search');
const clear = $('clear');
const counter = $('counter');

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

function countApps(data){
  return Object.values(data || {}).reduce((n,groups) =>
    n + groups.reduce((m,g) => m + (g.apps ? g.apps.length : 0), 0), 0);
}

/* El modo edición se retiró del portal: sus borradores y su PIN quedan
   guardados en los navegadores donde se usaba. Se limpian una sola vez para
   que nadie los confunda con el catálogo actual. */
function cleanLegacyStorage(){
  try{
    ['portal-apps-indra:v1','portal-apps-indra:pin','portal-apps-indra:published']
      .forEach(key => localStorage.removeItem(key));
    sessionStorage.removeItem('portal-apps-indra:auth');
  }catch{}
}

/* ---------- render ---------- */

function renderNav(){
  topNav.innerHTML = Object.keys(DATA).map(key => `
    <button class="main-btn ${key===currentMain?'active':''}" data-main="${esc(key)}">${esc(key)}</button>
  `).join('');

  topNav.querySelectorAll('.main-btn[data-main]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMain = btn.dataset.main;
      search.value = '';
      renderAll();
    });
  });
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

function renderMain(){
  const groups = DATA[currentMain] || [];
  const total = groups.reduce((n,g) => n + g.apps.length, 0);
  counter.textContent = `${currentMain} · ${total} aplicación(es) · ${countApps(DATA)} en total`;

  if(!groups.length){
    content.innerHTML = `<div class="empty"><strong>Esta categoría está vacía.</strong></div>`;
    return;
  }

  content.innerHTML = groups.map((g,gi) => `
    <div class="group ${gi===0?'open':''}">
      <button class="group-header" aria-expanded="${gi===0}">
        <span>${esc(g.name)} <em class="count">${g.apps.length}</em></span>
        <span class="chevron">▼</span>
      </button>
      <div class="apps">
        ${g.apps.map(a => appCard(a)).join('')}
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
}

function renderAll(){
  if(!DATA[currentMain]) currentMain = Object.keys(DATA)[0] || '';
  renderNav();
  renderMain();
}

/* ---------- búsqueda ---------- */

/* Resalta el término buscado. Escapa antes de marcar para que un texto con
   HTML o con caracteres de expresión regular no rompa la búsqueda. */
function highlight(str, term){
  if(!term) return esc(str);
  const safe = String(term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return esc(str).replace(new RegExp(`(${safe})`, 'ig'), '<mark>$1</mark>');
}

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
    groups.forEach(group => {
      group.apps.forEach(app => {
        const hay = [main, group.name, app.name, app.description, app.url].join(' ').toLowerCase();
        if(hay.includes(q)) results.push({ main, group:group.name, app });
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
      <div class="apps">
        ${results.map(r => appCard(r.app, {
          name: highlight(r.app.name, q),
          desc: highlight(r.app.description || 'Abrir aplicación', q),
          foot: `${esc(r.main)} · ${esc(r.group)}`
        })).join('')}
      </div>
    </div>`;
}

/* ---------- arranque ---------- */

cleanLegacyStorage();
search.addEventListener('input', e => searchApps(e.target.value));
clear.addEventListener('click', () => { search.value = ''; search.focus(); renderAll(); });

renderAll();
