const SEED_DATA = {"INDRA": [{"name": "Herramientas Indra", "apps": [{"name": "GENESYS", "url": "https://login.mxc1.pure.cloud/#/signup/a25tYWxkb25hZG9AaW5kcmFjb21wYW55LmNvbTpSQVdubTBXVHV5aWlSMllsQTZseA", "description": "CONEXIÓN A LINEA Y CHAT"}, {"name": "TIPIFICADOR", "url": "https://voxnexo.flexitco.co/signalcore/login", "description": "TIPIFICACIÓN INDRA"}, {"name": "INDRA WEB", "url": "https://login.indraweb.net/logon/LogonPoint/tmindex.html", "description": "INDRA"}, {"name": "CORREO", "url": "https://login.microsoftonline.com", "description": "CORREO INDRA"}, {"name": "INDRA LIFE", "url": "https://indralifeprod-b9d6hphxbveubpap.a03.azurefd.net/Login/Index", "description": "INDRA"}, {"name": "CONVERGENCIA", "url": "https://convergencia.claro.com.co/sigma/app/index#/login", "description": "DESBLOQUEAR USUARIO CLARO"}]}], "HOGAR": [{"name": "HERRAMIENTAS CONSULTA", "apps": [{"name": "CONECTADOS", "url": "https://conectados.com.co/inicio", "description": "CONSULTA DE CAPSULAS INFORMACIÓN"}]}, {"name": "FACTURA HOGAR Y CERTIFICADO", "apps": [{"name": "PARADIGMA", "url": "https://facturasclaro.paradigma.com.co/ebpTelmex/Login.aspx?", "description": "CONSULTA DE FACTURA"}, {"name": "CERTIFICADO CUENTAL AL DÍA", "url": "https://100.123.251.118:8086/", "description": "CUENTA AL DÍA"}]}, {"name": "AJUSTE HOGAR", "apps": [{"name": "DIME", "url": "https://dime.claro.com.co/Portal/Produccion/Sesion/Inicio/Ingresar?", "description": "AJUSTE HOGAR Y MÓVIL"}]}, {"name": "AGENDAR OT Y LLS", "apps": [{"name": "MODULO DE AGENDAMIENTO", "url": "https://moduloagenda.cable.net.co/", "description": "AGENDAR VISITAS (OT Y LLS)"}]}, {"name": "SOPORTE ENVIO URL OTT HOGAR Y MOVIL", "apps": [{"name": "CLARO OTTs", "url": "http://172.24.216.149:8002/Otts/#/login", "description": "ENVIO DE URL DE OTT (NETFLIX-DISNEY-AMAZON)"}]}, {"name": "ESCALAR CASOS POR MI ASISTENCIA 360 HOGAR Y MOVIL", "apps": [{"name": "MI ASISTENCIA 360", "url": "https://miasistencia360-dwp.claro.com.co/dwp/app/#/page/vffgofyw", "description": "ESCALAR CASOS POR FALLAS HOHAR Y MOVIL"}, {"name": "FORMATOS", "url": "http://wweb02prod:91/Pages/Default.aspx", "description": "FORMATOS MÓVIL"}]}, {"name": "SOPORTE HOGAR", "apps": [{"name": "T&D", "url": "http://100.126.23.19:3000/tyd/login", "description": "GUIA DE SOPORTE"}, {"name": "DIAGNOSTICADOR RESIDENCIAL", "url": "http://100.123.246.38/diagnosticador/residencial/", "description": "ESTADO DEL SERVICIO HFC Y FTTH"}, {"name": "APROVISIONAMIENTO", "url": "https://moduloagenda.cable.net.co/", "description": "APROVISIONAMIENTO"}, {"name": "TR69", "url": "https://acstr069.claro.net.co/CSR/Default.aspx", "description": "SOPORTE FTTH"}]}, {"name": "SOPORTE HOGAR RED EXTERNA", "apps": [{"name": "XPERTRAK", "url": "https://100.123.88.84/pathtrak", "description": "ESTADO DEL NODO BOGOTA"}, {"name": "XPERTRAK BOGOTA", "url": "https://100.123.88.85/pathtrak", "description": "ESTADO DEL NODO NACIONAL"}, {"name": "MAXIMO", "url": "NINGUNO", "description": "RED EXTERNA"}, {"name": "DIAGNOSTICADOR DE NODOS", "url": "http://100.123.247.15:8080/diagNodos", "description": "NIVELES DEL NODO"}, {"name": "KOU", "url": "http://172.31.228.132/kou_residencial/graph_view.php?action=list", "description": "GRAFICAS DE KOU"}]}, {"name": "TECNOLOGIA", "apps": [{"name": "ASCARD", "url": "https://ascard.claro.com.co:10110/AdminWeb/pages/login/login.jsf", "description": "CONSULTA DE EQUIPOS FINANCIADOS"}, {"name": "ABSOLUT", "url": "https://ds.absolute.com/idp-discovery?entityID=https%3A%2F%2Fnamespace.absolute.com%2Fsaml2%2Fsp%2Fcc.absolute.com.shib&return=https%3A%2F%2Fcc.absolute.com%2FShibboleth.sso%2FLogin%3FSAMLDS%3D1%26target%3Dss%253Amc%253Ac84fe14d3ad3e587c82130563c1a34cc062158624cb5b2acc3921f251fc8ff95%20Absolute%20Absolute%20IDP%20Discovery%20Service", "description": "LIBERAR TABLET Y PC"}, {"name": "LOGITECH", "url": "https://appsnotus.logytechmobile.com/notusils/Trazabilidad/BusquedaServicios.aspx?", "description": "VALIDAR ENTREGA DE EQUIPOS A DOMICILIO"}, {"name": "PHONE  PROTEC", "url": "https://phpterminal.claro.com.co:8080/PhoneProtectWeb/login", "description": "LIBERAR CELULARES"}]}, {"name": "CASA DE COBRANZA HOGAR Y MÓVIL", "apps": [{"name": "GEVENUE", "url": "https://portalgevenue.claro.com.co/gevenue/", "description": "CASAS DE COBRO"}]}, {"name": "CREAR HHPP-DIRECCIÓN HOGAR", "apps": [{"name": "MER", "url": "https://mglapp.claro.com.co/catastro-warIns/view/MGL/template/login.xhtml", "description": "CREAR HHPP HOGAR"}]}, {"name": "ELIMINAR APP MI CLARO", "apps": [{"name": "MI CLARO USUARIOS", "url": "https://www.claroparatiprimero.co/landing-eliminacion/", "description": "ELIMINAR APP MI CLARO"}]}, {"name": "HOGAR CREAR OT", "apps": [{"name": "VISOR MOVILIDAD", "url": "https://visormobile.claro.com.co/VisorMobile-war/SessionExpirada;jsessionid=aU6DKnKxPAhSEB2jVinr-hMe9FRfuoSrgqiJPyq9gcJYAcKCbh24!2107910534", "description": "CREAR TRASLADO-MIGRACIÓN Y OT"}]}], "MÓVIL": [{"name": "HERRAMIENTAS CONSULTA", "apps": [{"name": "CONECTADOS", "url": "https://conectados.com.co/inicio", "description": "CONSULTA DE CAPSULAS INFORMACIÓN"}]}, {"name": "FACTURA MÓVIL Y CERTIFICADO", "apps": [{"name": "PARADIGMA", "url": "https://facturasclaro.paradigma.com.co/ebpTelmex/Login.aspx?", "description": "CONSULTA DE FACTURA"}, {"name": "CERTIFICADO CUENTAL AL DÍA", "url": "https://100.123.251.118:8086/", "description": "CUENTA AL DÍA"}]}, {"name": "AJUSTE MÓVIL", "apps": [{"name": "DIME", "url": "https://dime.claro.com.co/Portal/Produccion/Sesion/Inicio/Ingresar?", "description": "AJUSTE HOGAR Y MÓVIL"}]}, {"name": "SOPORTE ENVIO URL OTT HOGAR Y MOVIL", "apps": [{"name": "CLARO OTTs", "url": "http://172.24.216.149:8002/Otts/#/login", "description": "ENVIO DE URL DE OTT (NETFLIX-DISNEY-AMAZON)"}]}, {"name": "SOPORTE MÓVIL", "apps": [{"name": "PERFIL SIM", "url": "https://minisitiosclaro.claro.com.co/SimCardPerfil/", "description": "PERFIL DE LA SIM CARD"}, {"name": "SARA", "url": "https://100.123.27.221/sara/login", "description": "FALLA DE RED"}, {"name": "PCFR", "url": "http://100.123.250.103:8083/User/InformacionConsumos.aspx", "description": "CONSUMO DE DATOS"}, {"name": "SMO", "url": "http://100.123.251.118:82/consulta_usuarios.aspx", "description": "APROVISIONAR LA LINEA SMO"}, {"name": "CONFIRMAR IMEI REGISTRADO/ROBADO", "url": "https://www.imeicolombia.com.co/", "description": "IMEI BLOQUEO Y DUPLICADO"}, {"name": "CONFIGURACIÓN APN", "url": "https://www.helpforsmartphone.com/ting/es-ES/devices/?make=plum", "description": "CONFIGURAR CONEXIÓN A INTERNET"}, {"name": "CMC", "url": "http://wweb02prod:82/Claro.Cmc/Login/Login.aspx", "description": "CONCILIAR LA LINEA MÓVIL"}, {"name": "CONSULTA BROADCAST", "url": "http://100.123.251.118:8082/Componentes/Asp/ConsultaBroadCast.aspx", "description": "MENSAJES BROADCAST"}, {"name": "PORTAL SMS", "url": "http://172.24.216.148:8002/PortalSMS/#/login", "description": "SUSCRIPCIÓN Y CONTENIDOS SMS"}, {"name": "MAPA DE COBERTURA", "url": "https://www.claro.com.co/personas/servicios/servicios-moviles/cobertura/?fuente=google&medio=cpl&campaign=CLA800153993_POS_POR_PILOTO-CPA_CPL_DIS_PMA_DPY_PEF&keyword=&gad_source=1&gad_campaignid=23849361094&gbraid=0AAAAAC4zIb4_BeWOizN6zEdPcEbkY5H1e&gclid=EAIaIQobChMIkpPmwO7PlAMVBaFaBR3eUB6fEAAYASAAEgL3hfD_BwE", "description": "MAPA DE COBERTURA 2G,3G,4G,5G"}, {"name": "PORTABILIDAD", "url": "https://www.portabilidadcolombia.com.co/", "description": "CONFIRMAR PORTABILIDAD"}]}, {"name": "SOPORTE MÓVIL PREPAGO PAQUETES", "apps": [{"name": "C_MAX", "url": "http://172.24.4.168/custcare_cmax//ErrorPage.su?", "description": "RECARGAS Y PAQUETES"}]}, {"name": "AC PLUS", "apps": [{"name": "AC PLUS", "url": "https://acplus.claro.com.co/login", "description": "AC GESTIÓN"}]}, {"name": "TECNOLOGIA", "apps": [{"name": "ASCARD", "url": "https://ascard.claro.com.co:10110/AdminWeb/pages/login/login.jsf", "description": "CONSULTA DE EQUIPOS FINANCIADOS"}, {"name": "ABSOLUT", "url": "https://ds.absolute.com/idp-discovery?entityID=https%3A%2F%2Fnamespace.absolute.com%2Fsaml2%2Fsp%2Fcc.absolute.com.shib&return=https%3A%2F%2Fcc.absolute.com%2FShibboleth.sso%2FLogin%3FSAMLDS%3D1%26target%3Dss%253Amc%253Ac84fe14d3ad3e587c82130563c1a34cc062158624cb5b2acc3921f251fc8ff95%20Absolute%20Absolute%20IDP%20Discovery%20Service", "description": "LIBERAR TABLET Y PC"}, {"name": "LOGITECH", "url": "https://appsnotus.logytechmobile.com/notusils/Trazabilidad/BusquedaServicios.aspx?", "description": "VALIDAR ENTREGA DE EQUIPOS A DOMICILIO"}, {"name": "PHONE  PROTEC", "url": "https://phpterminal.claro.com.co:8080/PhoneProtectWeb/login", "description": "LIBERAR CELULARES"}]}, {"name": "CASA DE COBRANZA HOGAR Y MÓVIL", "apps": [{"name": "GEVENUE", "url": "https://portalgevenue.claro.com.co/gevenue/", "description": "CASAS DE COBRO"}]}, {"name": "ELIMINAR APP MI CLARO", "apps": [{"name": "MI CLARO USUARIOS", "url": "https://www.claroparatiprimero.co/landing-eliminacion/", "description": "ELIMINAR APP MI CLARO"}]}]};

