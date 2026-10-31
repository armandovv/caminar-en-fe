(function () {
  "use strict";

  // ---------- Almacenamiento (localStorage; en Capacitor puedes migrar a @capacitor/preferences) ----------
  var KEY = "fortaleza_v1";
  function cargar() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function guardar(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
  }
  var estado = cargar();

  // ---------- Utilidades ----------
  function $(id) { return document.getElementById(id); }
  function hoyStr() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function diasDesde(fechaStr) {
    var a = new Date(fechaStr + "T00:00:00");
    var b = new Date(hoyStr() + "T00:00:00");
    return Math.max(0, Math.round((b - a) / 86400000));
  }
  function luchaActual() {
    for (var i = 0; i < window.LUCHAS.length; i++) {
      if (window.LUCHAS[i].id === estado.lucha) return window.LUCHAS[i];
    }
    return null;
  }
  function mostrar(id) {
    ["pantalla-bienvenida", "pantalla-elegir", "pantalla-inicio", "pantalla-compartir", "pantalla-emergencia", "pantalla-ajustes"].forEach(function (p) {
      $(p).classList.toggle("oculta", p !== id);
    });
    window.scrollTo(0, 0);
  }

  // ---------- Elegir lucha ----------
  function pintarLuchas() {
    var cont = $("lista-luchas");
    cont.innerHTML = "";
    window.LUCHAS.forEach(function (l) {
      var b = document.createElement("button");
      b.className = "lucha";
      b.innerHTML = '<span class="ico">' + l.icono + "</span><strong>" + l.nombre + "</strong><small>" + l.resumen + "</small>";
      b.addEventListener("click", function () {
        estado.lucha = l.id;
        estado.inicio = estado.inicio || hoyStr();
        estado.ultimoCheck = estado.ultimoCheck || null;
        guardar(estado);
        irInicio();
      });
      cont.appendChild(b);
    });
  }

  // ---------- Versículo del día ----------
  function versiculoDelDia(l) {
    var d = new Date();
    var dia = Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
    return l.versiculos[dia % l.versiculos.length];
  }
  function azar(l, excluirRef) {
    var opciones = l.versiculos.filter(function (v) { return v.ref !== excluirRef; });
    if (!opciones.length) opciones = l.versiculos;
    return opciones[Math.floor(Math.random() * opciones.length)];
  }
  function pintarVersiculo(v) {
    $("v-texto").textContent = "“" + v.texto + "”";
    $("v-ref").textContent = v.ref;
    $("v-contexto").textContent = v.contexto;
    $("v-aplicacion").textContent = "Para hoy: " + v.aplicacion;
    $("v-msg").textContent = "";
    estado.refActual = v.ref;
  }

  // ---------- Compartir ----------
  // El texto compartido NO incluye el nombre de tu lucha, para proteger tu privacidad.
  function versiculoMostrado() {
    var l = luchaActual();
    if (!l) return null;
    for (var i = 0; i < l.versiculos.length; i++) {
      if (l.versiculos[i].ref === estado.refActual) return l.versiculos[i];
    }
    return l.versiculos[0];
  }
  function textoCompartir(v) {
    return "“" + v.texto + "”\n— " + v.ref + "\n\n" +
      v.contexto + "\n\n" +
      "Para hoy: " + v.aplicacion + "\n\n" +
      "Caminar en Fe";
  }
  // ---- Compartir como imagen ----
  var IMG_W = 1080, IMG_H = 1350;
  var TEMAS = [
    { nombre: "Noche",    stops: ["#26335A", "#141C38", "#0A0F22"], texto: "#F6F4EF", acento: "#D6A455" },
    { nombre: "Amanecer", stops: ["#F6B26B", "#D9667A", "#5E3A87"], texto: "#FFFFFF", acento: "#FFE2A8" },
    { nombre: "Bosque",   stops: ["#2D6A4F", "#1B4332", "#0B2218"], texto: "#F1F7F2", acento: "#E3C26B" },
    { nombre: "Cielo",    stops: ["#6DB3F2", "#2F6FB5", "#143A6B"], texto: "#FFFFFF", acento: "#FFE9A8" }
  ];
  var temaIdx = 0;

  function conAlfa(hex, a) {
    var n = parseInt(hex.slice(1), 16);
    return "rgba(" + (n >> 16) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
  }
  function envolver(ctx, texto, ancho) {
    var palabras = texto.split(/\s+/), lineas = [], linea = "";
    palabras.forEach(function (p) {
      var prueba = linea ? linea + " " + p : p;
      if (ctx.measureText(prueba).width > ancho && linea) { lineas.push(linea); linea = p; }
      else { linea = prueba; }
    });
    if (linea) lineas.push(linea);
    return lineas;
  }

  function dibujarImagen() {
    var v = versiculoMostrado();
    if (!v) return;
    var c = $("c-canvas");
    var ctx = c.getContext("2d");
    var t = TEMAS[temaIdx];
    c.width = IMG_W; c.height = IMG_H;

    // fondo en degradado
    var g = ctx.createLinearGradient(0, 0, 0, IMG_H);
    t.stops.forEach(function (s, i) { g.addColorStop(i / (t.stops.length - 1), s); });
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, IMG_W, IMG_H);

    // rayos de luz desde arriba
    for (var i = 0; i < 7; i++) {
      var ang = (Math.PI / 180) * (35 + i * 18.3);
      var ancho = 0.06;
      ctx.beginPath();
      ctx.moveTo(IMG_W / 2, -40);
      ctx.lineTo(IMG_W / 2 + Math.cos(ang - ancho) * 2200, -40 + Math.sin(ang - ancho) * 2200);
      ctx.lineTo(IMG_W / 2 + Math.cos(ang + ancho) * 2200, -40 + Math.sin(ang + ancho) * 2200);
      ctx.closePath();
      ctx.fillStyle = conAlfa(t.acento, 0.07);
      ctx.fill();
    }
    // resplandor superior
    var r = ctx.createRadialGradient(IMG_W / 2, 0, 0, IMG_W / 2, 0, 820);
    r.addColorStop(0, conAlfa(t.acento, 0.5));
    r.addColorStop(1, conAlfa(t.acento, 0));
    ctx.fillStyle = r;
    ctx.fillRect(0, 0, IMG_W, IMG_H);

    // marco fino
    ctx.strokeStyle = conAlfa(t.acento, 0.55);
    ctx.lineWidth = 3;
    ctx.strokeRect(48, 48, IMG_W - 96, IMG_H - 96);

    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    var serif = 'Georgia, "Times New Roman", serif';

    // comilla decorativa
    ctx.fillStyle = conAlfa(t.acento, 0.75);
    ctx.font = "bold 200px " + serif;
    ctx.fillText("“", IMG_W / 2, 330);

    // versículo: se ajusta el tamaño para que quepa
    var texto = v.texto;
    var anchoTexto = IMG_W - 240;
    var tam = 72, lineas, alto;
    for (; tam >= 36; tam -= 2) {
      ctx.font = "italic " + tam + "px " + serif;
      lineas = envolver(ctx, texto, anchoTexto);
      alto = lineas.length * tam * 1.38;
      if (alto <= 640) break;
    }
    var yInicio = 430 + Math.max(0, (640 - alto) / 2);
    ctx.fillStyle = t.texto;
    ctx.shadowColor = "rgba(0,0,0,0.25)";
    ctx.shadowBlur = 8;
    lineas.forEach(function (l, k) {
      ctx.fillText(l, IMG_W / 2, yInicio + tam + k * tam * 1.38);
    });
    ctx.shadowBlur = 0;

    // línea y referencia
    var yRef = yInicio + alto + 90;
    ctx.fillStyle = conAlfa(t.acento, 0.9);
    ctx.fillRect(IMG_W / 2 - 60, yRef - 62, 120, 4);
    ctx.fillStyle = t.acento;
    ctx.font = "bold 50px " + serif;
    ctx.fillText(v.ref, IMG_W / 2, yRef + 10);

    // marca
    ctx.fillStyle = conAlfa(t.texto, 0.85);
    ctx.font = "600 34px system-ui, sans-serif";
    if ("letterSpacing" in ctx) ctx.letterSpacing = "8px";
    ctx.fillText("CAMINAR EN FE", IMG_W / 2, IMG_H - 100);
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
  }

  function pintarTemas() {
    var cont = $("temas");
    cont.innerHTML = "";
    TEMAS.forEach(function (t, i) {
      var b = document.createElement("button");
      b.className = "tema" + (i === temaIdx ? " activo" : "");
      b.setAttribute("aria-label", "Fondo " + t.nombre);
      b.style.background = "linear-gradient(160deg," + t.stops[0] + "," + t.stops[2] + ")";
      b.addEventListener("click", function () {
        temaIdx = i;
        estado.tema = i;
        guardar(estado);
        pintarTemas();
        dibujarImagen();
      });
      cont.appendChild(b);
    });
  }

  $("btn-compartir").addEventListener("click", function () {
    temaIdx = estado.tema || 0;
    $("c-msg").textContent = "";
    pintarTemas();
    dibujarImagen();
    mostrar("pantalla-compartir");
  });
  $("btn-cerrar-comp").addEventListener("click", function () { mostrar("pantalla-inicio"); });

  function esCancelacion(e) {
    return /cancel|abort/i.test(String((e && (e.name || e.message)) || ""));
  }

  async function compartirImagen() {
    var c = $("c-canvas");
    var msg = $("c-msg");
    msg.textContent = "";
    var nombre = "versiculo-" + Date.now() + ".png";
    try {
      var P = window.Capacitor && window.Capacitor.Plugins;
      if (P && P.Share && P.Filesystem) {
        var base64 = c.toDataURL("image/png").split(",")[1];
        var r = await P.Filesystem.writeFile({ path: nombre, data: base64, directory: "CACHE" });
        await P.Share.share({ title: "Caminar en Fe", files: [r.uri], dialogTitle: "Compartir versículo" });
        return;
      }
      var blob = await new Promise(function (res) { c.toBlob(res, "image/png"); });
      var file = new File([blob], nombre, { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "Caminar en Fe" });
        return;
      }
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = nombre;
      a.click();
      msg.textContent = "Imagen descargada.";
    } catch (e) {
      if (esCancelacion(e)) return;
      msg.textContent = "No se pudo compartir la imagen en este dispositivo.";
    }
  }

  async function compartirTexto() {
    var v = versiculoMostrado();
    if (!v) return;
    var texto = textoCompartir(v);
    var msg = $("c-msg");
    msg.textContent = "";
    try {
      var S = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Share;
      if (S) {
        await S.share({ title: "Caminar en Fe", text: texto, dialogTitle: "Compartir versículo" });
        return;
      }
      if (navigator.share) {
        await navigator.share({ title: "Caminar en Fe", text: texto });
        return;
      }
    } catch (e) {
      if (esCancelacion(e)) return;
    }
    try {
      await navigator.clipboard.writeText(texto);
      msg.textContent = "Copiado. Pégalo donde quieras compartirlo.";
    } catch (e2) {
      msg.textContent = "No se pudo compartir en este dispositivo.";
    }
  }

  $("btn-comp-img").addEventListener("click", compartirImagen);
  $("btn-comp-txt").addEventListener("click", compartirTexto);

  // ---------- Inicio ----------
  function irInicio() {
    var l = luchaActual();
    if (!l) { mostrar("pantalla-elegir"); return; }
    $("titulo-lucha").textContent = l.icono + " " + l.nombre;
    pintarVersiculo(versiculoDelDia(l));
    pintarRacha();
    mostrar("pantalla-inicio");
  }

  // ---------- Racha (tono de gracia) ----------
  function pintarRacha() {
    $("racha-dias").textContent = estado.inicio ? diasDesde(estado.inicio) : 0;
    $("racha-msg").textContent = "";
  }
  $("btn-bien").addEventListener("click", function () {
    estado.ultimoCheck = hoyStr();
    guardar(estado);
    $("racha-msg").textContent = "Gracias a Dios por este día. Sigue adelante.";
  });
  $("btn-cai").addEventListener("click", function () {
    estado.inicio = hoyStr();
    guardar(estado);
    pintarRacha();
    $("racha-msg").textContent = "Dios no te ha soltado. “Siete veces cae el justo, y vuelve a levantarse” (Pr 24:16). Empieza de nuevo hoy.";
  });

  // ---------- Emergencia ----------
  function pintarEmergencia() {
    var l = luchaActual();
    if (!l) return;
    var v = azar(l, $("e-ref").textContent);
    $("e-texto").textContent = "“" + v.texto + "”";
    $("e-ref").textContent = v.ref;
    $("e-accion").textContent = l.accion;
    $("e-oracion").textContent = l.oracion;
  }
  $("btn-tentado").addEventListener("click", function () {
    $("e-ref").textContent = "";
    pintarEmergencia();
    mostrar("pantalla-emergencia");
  });
  $("btn-emg-otro").addEventListener("click", pintarEmergencia);
  $("btn-cerrar-emg").addEventListener("click", irInicio);

  // ---------- Navegación ----------
  $("btn-otro").addEventListener("click", function () {
    var l = luchaActual();
    if (l) pintarVersiculo(azar(l, estado.refActual));
  });
  $("btn-cambiar").addEventListener("click", function () { mostrar("pantalla-elegir"); });

  // ---------- Notificaciones ----------
  function plugin() {
    return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications;
  }
  function textoNotificacion() {
    var l = luchaActual();
    var v = l ? versiculoDelDia(l) : null;
    return { titulo: "Tu versículo de hoy", cuerpo: v ? v.ref : "Abre la app para leerlo." };
  }
  async function programar(hora, minuto) {
    var LN = plugin();
    var t = textoNotificacion();
    if (LN) {
      var perm = await LN.requestPermissions();
      if (perm.display !== "granted") return "Permiso de notificaciones denegado.";
      await LN.cancel({ notifications: [{ id: 1 }] });
      await LN.schedule({
        notifications: [{
          id: 1, title: t.titulo, body: t.cuerpo,
          schedule: { on: { hour: hora, minute: minuto }, allowWhileIdle: true }
        }]
      });
      return "Recordatorio programado a las " + String(hora).padStart(2, "0") + ":" + String(minuto).padStart(2, "0") + ".";
    }
    // Fallback en navegador: solo para probar que el permiso funciona.
    if ("Notification" in window) {
      var p = await Notification.requestPermission();
      return p === "granted"
        ? "Permiso concedido. Las notificaciones programadas funcionan al empaquetar con Capacitor."
        : "Permiso de notificaciones denegado.";
    }
    return "Este navegador no soporta notificaciones.";
  }
  async function cancelar() {
    var LN = plugin();
    if (LN) { try { await LN.cancel({ notifications: [{ id: 1 }] }); } catch (e) {} }
  }

  $("btn-ajustes").addEventListener("click", function () {
    $("aj-activo").checked = !!estado.recordatorio;
    $("aj-hora").value = estado.hora || "21:00";
    $("aj-msg").textContent = "";
    mostrar("pantalla-ajustes");
  });
  $("btn-cerrar-ajustes").addEventListener("click", irInicio);
  $("btn-guardar-aj").addEventListener("click", async function () {
    var activo = $("aj-activo").checked;
    var hora = $("aj-hora").value || "21:00";
    estado.recordatorio = activo;
    estado.hora = hora;
    guardar(estado);
    if (activo) {
      var hm = hora.split(":");
      $("aj-msg").textContent = await programar(parseInt(hm[0], 10), parseInt(hm[1], 10));
    } else {
      await cancelar();
      $("aj-msg").textContent = "Recordatorio desactivado.";
    }
  });
  $("btn-borrar").addEventListener("click", async function () {
    if (!confirm("¿Borrar todos tus datos de este dispositivo?")) return;
    try { localStorage.removeItem(KEY); } catch (e) {}
    estado = {};
    await cancelar();
    mostrar("pantalla-elegir");
  });

  // ---------- Bienvenida (pantalla de inicio) ----------
  var SEGUNDOS_BIENVENIDA = 6; // cambia este número para alargar o acortar la pantalla de inicio
  var tBienvenida = null;

  function continuar() {
    clearTimeout(tBienvenida);
    tBienvenida = null;
    if (luchaActual()) irInicio(); else mostrar("pantalla-elegir");
  }

  // auto = true: avanza sola tras unos segundos. auto = false: se queda hasta que el usuario pulse Continuar.
  function mostrarBienvenida(auto) {
    clearTimeout(tBienvenida);
    mostrar("pantalla-bienvenida");
    var prog = $("progreso");
    var barra = $("progreso-barra");
    prog.classList.toggle("oculta", !auto);
    if (auto) {
      barra.style.animation = "none";
      void barra.offsetWidth; // reinicia la animación
      barra.style.animation = "llenar " + SEGUNDOS_BIENVENIDA + "s linear forwards";
      tBienvenida = setTimeout(continuar, SEGUNDOS_BIENVENIDA * 1000);
    }
  }

  $("btn-comenzar").addEventListener("click", continuar);
  $("btn-ver-bienvenida").addEventListener("click", function () { mostrarBienvenida(false); });

  // ---------- Arranque ----------
  pintarLuchas();
  mostrarBienvenida(true);
})();
