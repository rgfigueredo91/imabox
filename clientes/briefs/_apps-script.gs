/**
 * ============================================================================
 *  IMABOX — Receptor de briefs  →  Google Sheets
 * ============================================================================
 *
 *  Recibe los formularios de clientes/briefs/*.html y escribe una fila por
 *  respuesta en una planilla de Google. Gratis, sin servidor, sin límite de
 *  envíos. Los datos quedan en tu Drive: se exportan a Excel cuando quieras.
 *
 *  ── CÓMO INSTALARLO (una sola vez, ~5 minutos) ──────────────────────────────
 *
 *  1. Creá una planilla nueva en la cuenta que vaya a recibir los briefs.
 *     Copiá su ID de la barra de direcciones — es el pedazo largo entre
 *     /d/ y /edit:  docs.google.com/spreadsheets/d/[ESTO]/edit
 *
 *  2. Andá a https://script.google.com/home y creá un proyecto nuevo
 *     ("Nuevo proyecto" / "New project").
 *
 *     OJO CON LAS CUENTAS: si tenés varias sesiones de Google abiertas,
 *     Apps Script carga siempre la primera (u/0) e ignora la que abrió la
 *     planilla. Ese es el famoso "No se puede abrir el archivo en estos
 *     momentos" al usar Extensiones → Apps Script. Se evita entrando por
 *     script.google.com/u/N/home, con N = el número de la cuenta correcta
 *     (u/0 la primera, u/1 la segunda, etc.).
 *
 *  3. Borrá todo lo que haya en el editor y pegá el contenido de ESTE archivo
 *     (desde la línea "const SHEET_ID" hasta el final).
 *
 *  4. Completá arriba SHEET_ID con el ID del paso 1, y AVISO_A con el mail
 *     donde querés el aviso de cada envío ('' para no recibir ninguno).
 *
 *  5. Guardá (Ctrl+S). Después: botón azul "Implementar" → "Nueva implementación".
 *       · Tipo (el engranaje):        Aplicación web
 *       · Descripción:                Briefs Imabox
 *       · Ejecutar como:              Yo (tu cuenta)
 *       · Quién tiene acceso:         CUALQUIER PERSONA   ← importante
 *     Clic en "Implementar".
 *
 *  6. Google te va a pedir permisos. "Revisar permisos" → elegí tu cuenta →
 *     "Configuración avanzada" → "Ir a (nombre del proyecto) (no seguro)" →
 *     "Permitir". Es tu propio script, la advertencia es normal.
 *
 *  7. Copiá la "URL de la aplicación web". Termina en /exec y se ve así:
 *       https://script.google.com/macros/s/AKfycb.../exec
 *
 *  8. Abrí clientes/briefs/costa-park.html, buscá la línea:
 *       var ENDPOINT = '';
 *     y pegá la URL entre las comillas. Guardá y subí el cambio.
 *
 *  Listo. Cada brief enviado aparece como una fila nueva en la planilla.
 *
 *  ── SI DESPUÉS EDITÁS ESTE SCRIPT ──────────────────────────────────────────
 *  Implementar → Administrar implementaciones → lápiz → Versión: "Nueva
 *  versión" → Implementar. La URL no cambia.
 *
 *  ── NOTAS ──────────────────────────────────────────────────────────────────
 *  · Las columnas se crean solas: si un formulario manda un campo nuevo,
 *    se agrega una columna al final sin romper lo anterior.
 *  · Cada formulario distinto puede usar el mismo endpoint: se separan por
 *    pestaña según el campo "Proyecto".
 *  · Para bajarlo a Excel: Archivo → Descargar → Microsoft Excel (.xlsx).
 * ============================================================================
 */

const SHEET_ID = '1cExJbLIKZDPBczYF_b000jlcj-Fi0EMkP9pPN1LfmE0';  // planilla destino
const AVISO_A  = 'imabox.rendering@gmail.com';                    // '' para no recibir avisos
                                                                  // varios: 'a@x.com, b@y.com'

// columnas que no van a la planilla (son insumo del PDF, no datos de lectura)
const OCULTAS = ['Tipologías JSON'];

