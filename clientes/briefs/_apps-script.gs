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

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const datos = (e && e.parameter) ? e.parameter : {};

    // una pestaña por proyecto
    const nombreHoja = (datos['Proyecto'] || 'Briefs').toString().substring(0, 90);
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

    // armar la fila en el orden de los encabezados
    const fila = encabezados.map(function (h) {
      if (h === 'Fecha') return new Date();
      return datos[h] !== undefined ? datos[h] : '';
    });
    hoja.appendRow(fila);

    // aviso por mail
    if (AVISO_A) {
      try {
        MailApp.sendEmail({
          to: AVISO_A,
          subject: 'Nuevo brief — ' + nombreHoja + ' (' + (datos['Contacto — nombre'] || 'sin nombre') + ')',
          body: (datos['Texto completo'] || JSON.stringify(datos, null, 2)) +
                '\n\n———\nPlanilla: ' + libro.getUrl()
        });
      } catch (err) { /* si falla el mail, la fila ya quedó guardada */ }
    }

    return respuesta({ ok: true });

  } catch (err) {
    return respuesta({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// permite probar la URL desde el navegador
function doGet() {
  return respuesta({ ok: true, mensaje: 'Receptor de briefs de Imabox activo.' });
}

function respuesta(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
