# Portal de Aplicaciones

Portal de acceso rápido a herramientas de Indra, Hogar y Móvil. Sin servidor, sin base de datos.

## Estructura

- `index.html`: estructura HTML.
- `styles.css`: estilos.
- `data.js`: **catálogo publicado**, es lo que ve todo el equipo. GitHub Pages lo sirve.
- `app.js`: lógica de la app. Incluye `SEED_DATA` como respaldo si `data.js` no está disponible.

## Gestión de enlaces (CRUD)

El botón **Gestionar enlaces** del encabezado activa el modo edición. Ahí se puede:

- **Crear**: categorías (`+ Categoría`), grupos (`+ Grupo`) y enlaces (`+ Enlace`).
- **Editar**: botones `✎` sobre categorías, grupos y enlaces, también desde los resultados de búsqueda.
- **Eliminar**: botones `🗑`, con confirmación.

Los cambios se guardan al instante en el navegador donde los haces, así que sobreviven al recargar.

## Cómo comparte el equipo un cambio

Sin servidor, el catálogo compartido es un archivo del repositorio:

1. Entra al portal y pulsa **Gestionar enlaces**.
2. Crea, edita o elimina lo que necesites.
3. Pulsa **Publicar para el equipo**: descarga un `data.js` con todos los cambios.
4. Sube ese `data.js` al repositorio. En ~1 minuto GitHub Pages lo publica y todo el
   equipo ve la versión nueva al recargar.

Mientras no subas el `data.js`, tus cambios solo existen en tu navegador: un compañero
que entre verá la versión publicada anterior.

**Importar** / **Exportar** sirven para pasar el catálogo a mano entre equipos sin tocar el repo.

## Notas

- `localStorage` es un borrador local y tiene prioridad sobre `data.js`. Si borras los datos
  del sitio en tu navegador, vuelves a ver el catálogo publicado.
- `data.js` incluye `version` y `build`. El botón de publicar los incrementa automáticamente.
- Si `data.js` falta o se rompe, la app cae automáticamente al `SEED_DATA` de `app.js`.
- Enlaces sin URL configurada (por ejemplo `MAXIMO`) se muestran igual, pero no navegan:
  aparecen con borde punteado y `title` explicando que falta la URL.
- Al cambiar `app.js`, `styles.css` o `data.js`, sube el número de versión en `index.html`
  (`?v=...`) para que los navegadores no sirvan la versión cacheada anterior.