// orden del PDF. Los campos vacíos no se imprimen.
const SECCIONES = [
  ['Contacto', ['Contacto — nombre', 'Contacto — rol', 'Contacto — email', 'Contacto — teléfono']],
  ['Descripción general', ['Nombre del proyecto', 'Zona / barrio', 'Tipo de propiedad', 'Sistema constructivo', 'Concepto / diferencial', 'Amenities / espacios comunes', 'Descripción libre']],
  ['Comprador objetivo', ['Motivo de compra', 'Perfil de comprador 1', 'Perfil de comprador 2', 'Perfil de comprador 3', 'Origen de los compradores']],
  ['Propuesta de valor', ['Beneficio principal', 'Ventaja de ubicación', 'Diferencial frente a la zona']],
  ['Objetivo y timing de venta', ['Unidades totales a vender', '¿Hay preventa?', 'Detalle de la preventa', 'Fecha de lanzamiento comercial', 'Fecha de inicio de obra', 'Fecha de entrega']],
  ['Datos extra', ['Dirección exacta', 'Competencia directa', 'Diferencial frente a la competencia', 'Redes / web del proyecto', 'Redes / web del grupo', 'Forma de pago / financiación', 'Material disponible', 'Link al material', 'Casos de éxito anteriores']],
  ['Qué se quiere transmitir', ['Qué transmitir', 'Otras cosas a transmitir', 'Qué NO transmitir', 'Referencias visuales', 'Comentarios finales']]
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const datos = (e && e.parameter) ? e.parameter : {};
  const nombreHoja = (datos['Proyecto'] || 'Briefs').toString().substring(0, 90);

  // El mail va PRIMERO y en su propio try: si la planilla falla, el brief
  // igual llega. Un envío nunca se pierde por un problema de formato.
  const mail = enviarPorMail(datos, nombreHoja);
  const hojaResultado = guardarEnPlanilla(datos, nombreHoja);

  lock.releaseLock();

  return respuesta({
    ok: mail.ok || hojaResultado.ok,
    mail: mail.ok,
    mailError: mail.error,
    planilla: hojaResultado.ok,
    planillaError: hojaResultado.error
  });
}

function guardarEnPlanilla(datos, nombreHoja) {
  try {
    const libro = SHEET_ID
      ? SpreadsheetApp.openById(SHEET_ID)          // proyecto independiente
      : SpreadsheetApp.getActiveSpreadsheet();     // proyecto atado a la planilla
    let hoja = libro.getSheetByName(nombreHoja);
    if (!hoja) {
      hoja = libro.insertSheet(nombreHoja);
      hoja.appendRow(['Fecha']);
      hoja.setFrozenRows(1);
    }

    // encabezados actuales
    const anchoActual = Math.max(hoja.getLastColumn(), 1);
    let encabezados = hoja.getRange(1, 1, 1, anchoActual).getValues()[0]
                          .filter(function (h) { return h !== ''; });
    if (encabezados.length === 0) encabezados = ['Fecha'];

    // agregar columnas nuevas al final
    const nuevas = [];
    Object.keys(datos).forEach(function (k) {
      if (k === 'Texto completo') return;               // va al final, aparte
      if (OCULTAS.indexOf(k) !== -1) return;            // insumo del PDF, no columna
      if (encabezados.indexOf(k) === -1) nuevas.push(k);
    });
    if (datos['Texto completo'] && encabezados.indexOf('Texto completo') === -1) {
      nuevas.push('Texto completo');
    }
    if (nuevas.length) {
      encabezados = encabezados.concat(nuevas);
      hoja.getRange(1, 1, 1, encabezados.length).setValues([encabezados]);
      hoja.getRange(1, 1, 1, encabezados.length)
          .setFontWeight('bold')
          .setBackground('#efefef');
    }

    // armar la fila en el orden de los encabezados.
    // Sheets no admite más de 50.000 caracteres por celda: se recorta antes
    // de escribir, porque un valor demasiado largo tumba toda la fila.
    const fila = encabezados.map(function (h) {
      if (h === 'Fecha') return new Date();
      const v = datos[h] !== undefined ? String(datos[h]) : '';
      return v.length > 49000 ? v.substring(0, 49000) + '… (recortado, ver el PDF)' : v;
    });
    hoja.appendRow(fila);
    formatearHoja(hoja, encabezados.length);

    return { ok: true, error: '' };

  } catch (err) {
    console.error('Fallo el guardado en la planilla: ' + err);
    return { ok: false, error: String(err) };
  }
}

