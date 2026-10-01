# Portal de Aplicaciones

CRUD de enlaces con permisos, desplegado en GitHub Pages. Sin servidor propio.

## Estructura

- `index.html`: estructura HTML.
- `styles.css`: estilos.
- `data.js`: **catálogo publicado**. Es lo que ve todo el equipo. Lo genera la app.
- `app.js`: lógica + `FALLBACK` (respaldo embebido por si `data.js` falta o se rompe).

## Cómo funciona la publicación

```
localStorage  →  borrador local de quien edita (instantáneo, solo en su navegador)
data.js       →  catálogo publicado (lo ve todo el equipo)
app.js FALLBACK →  respaldo si data.js no existe o está inválido
```

Al editar, el badge de la barra muestra si tienes cambios sin publicar. Cuando quieras
compartirlos, pulsas **Publicar al equipo** y la app hace un commit a `data.js` vía la API
de GitHub. GitHub Pages lo sirve en ~1 minuto.

## Permisos: qué es real y qué no

GitHub Pages es estático: no hay servidor que autentique a nadie. Conviene ser claro:

| Capa | Qué protege | Qué NO protege |
|---|---|---|
| PIN de edición | Que un compañero no borre enlaces por accidente | Nada real: el código es público, cualquiera con devtools lo salta |
| Token de GitHub | Quién puede hacer commit al repositorio | Es la única barrera real |

El PIN se guarda como hash SHA-256 en `localStorage` del navegador. **No es seguridad.**
Si necesitas control de acceso real, la única vía sin servidor propio es el token de
GitHub; para autenticación por usuario harías falta un servicio externo (OAuth, Netlify
Identity, un Worker).

## Uso

1. **Gestionar enlaces** → la primera vez te pide definir un PIN de 4+ caracteres.
2. Crea, edita y borra categorías, grupos y enlaces. Se guarda al instante.
3. **Configurar GitHub** → pega un token para poder publicar.
   - Token clásico: scope `repo`.
   - Token fino (recomendado): solo ese repositorio, permisos **Contents: Read and write**.
4. **Publicar al equipo** → commit automático a `data.js`.

El token se guarda solo en `sessionStorage`: al cerrar la pestaña desaparece.

### Otras acciones

- **Descargar data.js**: genera el archivo para subirlo a mano si prefieres no dar token.
- **Exportar / Importar**: mueve el catálogo entre equipos a mano (`portal-apps.json`).
- **Descartar locales**: vuelve al catálogo publicado y borra tu borrador.

## Notas

- Al publicar se incrementa `version` y se actualiza `build` (fecha) en `data.js`.
- Si borras los datos del sitio en tu navegador, vuelves a ver el catálogo publicado.
- Enlaces sin URL configurada se muestran igual pero no navegan (borde punteado).
- Al cambiar `app.js`, `styles.css` o `data.js`, sube la versión en `index.html` (`?v=…`)
  para que los navegadores no sirvan la versión cacheada anterior.