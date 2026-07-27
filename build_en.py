# -*- coding: utf-8 -*-
"""Genera las versiones /en/ de las páginas con sistema data-en.
   - aplica data-en / data-en-ph / data-en-opts / data-en-content y quita los atributos
   - <base href="/"> para que los assets relativos (html, css, y src puestos por JS) resuelvan
   - canonical/og:url -> /en/..., hreflang es/en/x-default en ambas versiones
   - links internos a páginas del set -> /en/...
   - switcher de idioma: links directos entre versiones (sin i18n.js en /en/)
"""
import re, os, html as H

REPO = r'C:\Users\rgfig\Documents\GitHub\imabox'
SITE = 'https://imabox.uy'

EN_SET = ['index.html','projects.html','link-center.html',
          'kiu-av-italia.html','kiu-8-octubre.html','aero-met.html','crc-fitness.html',
          'cala-del-yacht.html','colinas-de-maldonado.html','terrazas-de-polo.html',
          'parque-termal-ipora.html','la-guadalupe.html','jardines-de-areco.html',
          'elbio-fernandez.html']

ARIA = [
    ('aria-label="Grabación del visor 3D de la plataforma"', 'aria-label="Screen recording of the 3D platform viewer"'),
    ('aria-label="Ver recorrido 360°"', 'aria-label="Open 360° tour"'),
    ('aria-label="Índice de secciones"', 'aria-label="Section index"'),
]

def unesc(v):
    return v.replace('&lt;', '<').replace('&gt;', '>').replace('&#39;', "'").replace('&quot;', '"').replace('&amp;', '&')

def swap_data_en(doc):
    """Reemplaza el contenido interno de cada elemento con data-en y elimina el atributo."""
    out = doc
    guard = 0
    while True:
        m = re.search(r'<([a-zA-Z0-9]+)([^>]*?)\sdata-en="([^"]*)"([^>]*)>', out)
        if not m: break
        guard += 1
        assert guard < 500, 'loop data-en'
        tag, pre, val, post = m.group(1), m.group(2), m.group(3), m.group(4)
        close = f'</{tag}>'
        start_inner = m.end()
        end_inner = out.find(close, start_inner)
        assert end_inner != -1, f'sin cierre para <{tag}> data-en={val[:40]}'
        inner = out[start_inner:end_inner]
        assert f'<{tag}' not in inner, f'elemento anidado <{tag}> dentro de data-en={val[:40]}'
        out = out[:m.start()] + f'<{tag}{pre}{post}>' + unesc(val) + out[end_inner:]
    return out