function enviarPorMail(datos, nombreHoja) {
  if (!AVISO_A) return { ok: false, error: 'sin destinatario configurado' };

  try {
    const quien = datos['Contacto — nombre'] || 'sin nombre';
    const pdf = Utilities.newBlob(briefEnHtml(datos), 'text/html', 'brief.html')
                         .getAs('application/pdf')
                         .setName('Brief - ' + nombreHoja + ' - ' + quien + '.pdf');

    MailApp.sendEmail({
      to: AVISO_A,
      name: 'Briefs Imabox',
      replyTo: datos['Contacto — email'] || undefined,
      subject: 'Brief — ' + nombreHoja + ' (' + quien + ')',
      htmlBody:
        '<p style="font-family:Arial,sans-serif;font-size:14px;color:#1a1c1e">' +
        'Llegó el brief de <b>' + escapar(nombreHoja) + '</b>, completado por ' +
        escapar(quien) + (datos['Contacto — email'] ? ' (' + escapar(datos['Contacto — email']) + ')' : '') +
        '.</p><p style="font-family:Arial,sans-serif;font-size:14px;color:#1a1c1e">' +
        'Va el PDF adjunto, y los datos quedan tambi&eacute;n en la planilla.</p>',
      attachments: [pdf]
    });
    return { ok: true, error: '' };

  } catch (err) {
    console.error('Fallo el mail del brief: ' + err);
    return { ok: false, error: String(err) };
  }
}

/**
 * Prueba manual: genera el PDF con datos de ejemplo y lo manda a AVISO_A,
 * sin tocar la planilla. Se ejecuta con el botón "Ejecutar" del editor,
 * eligiendo esta función en el desplegable. Sirve para revisar el diseño
 * del PDF sin tener que completar el formulario entero.
 */
function probarPdf() {
  const demo = {
    'Proyecto': 'Prueba de diseño',
    'Nombre del proyecto': 'La Costa Park',
    'Contacto — nombre': 'Nombre Apellido',
    'Contacto — rol': 'Dirección comercial',
    'Contacto — email': 'ejemplo@correo.com',
    'Zona / barrio': 'Ciudad de la Costa',
    'Tipo de propiedad': 'Casas',
    'Concepto / diferencial': 'Barrio de casas con espacios verdes,\na 25 minutos del centro.',
    'Beneficio principal': 'Casa propia con jardín al precio de un apartamento.',
    'Qué transmitir': 'Seguridad, Barrio-jardín, Calidad de vida',
    'Tipologías JSON': JSON.stringify([
      { nombre: 'Casa 2 dormitorios', cantidad: '10', m2: '78 m²', dormitorios: '2 / 1', precio: 'USD 120.000', caracteristicas: 'Jardín y cochera' },
      { nombre: 'Casa 3 dormitorios', cantidad: '8', m2: '96 m²', dormitorios: '3 / 2', precio: 'USD 145.000', caracteristicas: 'Jardín, cochera y parrillero' }
    ])
  };

  const pdf = Utilities.newBlob(briefEnHtml(demo), 'text/html', 'brief.html')
                       .getAs('application/pdf')
                       .setName('Brief - PRUEBA DE DISENO.pdf');

  MailApp.sendEmail({
    to: AVISO_A,
    name: 'Briefs Imabox',
    subject: 'Prueba de diseño del PDF',
    body: 'Adjunto el PDF de muestra para revisar el diseño.',
    attachments: [pdf]
  });

  console.log('PDF de prueba enviado a ' + AVISO_A);
}

/**
 * Abrir la URL en el navegador confirma que el receptor está vivo.
 * Agregarle ?estado=1 devuelve qué hojas tiene la planilla y cuántas filas
 * hay en cada una: sirve para comprobar que un envío llegó sin tener que
 * abrir el Sheet.
 */
