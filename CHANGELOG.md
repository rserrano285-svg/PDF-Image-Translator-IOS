# Changelog — PDF Image Translator IOS

Convención RS App: cada versión vive en su carpeta (`V1`, `V2`, …) y se registra aquí.

## V7 — Cristal claro (2026-11-27)

- Diseño **Cristal Claro**: fondo claro con degradados azules, tarjetas translúcidas y acentos azules, basado en el mockup `pdf-mockup.html`.
- El **modo claro es el predeterminado**; el botón de la cabecera alterna a cristal oscuro.
- Insignia `V7` en la cabecera, pie de página e iconos/manifiesto propios (`*-v7.png`).
- Service worker con caché `pdf-translator-v7-v1`; limpia las cachés de V6 y anteriores.
- La raíz y el `404.html` redirigen a V7. V6 se conserva como respaldo.
- Sin cambios en el motor de traducción, OCR ni generación de PDF/imagen.

## V6 — Respaldo de traducción y error visible (revisión 14)

- Portado el renderizado de la app de Windows, respaldos de traducción y mensaje de error visible.
