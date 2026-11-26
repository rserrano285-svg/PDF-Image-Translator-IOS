# PDF Image Translator IOS - V1

PWA independiente para **iPhone** que traduce **PDFs e imágenes conservando el formato original**. Todo se procesa en el navegador del teléfono: el archivo no se sube a ningún servidor.

Es una aplicación **separada** de `Lingua IOS` (video) y de `PDF-Image-Translator-Windows` (escritorio).

## Qué hace

- **PDF**: renderiza cada página con `pdf.js`, traduce las líneas, tapa el texto original con su color de fondo y dibuja la traducción sobre la página; luego genera un PDF nuevo con `pdf-lib`. Conserva diagramas, imágenes y layout.
- **Imágenes**: reconoce el texto con `tesseract.js`, lo traduce y lo dibuja sobre la imagen, manteniendo el tipo de imagen original.
- 16 idiomas de destino, tema claro/oscuro, vista previa antes de guardar y límite de 20 páginas pensado para iPhone.

## Uso

Abre la PWA (en HTTPS, o por HTTP en la misma Wi‑Fi), elige un PDF o imagen, selecciona el idioma y pulsa **Traducir**. Después pulsa **Compartir / Guardar**: en iPhone elige *Guardar imagen* en Fotos para imágenes, o *Guardar en Archivos* para PDFs (iOS no permite guardar PDFs en Fotos). No se escribe nada en la carpeta del proyecto.

## Limitaciones

- En Safari los PDFs largos y el OCR consumen memoria: el límite es 20 páginas y conviene usar archivos pequeños.
- La traducción usa el mismo endpoint público de Google que la app de Windows; requiere conexión.
- Los modelos de OCR y las librerías se descargan la primera vez y se guardan en caché; iOS puede liberar esa memoria si faltara espacio.
- No hay servidor ni cuentas: no se guarda nada en la nube.

## Versión y acceso

Versión actual: **V4** — https://rserrano285-svg.github.io/PDF-Image-Translator-IOS/V4/

Convención RS App: cada versión vive en su carpeta (`V1`, `V2`, `V3`, `V4`, ...); la raíz redirige a la última. Las versiones anteriores redirigen a V4.

## Apoyo

Gratuita y de código abierto. Si te sirve: [PayPal (rene285serrano)](https://paypal.me/rene285serrano).

Repositorio: https://github.com/rserrano285-svg/PDF-Image-Translator-IOS