function doGet(e) {
  const p = (e && e.parameter) ? e.parameter : {};

  if (p.estado) {
    const libro = SpreadsheetApp.openById(SHEET_ID);
    const hojas = libro.getSheets().map(function (h) {
      return { hoja: h.getName(), filas: h.getLastRow(), columnas: h.getLastColumn() };
    });
    return respuesta({ ok: true, planilla: libro.getName(), hojas: hojas });
  }

  return respuesta({ ok: true, mensaje: 'Receptor de briefs de Imabox activo.' });
}

function respuesta(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ══════════════════════════════════════════════════════════════════════════
   Planilla legible: columnas de ancho fijo, texto recortado (no envuelto) y
   alineado arriba. El detalle largo se lee en el PDF, no en la celda.
   ══════════════════════════════════════════════════════════════════════════ */
function formatearHoja(hoja, columnas) {
  try {
    const filas = Math.max(hoja.getLastRow(), 2);
    const rango = hoja.getRange(1, 1, filas, columnas);

    rango.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP)
         .setVerticalAlignment('top')
         .setFontFamily('Arial')
         .setFontSize(10);

    hoja.getRange(1, 1, 1, columnas)
        .setFontWeight('bold')
        .setBackground('#eef2ef')
        .setFontSize(9);

    const cabeceras = hoja.getRange(1, 1, 1, columnas).getValues()[0];
    for (let c = 0; c < columnas; c++) {
      const nombre = String(cabeceras[c] || '');
      let ancho = 200;
      if (nombre === 'Fecha') ancho = 140;
      else if (nombre === 'Texto completo') ancho = 320;
      else if (nombre.indexOf('Contacto') === 0) ancho = 170;
      hoja.setColumnWidth(c + 1, ancho);
    }
    hoja.setRowHeights(2, filas - 1, 22);
  } catch (err) { /* el formato es cosmético: nunca debe tumbar el guardado */ }
}

/* ══════════════════════════════════════════════════════════════════════════
   El brief en HTML, que Apps Script convierte a PDF. El conversor entiende
   CSS viejo: tablas, colores y bordes sí; flex, grid y fuentes web no.
   ══════════════════════════════════════════════════════════════════════════ */
