# Carpeta /docs — Documentos adjuntos

Esta carpeta contiene los archivos PDF que se pueden adjuntar a las actividades del itinerario (billetes, reservas, entradas, etc.).

## Cómo añadir un PDF a una actividad

1. **Coloca el archivo PDF en esta carpeta** (`/docs/`).
   - Usa nombres de archivo simples, sin espacios ni caracteres especiales.
   - Ejemplos de buenos nombres:
     - `billete-vuelo.pdf`
     - `reserva-hotel-paris.pdf`
     - `entrada-louvre.pdf`
     - `billete-tren-zurich.pdf`

2. **Vincula el PDF a una actividad** desde el panel de administración (`admin.html`):
   - Abre la actividad que deseas editar.
   - En el campo **"Archivo PDF (nombre de archivo)"**, escribe el nombre exacto del archivo (incluyendo `.pdf`).
   - Guarda los cambios.

3. **Resultado**: en la app principal (`index.html`), la tarjeta de la actividad mostrará un icono 📎. Al abrir el modal de la actividad, aparecerá un botón para descargar / abrir el PDF.

## Ejemplos de archivos que puedes añadir

| Archivo sugerido              | Actividad                              |
|-------------------------------|----------------------------------------|
| `billete-vuelo-veling.pdf`    | Vuelo Barcelona → París (Día 1)        |
| `entrada-louvre.pdf`          | Museo del Louvre (Día 2)               |
| `crucero-sena-menu.pdf`       | Crucero por el Sena (Día 3)            |
| `billete-tren-paris-zurich.pdf` | Tren París → Zúrich (Día 4)          |
| `billete-tren-zurich-munich.pdf` | Tren Zúrich → Múnich (Día 6)        |
| `billete-tren-munich-viena.pdf` | Tren Múnich → Viena (Día 9)          |
| `billete-tren-viena-praga.pdf`  | Tren Viena → Praga (Día 11)          |
| `reserva-hotel-paris.pdf`     | Hotel en París                         |
| `reserva-hotel-zurich.pdf`    | Hotel en Zúrich                        |

## Notas

- Los PDFs se abren en una nueva pestaña del navegador.
- El tamaño del archivo no está limitado por la app, pero ten en cuenta que archivos muy grandes pueden tardar en cargar en móviles.
- Esta carpeta es local. Si publicas la app en GitHub Pages, asegúrate de subir también los PDFs al repositorio dentro de esta carpeta.