const STORAGE_KEY = 'portal-apps-indra:v1';

const topNav = document.getElementById('topNav');
const content = document.getElementById('content');
const search = document.getElementById('search');
const clear = document.getElementById('clear');
const counter = document.getElementById('counter');
const adminBar = document.getElementById('adminBar');
const modal = document.getElementById('modal');

let editMode = false;
let DATA = loadData();
let currentMain = Object.keys(DATA)[0] || '';
let focusGroup = null;

function cloneSeed(){
  return JSON.parse(JSON.stringify(SEED_DATA));
}

function loadData(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw){
      const seed = cloneSeed();
      saveData(seed);
      return seed;
    }
    const parsed = JSON.parse(raw);
    if(!isValidData(parsed)) return cloneSeed();
    return parsed;
  }catch(err){
    console.warn('No se pudieron leer los datos guardados:', err);
    return cloneSeed();
  }
}

function isValidData(data){
  return data && typeof data === 'object' && !Array.isArray(data)
    && Object.values(data).every(groups =>
      Array.isArray(groups) && groups.every(g =>
        g && typeof g.name === 'string' && Array.isArray(g.apps) &&
        g.apps.every(a => a && typeof a.name === 'string' && typeof a.url === 'string')
      )
    );
}

function saveData(data = DATA){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  }catch(err){
    console.warn('No se pudieron guardar los datos:', err);
    alert('No se pudo guardar. El almacenamiento del navegador está lleno o bloqueado.');
    return false;
  }
}