function escapar(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function texto(s) {
  return escapar(s).replace(/\n/g, '<br>');
}

function briefEnHtml(datos) {
  const ACC = '#6f8f78', TINTA = '#1a1c1e', GRIS = '#6b7280', LINEA = '#d8dcd9';
  const proyecto = datos['Nombre del proyecto'] || datos['Proyecto'] || 'Brief de proyecto';

  let h = '<html><body style="margin:0;font-family:Helvetica,Arial,sans-serif;' +
          'color:' + TINTA + ';font-size:10pt;line-height:1.5">';

  // cabecera
  h += '<table width="100%" cellpadding="0" cellspacing="0" style="border-bottom:2px solid ' + TINTA + ';padding-bottom:6px">' +
       '<tr><td style="font-size:14pt">imabox<span style="color:' + ACC + '">.</span></td>' +
       '<td align="right" style="font-size:7pt;letter-spacing:2px;color:' + GRIS + '">BRIEF DE PROYECTO</td>' +
       '</tr></table>';

  h += '<h1 style="font-size:22pt;font-weight:normal;margin:18px 0 8px">' + escapar(proyecto) + '</h1>';

  const meta = [];
  if (datos['Contacto — nombre']) {
    meta.push('<b>' + escapar(datos['Contacto — nombre']) + '</b>' +
      (datos['Contacto — rol'] ? ' &middot; ' + escapar(datos['Contacto — rol']) : ''));
  }
  if (datos['Contacto — email']) meta.push(escapar(datos['Contacto — email']));
  meta.push(Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd/MM/yyyy'));
  h += '<p style="font-size:8.5pt;color:#5b6167;margin:0 0 6px;padding-bottom:12px;' +
       'border-bottom:1px solid ' + LINEA + '">' + meta.join(' &nbsp;&middot;&nbsp; ') + '</p>';

  const faltantes = [];

  function abrirSeccion(titulo) {
    return '<h2 style="font-size:7.5pt;font-weight:normal;letter-spacing:2px;' +
           'text-transform:uppercase;color:' + ACC + ';margin:20px 0 8px;' +
           'padding-bottom:4px;border-bottom:1px solid #9dbba4">' + escapar(titulo) + '</h2>';
  }

  function campo(k, v) {
    return '<div style="margin-bottom:9px">' +
      '<div style="font-size:7pt;letter-spacing:1px;text-transform:uppercase;color:' + GRIS + '">' + escapar(k) + '</div>' +
      '<div style="font-size:10pt">' + texto(v) + '</div></div>';
  }

  SECCIONES.forEach(function (sec) {
    const titulo = sec[0], claves = sec[1];
    let cuerpo = '';

    claves.forEach(function (k) {
      const v = datos[k];
      if (!v) { faltantes.push(k); return; }
      // el contacto ya está en la línea de arriba
      if (titulo === 'Contacto' && k !== 'Contacto — teléfono') return;
      cuerpo += campo(k, v);
    });

    if (cuerpo) h += abrirSeccion(titulo) + cuerpo;

    if (titulo === 'Descripción general') h += tablaTipologias(datos, abrirSeccion);
  });

  if (faltantes.length) {
    h += '<div style="margin-top:16px;padding:9px 11px;background:#f5f6f5;' +
         'border-left:3px solid #c9d3cb;font-size:8pt;color:#5b6167">' +
         '<b>Qued&oacute; sin completar:</b> ' + escapar(faltantes.join(' · ')) + '</div>';
  }

  h += '<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:22px;' +
       'border-top:1px solid ' + LINEA + ';padding-top:8px">' +
       '<tr><td style="font-size:7pt;letter-spacing:1px;color:#8b9199">' +
       'IMABOX &middot; VISUALIZACI&Oacute;N PARA DESARROLLOS INMOBILIARIOS</td>' +
       '<td align="right" style="font-size:7pt;letter-spacing:1px;color:#8b9199">IMABOX.UY</td>' +
       '</tr></table>';

  return h + '</body></html>';
}

function tablaTipologias(datos, abrirSeccion) {
  let lista = [];
  try {
    lista = JSON.parse(datos['Tipologías JSON'] || '[]');
  } catch (err) {
    lista = [];
  }
  if (!lista.length) return '';

  const th = 'font-size:7pt;font-weight:normal;letter-spacing:1px;text-transform:uppercase;' +
             'color:#5b6167;text-align:left;padding:6px 7px;background:#eef2ef;' +
             'border-bottom:1px solid #9dbba4';
  const td = 'font-size:9pt;padding:7px;vertical-align:top;border-bottom:1px solid #e3e7e4';

  let filas = '';
  lista.forEach(function (t, i) {
    if (!(t.nombre || t.m2 || t.dormitorios || t.precio || t.caracteristicas)) return;
    filas += '<tr>' +
      '<td style="' + td + ';color:#6f8f78;width:22px">' + ('0' + (i + 1)).slice(-2) + '</td>' +
      '<td style="' + td + '">' + escapar(t.nombre || '—') + '</td>' +
      '<td style="' + td + '">' + escapar(t.cantidad || '—') + '</td>' +
      '<td style="' + td + '">' + escapar(t.m2 || '—') + '</td>' +
      '<td style="' + td + '">' + escapar(t.dormitorios || '—') + '</td>' +
      '<td style="' + td + '">' + escapar(t.precio || '—') + '</td>' +
      '<td style="' + td + '">' + escapar(t.caracteristicas || '—') + '</td></tr>';
  });
  if (!filas) return '';

  return abrirSeccion('Tipologías de unidades') +
    '<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">' +
    '<tr><th style="' + th + '"></th><th style="' + th + '">Tipolog&iacute;a</th>' +
    '<th style="' + th + '">Unidades</th><th style="' + th + '">m&sup2;</th>' +
    '<th style="' + th + '">Dorm / ba&ntilde;os</th><th style="' + th + '">Precio</th>' +
    '<th style="' + th + '">Caracter&iacute;sticas</th></tr>' + filas + '</table>';
}
