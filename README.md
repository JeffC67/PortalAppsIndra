# Portal de Aplicaciones

Versión simple del portal original.

## Estructura

- `index.html`: estructura HTML.
- `styles.css`: estilos que estaban dentro de `<style>`.
- `app.js`: JavaScript, incluyendo `SEED_DATA` con todos los datos de las aplicaciones.

## Gestión de enlaces (CRUD)

El botón **Gestionar enlaces** en el encabezado activa el modo edición. Ahí se puede:

- **Crear**: categorías (`+ Categoría`), grupos (`+ Grupo`) y enlaces (`+ Enlace`).
- **Editar**: botones `✎` sobre categorías, grupos y enlaces, también desde los resultados de búsqueda.
- **Eliminar**: botones `🗑`, con confirmación.

Los cambios se guardan en `localStorage` del navegador, así que persisten al recargar.
El botón **Restaurar originales** vuelve a los datos de `app.js`, y **Exportar** / **Importar**
permiten mover el catálogo entre equipos mediante un archivo `portal-apps.json`.

## Importante

Los datos originales permanecen dentro de `app.js` como `SEED_DATA` y sirven de respaldo.
No se utiliza Excel, SQLite, API ni servidor.

## Ejecución

Puede abrirse directamente haciendo doble clic en `index.html`.
