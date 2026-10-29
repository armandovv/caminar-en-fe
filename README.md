# Fortaleza – prototipo (HTML/JS puro)

Versículos bíblicos según la lucha que enfrentas (lujuria, pereza, envidia, ira, orgullo, avaricia, gula).

## Probar en el navegador

Abre `www/index.html` directamente, o sirve la carpeta:

```
cd www && python3 -m http.server 8080
```

## Estructura

- `www/data.js` – contenido (luchas, versículos, contexto, aplicación, oración). Edítalo para añadir más.
- `www/app.js` – lógica: elegir lucha, versículo del día, botón de emergencia, contador, notificaciones.
- `www/styles.css` – estilos (modo claro/oscuro automático).

## Pasar a Android con Capacitor

Requisitos: Node.js 18+ y Android Studio.

```
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/local-notifications
npx cap init Fortaleza com.tunombre.fortaleza --web-dir=www
npx cap add android
npx cap sync
npx cap open android
```

Desde Android Studio ejecuta en tu teléfono (modo desarrollador + USB) o en un emulador.
Cada vez que cambies archivos en `www/`, corre `npx cap sync`.

### Notificaciones

`app.js` ya usa `window.Capacitor.Plugins.LocalNotifications` cuando existe. En Android 13+ el permiso
`POST_NOTIFICATIONS` se solicita al activar el recordatorio. Para alarmas exactas puede hacer falta
ajustar permisos en `AndroidManifest.xml`.

## Antes de publicar

1. **Verifica los textos bíblicos** contra la versión que elijas y confirma su licencia (RV1960 tiene derechos; RV1909 es de dominio público).
2. Añade política de privacidad (Google Play la exige).
3. Prueba con 10–20 personas antes de lanzar.
4. Cuenta de Google Play Developer (pago único aprox. 25 USD).
