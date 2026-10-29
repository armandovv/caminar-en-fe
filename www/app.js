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
    ["pantalla-bienvenida", "pantalla-elegir", "pantalla-inicio", "pantalla-emergencia", "pantalla-ajustes"].forEach(function (p) {
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
    estado.refActual = v.ref;
  }

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
