# Changelog — PDF Image Translator IOS

Convención RS App: cada versión vive en su carpeta (`V1`, `V2`, …) y se registra aquí.

## V8 — Colores y formato conservados en imágenes (2026-11-27)

- **Imágenes**: el OCR trabaja por palabra y detecta el color de la tinta de cada una, por lo que las etiquetas coloreadas (p. ej. rojas sobre fondo negro) conservan su color en la traducción.
- La línea se divide en tramos de igual color y cada tramo se traduce y se dibuja con su color original.
- El fondo se toma del **color dominante de la zona**, así se respetan fondos negros, claros y banners de color (no aparecen rectángulos grises).
- La fuente se reduce hasta que la traducción cabe en el **ancho y la altura disponibles** hasta la siguiente línea: el texto ya no se pisa entre líneas.
- Service worker con caché `pdf-translator-v8-v1`; la raíz y el `404.html` apuntan a V8. V7 se conserva como respaldo.
- Sin cambios en la traducción de PDFs con capa de texto ni en el diseño Cristal Claro.

## V7 — Cristal claro (2026-11-27)

- Diseño **Cristal Claro**: fondo claro con degradados azules, tarjetas translúcidas y acentos azules, basado en el mockup `pdf-mockup.html`.
- El **modo claro es el predeterminado**; el botón de la cabecera alterna a cristal oscuro.
- Insignia `V7` en la cabecera, pie de página e iconos/manifiesto propios (`*-v7.png`).
- Service worker con caché `pdf-translator-v7-v1`; limpia las cachés de V6 y anteriores.
- La raíz y el `404.html` redirigen a V7. V6 se conserva como respaldo.
- Sin cambios en el motor de traducción, OCR ni generación de PDF/imagen.

## V6 — Respaldo de traducción y error visible (revisión 14)

- Portado el renderizado de la app de Windows, respaldos de traducción y mensaje de error visible.