def build(page):
    src = open(os.path.join(REPO, page), encoding='utf-8').read()
    doc = src

    # 1. contenido
    doc = swap_data_en(doc)
    # placeholders
    doc = re.sub(r'placeholder="[^"]*"(\s+)data-en-ph="([^"]*)"', lambda m: f'placeholder="{m.group(2)}"', doc)
    doc = re.sub(r'data-en-ph="([^"]*)"(\s+)placeholder="[^"]*"', lambda m: f'placeholder="{m.group(1)}"', doc)
    # metas
    doc = re.sub(r'content="[^"]*" data-en-content="([^"]*)"', lambda m: f'content="{m.group(1)}"', doc)
    # selects data-en-opts
    def opts_repl(m):
        import json
        sel_open, attrs, body = m.group(1), m.group(2), m.group(3)
        opts = json.loads(H.unescape(re.search(r"data-en-opts='(\[.*?\])'", attrs).group(1)))
        i = [0]
        def opt(mo):
            label = opts[i[0]] if i[0] < len(opts) else mo.group(2)
            i[0] += 1
            return f'{mo.group(1)}{label}</option>'
        body = re.sub(r'(<option[^>]*>)([^<]*)</option>', opt, body)
        attrs = re.sub(r"\s*data-en-opts='\[.*?\]'", '', attrs)
        return f'<select{attrs}>{body}</select>'
    doc = re.sub(r"(<select)([^>]*data-en-opts='\[.*?\]'[^>]*)>(.*?)</select>", opts_repl, doc, flags=re.S)

    # 2. lang + base
    doc = doc.replace('<html lang="es">', '<html lang="en">', 1)
    doc = doc.replace('<head>', '<head>\n    <base href="/">', 1)

    # 3. canonical / og:url / hreflang
    es_url = SITE + '/' if page == 'index.html' else f'{SITE}/{page}'
    en_url = SITE + '/en/' if page == 'index.html' else f'{SITE}/en/{page}'
    doc = doc.replace(f'<link rel="canonical" href="{es_url}" />', f'<link rel="canonical" href="{en_url}" />', 1)
    doc = doc.replace(f'<meta property="og:url" content="{es_url}" />', f'<meta property="og:url" content="{en_url}" />', 1)
    hre = (f'<link rel="alternate" hreflang="es" href="{es_url}" />\n'
           f'    <link rel="alternate" hreflang="en" href="{en_url}" />\n'
           f'    <link rel="alternate" hreflang="x-default" href="{es_url}" />')
    assert f'<link rel="canonical" href="{en_url}" />' in doc, f'{page}: canonical no encontrado'
    if 'hreflang=' not in doc:
        # la página ES puede traer ya el triplete (corridas posteriores); no duplicar
        doc = doc.replace(f'<link rel="canonical" href="{en_url}" />',
                          f'<link rel="canonical" href="{en_url}" />\n    {hre}', 1)

    # 4. links internos a páginas del set -> /en/
    for target in EN_SET:
        doc = re.sub(f'href="{re.escape(target)}(["#])', f'href="/en/{target}\\1', doc)
    doc = doc.replace('href="https://imabox.uy" class="nav-logo"', 'href="/en/index.html" class="nav-logo"')
    doc = doc.replace('href="index.html" class="nav-logo"', 'href="/en/index.html" class="nav-logo"')

    # 5. switcher de idioma
    es_href = '/' if page == 'index.html' else f'/{page}'
    doc = doc.replace('<a href="#eng" onclick="setLang(\'en\');return false;">eng</a>',
                      '<a href="#" class="lang-active" onclick="return false;">eng</a>')
    doc = doc.replace('<a href="#esp" onclick="setLang(\'es\');return false;">esp</a>',
                      f'<a href="{es_href}" onclick="localStorage.setItem(\'ix-lang\',\'es\')">esp</a>')

    # 6. i18n.js fuera; index necesita las frases del typewriter
    if page == 'index.html':
        # el typewriter arranca a los 2.2s: el texto inicial del <em> también va en inglés
        doc = doc.replace('<em id="typer">Lo hacemos real.</em>', '<em id="typer">We make it real.</em>')
        doc = doc.replace('<script src="js/i18n.js"></script>',
                          "<script>window.IX_PHRASES = ['We make it real.', 'We make it visible.', 'We make it desirable.', 'We make it sellable.'];</script>")
    else:
        doc = re.sub(r'<script src="js/i18n\.js"></script>\n?', '', doc)

    # 7. aria-labels conocidos
    for a, b in ARIA:
        doc = doc.replace(a, b)

    # 8. escribir
    os.makedirs(os.path.join(REPO, 'en'), exist_ok=True)
    open(os.path.join(REPO, 'en', page), 'w', encoding='utf-8', newline='\n').write(doc)

    # 9. hreflang en la versión ES
    src2 = open(os.path.join(REPO, page), encoding='utf-8').read()
    canon = f'<link rel="canonical" href="{es_url}" />'
    assert canon in src2, f'{page}: canonical ES no encontrado'
    if 'hreflang="en"' not in src2:
        src2 = src2.replace(canon, canon + '\n    ' + hre, 1)
        open(os.path.join(REPO, page), 'w', encoding='utf-8', newline='\n').write(src2)

    # sanidad
    leftovers = len(re.findall(r'data-en[=-]', doc))
    return leftovers

for p in EN_SET:
    lo = build(p)
    print(f'en/{p}: generado (restos data-en: {lo})')