function esc(str){
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[c]));
}

function isValidUrl(url){
  return /^https?:\/\/\S+$/i.test(String(url || '').trim());
}

// Un enlace sin URL válida se muestra igual que los demás (mismo HTML y estilos),
// pero no navega: en su lugar indica que falta configurar la URL.
function appHref(app){
  return isValidUrl(app.url) ? `href="${esc(app.url)}"` : '';
}

function appMissingUrl(app){
  return isValidUrl(app.url) ? '' : ` title="Sin URL configurada" aria-disabled="true"`;
}

function highlight(str, term){
  if(!term) return esc(str);
  const safe = term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return esc(str).replace(new RegExp(`(${safe})`,'ig'), '<mark>$1</mark>');
}

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

  topNav.querySelectorAll('.main-btn[data-main]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      currentMain=btn.dataset.main;
      search.value='';
      renderNav();
      renderMain();
    });
  });

  topNav.querySelectorAll('[data-act]').forEach(btn=>{
    btn.addEventListener('click',ev=>{
      ev.stopPropagation();
      handleAction(btn.dataset.act, btn.dataset);
    });
  });
}

function renderMain(){
  const groups = DATA[currentMain] || [];
  const total = groups.reduce((n,g)=>n+g.apps.length,0);
  counter.textContent = `${currentMain} · ${total} aplicación(es)${editMode?' · modo edición':''}`;

  // tras crear/editar, abrimos el grupo afectado para que el cambio se vea
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

  content.innerHTML = groups.map((g,gi)=>`
    <div class="group ${gi===openIndex?'open':''}" data-gi="${gi}">
      <button class="group-header" aria-expanded="${gi===openIndex}">
        <span>${esc(g.name)} <em class="count">${g.apps.length}</em></span>
        <span class="chevron">▼</span>
      </button>
      ${editMode ? `
        <div class="group-tools">
          <button class="btn sm" data-act="add-app" data-gi="${gi}">+ Enlace</button>
          <button class="btn sm" data-act="edit-group" data-gi="${gi}">✎ Grupo</button>
          <button class="btn sm danger" data-act="del-group" data-gi="${gi}">🗑 Grupo</button>
        </div>` : ''}
      <div class="apps">
        ${g.apps.map((a,ai)=>`
          <div class="app-cell">
            <a class="app${isValidUrl(a.url)?'':' no-url'}" ${appHref(a)} target="_blank" rel="noopener noreferrer"${appMissingUrl(a)}>
              <div class="app-name">${esc(a.name)}</div>
              <div class="app-desc">${esc(a.description || 'Abrir aplicación')}</div>
              <div class="app-url">${esc(a.url)}</div>
            </a>
            ${editMode ? `
              <div class="app-tools">
                <button class="btn sm" data-act="edit-app" data-gi="${gi}" data-ai="${ai}">✎</button>
                <button class="btn sm danger" data-act="del-app" data-gi="${gi}" data-ai="${ai}">🗑</button>
              </div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  content.querySelectorAll('.group-header').forEach(header=>{
    header.addEventListener('click',()=>{
      const group=header.parentElement;
      group.classList.toggle('open');
      header.setAttribute('aria-expanded', group.classList.contains('open'));
    });
  });

  bindActions(content);
}

function bindActions(root){
  root.querySelectorAll('[data-act]').forEach(btn=>{
    btn.addEventListener('click',ev=>{
      ev.stopPropagation();
      handleAction(btn.dataset.act, btn.dataset);
    });
  });
}

function searchApps(term){
  const q=term.trim().toLowerCase();
  if(!q){
    renderNav();
    renderMain();
    return;
  }

  topNav.querySelectorAll('.main-btn').forEach(b=>b.classList.remove('active'));
  counter.textContent='Resultados de búsqueda';

  const results=[];
  Object.entries(DATA).forEach(([main,groups])=>{
    groups.forEach((group,gi)=>{
      group.apps.forEach((app,ai)=>{
        const hay=[main,group.name,app.name,app.description,app.url].join(' ').toLowerCase();
        if(hay.includes(q)) results.push({main,group:group.name,gi,ai,app});
      });
    });
  });

  if(!results.length){
    content.innerHTML=`<div class="empty"><strong>No encontramos aplicaciones.</strong><br><br>Prueba con palabras como factura, soporte, IMEI, correo, hogar, móvil, tecnología, etc.</div>`;
    bindActions(content);
    return;
  }

  content.innerHTML=`
    <div class="group open">
      <div class="group-header" style="cursor:default">
        <span>${results.length} resultado(s)</span>
        <span>🔎</span>
      </div>
      <div class="apps" style="display:grid">
        ${results.map(r=>`
          <div class="app-cell">
            <a class="app${isValidUrl(r.app.url)?'':' no-url'}" ${appHref(r.app)} target="_blank" rel="noopener noreferrer"${appMissingUrl(r.app)}>
              <div class="app-name">${highlight(r.app.name,q)}</div>
              <div class="app-desc">${highlight(r.app.description || 'Abrir aplicación',q)}</div>
              <div class="app-url">${esc(r.main)} · ${esc(r.group)}</div>
            </a>
            ${editMode ? `
              <div class="app-tools">
                <button class="btn sm" data-act="edit-app" data-main="${esc(r.main)}" data-gi="${r.gi}" data-ai="${r.ai}">✎</button>
                <button class="btn sm danger" data-act="del-app" data-main="${esc(r.main)}" data-gi="${r.gi}" data-ai="${r.ai}">🗑</button>
              </div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>`;

  bindActions(content);
}

/* ---------- CRUD ---------- */

function groupAt(main, gi){
  return (DATA[main] || [])[gi] || null;
}

function uniqueName(base, taken){
  const has = n => taken.some(t => t.toLowerCase() === n.toLowerCase());
  if(!has(base)) return base;
  let i = 2;
  while(has(`${base} (${i})`)) i++;
  return `${base} (${i})`;
}

let modalEscHandler = null;

function openModal({title, fields, submitLabel='Guardar', onSubmit}){
  modal.innerHTML = `
    <div class="modal-backdrop" data-close>
      <form class="modal-box" id="modalForm" novalidate>
        <h3>${esc(title)}</h3>
        ${fields.map(f=>`
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
  const inputs = [...form.querySelectorAll('input')];

  const fail = msg => { error.textContent = msg; error.hidden = false; };

  // el backdrop cierra solo si el clic cae en el fondo, no dentro del formulario
  modal.querySelectorAll('[data-close]').forEach(el=>{
    el.addEventListener('click',e=>{
      if(el.classList.contains('modal-backdrop') && e.target !== el) return;
      closeModal();
    });
  });

  modalEscHandler = e => { if(e.key === 'Escape') closeModal(); };
  document.addEventListener('keydown', modalEscHandler);
  inputs[0]?.focus();

  form.addEventListener('submit',e=>{
    e.preventDefault();
    const values = {};
    for(const f of fields){
      const raw = (form.elements[f.name].value || '').trim();
      if(f.required && !raw) return fail(`El campo "${f.label}" es obligatorio.`);
      if(f.type === 'url' && raw && !/^https?:\/\/\S+$/i.test(raw)){
        return fail('La URL debe empezar con http:// o https://');
      }
      values[f.name] = raw;
    }
    onSubmit(values);
    closeModal();
  });
}

function closeModal(){
  modal.hidden = true;
  modal.innerHTML = '';
  if(modalEscHandler){
    document.removeEventListener('keydown', modalEscHandler);
    modalEscHandler = null;
  }
}

function handleAction(act, ds){
  const main = ds.main || currentMain;

  switch(act){
    /* categorías */
    case 'add-main':
      openModal({
        title:'Nueva categoría',
        fields:[{name:'name', label:'Nombre', required:true, placeholder:'Ej. HOGAR'}],
        onSubmit:v=>{
          const name = uniqueName(v.name.toUpperCase(), Object.keys(DATA));
          DATA[name] = [];
          currentMain = name;
          if(saveData()) renderAll();
        }
      });
      break;

    case 'edit-main':
      openModal({
        title:`Editar categoría "${main}"`,
        fields:[{name:'name', label:'Nombre', required:true, value:main}],
        onSubmit:v=>{
          const name = uniqueName(v.name.toUpperCase(), Object.keys(DATA).filter(k=>k!==main));
          if(name === main) return;
          DATA[name] = DATA[main];
          delete DATA[main];
          DATA = Object.fromEntries(Object.entries(DATA).sort(([a],[b])=>a.localeCompare(b,'es')));
          currentMain = name;
          if(saveData()) renderAll();
        }
      });
      break;

    case 'del-main':
      if(!confirm(`¿Eliminar la categoría "${main}" y sus ${DATA[main].reduce((n,g)=>n+g.apps.length,0)} enlace(s)?`)) return;
      delete DATA[main];
      currentMain = Object.keys(DATA)[0] || '';
      if(saveData()) renderAll();
      break;

    /* grupos */
    case 'add-group':
      openModal({
        title:`Nuevo grupo en ${main}`,
        fields:[{name:'name', label:'Nombre del grupo', required:true, placeholder:'Ej. FACTURACIÓN'}],
        onSubmit:v=>{
          DATA[main].push({name:uniqueName(v.name.toUpperCase(), DATA[main].map(g=>g.name)), apps:[]});
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
        fields:[{name:'name', label:'Nombre del grupo', required:true, value:g.name}],
        onSubmit:v=>{
          g.name = uniqueName(v.name.toUpperCase(), DATA[main].map(x=>x.name).filter(n=>n!==g.name));
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
      focusGroup = Math.min(+ds.gi, DATA[main].length - 1);
      if(DATA[main].length) focusGroup = Math.max(0, focusGroup);
      else focusGroup = 0;
      if(saveData()) renderAll();
      break;
    }

    /* enlaces */
    case 'add-app':
    case 'edit-app': {
      const gi = +ds.gi;
      const g = groupAt(main, gi);
      if(!g) return;
      const editing = act === 'edit-app' ? g.apps[+ds.ai] : null;

      openModal({
        title: editing ? 'Editar enlace' : `Nuevo enlace en ${g.name}`,
        fields:[
          {name:'name', label:'Nombre', required:true, value:editing?.name, placeholder:'Ej. PARADIGMA'},
          {name:'url', label:'URL', type:'url', required:true, value:editing?.url, placeholder:'https://...'},
          {name:'description', label:'Descripción', value:editing?.description, placeholder:'Opcional'}
        ],
        onSubmit:v=>{
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
      if(saveData()) renderAll();
      break;
    }

    /* datos */
    case 'reset':
      if(!confirm('Se reemplazarán todos los cambios por los datos originales. ¿Continuar?')) return;
      DATA = cloneSeed();
      currentMain = Object.keys(DATA)[0] || '';
      if(saveData()) renderAll();
      break;

    case 'export': {
      const blob = new Blob([JSON.stringify(DATA, null, 2)], {type:'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'portal-apps.json';
      a.click();
      URL.revokeObjectURL(a.href);
      break;
    }

    case 'import': {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json,.json';
      input.addEventListener('change',async()=>{
        const file = input.files?.[0];
        if(!file) return;
        try{
          const parsed = JSON.parse(await file.text());
          if(!isValidData(parsed)) throw new Error('formato');
          if(!confirm('¿Reemplazar todos los datos actuales por los del archivo?')) return;
          DATA = parsed;
          currentMain = Object.keys(DATA)[0] || '';
          if(saveData()) renderAll();
        }catch(err){
          alert('El archivo no tiene un formato válido.');
        }
      });
      input.click();
      break;
    }
  }
}

function renderAll(){
  if(!DATA[currentMain]) currentMain = Object.keys(DATA)[0] || '';
  search.value = '';
  searchApps('');
}

bindActions(document.getElementById('adminBar'));

document.getElementById('editToggle').addEventListener('click',()=>{
  editMode = !editMode;
  adminBar.hidden = !editMode;
  renderAll();
});

search.addEventListener('input',e=>searchApps(e.target.value));
clear.addEventListener('click',()=>{search.value='';search.focus();renderAll();});

renderAll();
