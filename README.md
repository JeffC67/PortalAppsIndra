# Portal de Aplicaciones

Directorio de enlaces internos, desplegado en GitHub Pages. **Solo lectura**: el
equipo abre el portal y usa los accesos; el catálogo se actualiza en el repo.

## Estructura

- `index.html`: estructura HTML.
- `styles.css`: estilos.
- `data.js`: **el catálogo**. Fuente única de verdad; se edita a mano y se sube al repo.
- `app.js`: visor + respaldo `FALLBACK` embebido por si `data.js` falta o se rompe.
- `tools/build-fallback.js`: regenera el `FALLBACK` de `app.js` a partir de `data.js`.

## Cómo se actualiza el catálogo

```
data.js  →  catálogo (lo ve todo el equipo)
app.js   →  respaldo embebido, se usa solo si data.js no carga
```

1. Edita `data.js` (categorías → grupos → enlaces con `name`, `url`, `description`).
2. Sube `version` en una unidad y actualiza `build` con la fecha (YYYY-MM-DD).
3. Regenera el respaldo: `node tools/build-fallback.js`.
4. Commit + push. GitHub Pages lo sirve en ~1 minuto.

Si prefieres Pull Request, sube los dos archivos (`data.js` y `app.js`) juntos en la
misma rama: si divergen, el respaldo queda desactualizado.

## Notas

- El portal **no** edita nada: no hay PIN, ni token de GitHub, ni publicación desde el
  navegador. Eso se retiró en la v3; quien tenga un borrador viejo guardado en el
  navegador lo verá ignorado y se limpia solo.
- Enlaces sin URL configurada se muestran igual pero no navegan (borde punteado).
- Al cambiar `app.js`, `styles.css` o `data.js`, sube la versión en `index.html` (`?v=…`)
  para que los navegadores no sirvan la versión cacheada anterior.