/* ══ Imabox — index.html ══ */

/* ── Preloader ── */
(function () {
    var loader = document.getElementById('ix-loader');
    var bar    = document.getElementById('loader-bar');
    var video  = document.getElementById('mainVideo');
    var prog   = 0;
    var ticker = setInterval(function () {
        prog = Math.min(prog + Math.random() * 12, 88);
        bar.style.width = prog + '%';
    }, 180);
    function hide() {
        clearInterval(ticker);
        bar.style.width = '100%';
        setTimeout(function () {
            loader.classList.add('out');
            loader.addEventListener('transitionend', function () { loader.remove(); }, { once: true });
        }, 300);
    }
    if (video) {
        video.addEventListener('canplay', hide, { once: true });
        video.addEventListener('error',   hide, { once: true });
    }
    setTimeout(hide, 6000);
})();

/* ── Snap scroll ── */
var snapCurrent = 0;
var snapLocked  = false;
var snapSections;

(function () {
    var container = document.getElementById('snapContainer');
    snapSections = Array.from(container.querySelectorAll('.section'));

    window.snapGoTo = function (index) {
        index = Math.max(0, Math.min(snapSections.length - 1, index));
        if (index === snapCurrent) return;
        snapCurrent = index;
        container.scrollTo({ top: snapCurrent * container.clientHeight, behavior: 'smooth' });
        snapLocked = true;
        setTimeout(function () { snapLocked = false; }, 900);
    };

    container.addEventListener('wheel', function (e) {
        e.preventDefault();
        if (snapLocked) return;
        window.snapGoTo(snapCurrent + (e.deltaY > 0 ? 1 : -1));
    }, { passive: false });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); window.snapGoTo(snapCurrent + 1); }
        if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); window.snapGoTo(snapCurrent - 1); }
    });

    var touchStartY = 0;
    container.addEventListener('touchstart', function (e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    container.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, { passive: false });
    container.addEventListener('touchend', function (e) {
        if (snapLocked) return;
        var dy = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(dy) > 50) {
            window.snapGoTo(snapCurrent + (dy > 0 ? 1 : -1));
        } else {
            container.scrollTo({ top: snapCurrent * container.clientHeight, behavior: 'smooth' });
        }
    }, { passive: true });

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) snapCurrent = snapSections.indexOf(entry.target);
        });
    }, { threshold: 0.5 });
    snapSections.forEach(function (s) { io.observe(s); });

    /* restaurar sección tras cambiar idioma (no volver al hero) */
    var savedSection = sessionStorage.getItem('ix-section');
    if (savedSection !== null) {
        sessionStorage.removeItem('ix-section');
        var idx = parseInt(savedSection, 10);
        snapCurrent = idx;
        container.scrollTo({ top: idx * container.clientHeight, behavior: 'auto' });
    } else {
        /* hash navigation — e.g. index.html#s-projects */
        var hashMap = { '#s-hero':0,'#s-why':1,'#s-services':2,'#s-process':3,'#s-projects':4,'#s-packages':5,'#s-platform':6,'#s-faq':7,'#s-contact':8 };
        if (location.hash && hashMap[location.hash] !== undefined) {
            setTimeout(function() { window.snapGoTo(hashMap[location.hash]); }, 100);
        }
    }
})();

/* ── Typewriter ── */
(function () {
    var el = document.getElementById('typer');
    if (!el) return;
    var phrases = window.IX_PHRASES || ['Lo hacemos real.', 'Lo hacemos visible.', 'Lo hacemos deseable.', 'Lo hacemos vendible.'];
    var idx = 0, charIdx = phrases[0].length, deleting = false, wait = 0;
    function tick() {
        var cur = phrases[idx];
        if (wait > 0) { wait--; setTimeout(tick, 80); return; }
        if (!deleting) {
            if (charIdx < cur.length) { charIdx++; el.textContent = cur.slice(0, charIdx); setTimeout(tick, 85); }
            else { wait = 22; deleting = true; setTimeout(tick, 80); }
        } else {
            if (charIdx > 0) { charIdx--; el.textContent = cur.slice(0, charIdx); setTimeout(tick, 42); }
            else { deleting = false; idx = (idx + 1) % phrases.length; setTimeout(tick, 280); }
        }
    }
    setTimeout(tick, 2200);
})();

/* ── Intersection observer — .anim elements ── */
(function () {
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.anim').forEach(function (el) { io.observe(el); });
})();

/* ── "Por qué nosotros" — spotlight cycling (01→02→03→04) ── */
(function () {
    var items = Array.prototype.slice.call(document.querySelectorAll('.why-items .why-item'));
    if (items.length < 2) return;
    var i = 0, started = false;
    function show(n) {
        items.forEach(function (it, k) { it.classList.toggle('why-active', k === n); });
    }
    function step() { show(i); i = (i + 1) % items.length; }
    function start() {
        if (started) return; started = true;
        i = 0; step();                 // show 01 first
        setInterval(step, 3000);       // ~2.15s visible + 0.85s fade
    }
    var container = document.querySelector('.why-items');
    if ('IntersectionObserver' in window && container) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (e.isIntersecting) start(); });
        }, { threshold: 0.3 });
        io.observe(container);
    } else { start(); }
})();

/* ── Services accordion ── */
(function () {
    var wrap = document.getElementById('accWrapHome');
    if (!wrap) return;
    var items = Array.from(wrap.querySelectorAll('.acc-item'));

    function open(idx) {
        items.forEach(function (item, i) {
            var isOpen = i === idx;
            item.classList.toggle('open', isOpen);
            var vid = item.querySelector('.acc-video');
            if (vid) { isOpen ? vid.play() : vid.pause(); }
        });
    }
    items.forEach(function (item, i) {
        item.addEventListener('mouseenter', function () { open(i); });
        item.addEventListener('click',      function () { open(i); });
    });
    wrap.addEventListener('mouseleave', function () { open(0); });
})();

/* ── Stats counters ── */
(function () {
    var counters = Array.from(document.querySelectorAll('.stat-num'));
    var animated = false;
    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
    function run() {
        if (animated) return; animated = true;
        counters.forEach(function (el) {
            var target = parseInt(el.dataset.target, 10);
            var duration = target > 20 ? 2800 : 1800;
            var start = performance.now();
            (function step(now) {
                var p = Math.min((now - start) / duration, 1);
                el.textContent = Math.round(easeOut(p) * target);
                if (p < 1) requestAnimationFrame(step);
            })(performance.now());
        });
    }
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) run(); });
    }, { threshold: 0.4 });
    var stats = document.getElementById('s-why');
    if (stats) io.observe(stats);
})();

/* ── Mosaic flash ── */
(function () {
    var tiles = Array.from(document.querySelectorAll('.mosaic-tile'));
    if (!tiles.length) return;
    var pool = [
        'img/parpadeo/01-colinas de maladonado.webp','img/parpadeo/01-exterior.webp',
        'img/parpadeo/01-general aerea 01.webp','img/parpadeo/01-housing competition.webp',
        'img/parpadeo/01-jardines de areco.webp','img/parpadeo/01-la guadalupe.webp',
        'img/parpadeo/01-tfc.webp','img/parpadeo/02-esquina comercial.webp',
        'img/parpadeo/02-garage.webp','img/parpadeo/02-garda malvin.webp',
        'img/parpadeo/02-la guadalupe.webp','img/parpadeo/03-av italia y arroyo.webp',
        'img/parpadeo/03-balneario ipora.webp','img/parpadeo/04-balneario ipora.webp',
        'img/parpadeo/06-general exterior skybar.webp','img/parpadeo/09-torre 1 02.webp',
        'img/parpadeo/10-esquina comercial nocturno.webp','img/parpadeo/13-living 02.webp',
        'img/parpadeo/14-cowork dic.webp','img/parpadeo/15-torre 1 03.webp',
        'img/parpadeo/19-RenderExterior-SativaTour-high.webp','img/parpadeo/22 - Corona Interior - high.webp',
        'img/parpadeo/24 - Hunting Hotel bedroom - high.webp','img/parpadeo/25 -  bedroom apartment - high.webp',
        'img/parpadeo/27-Renderexterior-observatory-high.webp','img/parpadeo/35 - ArecoGarden high copy.webp',
        'img/parpadeo/4-Brickvisual-Model-high.webp','img/parpadeo/40 - vive high.webp',
        'img/parpadeo/41 - parque termal ipora high.webp','img/parpadeo/42 - Exterior Menara One-high.webp',
        'img/parpadeo/43 - sta lucia housing high.webp','img/parpadeo/44 - terrazas de polo piscina.webp',
        'img/parpadeo/45 - terrazas de polo hall.webp'
    ];
    var flashInterval = null, busy = new Set();
    function swapImage(tile) {
        var cur = tile.src.split('/').pop();
        var others = pool.filter(function (p) { return !p.endsWith(cur); });
        tile.src = others[Math.floor(Math.random() * others.length)];
    }
    function flashRandom() {
        var available = tiles.filter(function (t) { return !busy.has(t); });
        if (!available.length) return;
        available.sort(function () { return Math.random() - 0.5; });
        available.slice(0, 2 + Math.floor(Math.random() * 2)).forEach(function (tile) {
            busy.add(tile); tile.classList.add('lit');
            setTimeout(function () {
                tile.classList.remove('lit');
                setTimeout(function () { swapImage(tile); busy.delete(tile); }, 700);
            }, 500 + Math.random() * 800);
        });
    }
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { flashRandom(); flashInterval = setInterval(flashRandom, 480); }
            else { clearInterval(flashInterval); tiles.forEach(function (t) { t.classList.remove('lit'); }); busy.clear(); }
        });
    }, { threshold: 0.3 });
    var stats = document.getElementById('s-why');
    if (stats) io.observe(stats);
})();

/* ── FAQ accordion ── */
(function () {
    document.querySelectorAll('.faq-item').forEach(function (item) {
        item.querySelector('.faq-q').addEventListener('click', function () {
            var isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
            if (!isOpen) item.classList.add('open');
        });
    });
})();

/* ── Process step preview ── */
(function () {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var preview = document.createElement('div');
    preview.id = 'proc-preview';
    document.body.appendChild(preview);

    var mx = 0, my = 0, cx = -999, cy = -999;
    var PW = 260, PH = 260, PAD = 20;

    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });

    (function tick() {
        var tx = (mx + PW + 32 + PAD > window.innerWidth) ? mx - PW - 32 : mx + 32;
        var ty = Math.max(PAD, Math.min(window.innerHeight - PH - PAD, my - PH / 2));
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        preview.style.left = cx + 'px';
        preview.style.top  = cy + 'px';
        requestAnimationFrame(tick);
    })();

    var procVid = null;
    var flipInterval = null;

    document.querySelectorAll('#s-process .step-item').forEach(function (step) {
        var src      = step.dataset.preview;
        var vidSrc   = step.dataset.previewVideo;
        var flipSrc  = step.dataset.previewFlip;

        step.addEventListener('mouseenter', function () {
            if (flipSrc) {
                if (procVid) { procVid.pause(); procVid.style.display = 'none'; }
                var imgs = flipSrc.split('|');
                var idx = 0;
                preview.style.backgroundImage = 'url(' + imgs[0] + ')';
                preview.classList.add('visible');
                flipInterval = setInterval(function () {
                    idx = (idx + 1) % imgs.length;
                    preview.style.backgroundImage = 'url(' + imgs[idx] + ')';
                }, 800);
            } else if (vidSrc) {
                var vStart = parseFloat(step.dataset.previewVideoStart || 0);
                var vEnd   = parseFloat(step.dataset.previewVideoEnd   || 3);
                preview.style.backgroundImage = 'none';
                if (!procVid) {
                    procVid = document.createElement('video');
                    procVid.muted = true; procVid.playsInline = true; procVid.loop = false;
                    procVid.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:50%;';
                    preview.appendChild(procVid);
                }
                procVid.style.display = '';
                procVid.pause();
                procVid.ontimeupdate = null;
                procVid.src = vidSrc;
                procVid.load();
                procVid.addEventListener('canplay', function handler() {
                    procVid.removeEventListener('canplay', handler);
                    procVid.currentTime = vStart;
                    var p = procVid.play();
                    if (p) p.catch(function(){});
                    procVid.ontimeupdate = function () {
                        if (procVid.currentTime >= vEnd) {
                            procVid.currentTime = vStart;
                            var p2 = procVid.play();
                            if (p2) p2.catch(function(){});
                        }
                    };
                }, { once: true });
                preview.classList.add('visible');
            } else if (src) {
                if (procVid) { procVid.pause(); procVid.style.display = 'none'; }
                preview.style.backgroundImage = 'url(' + src + ')';
                preview.classList.add('visible');
            }
        });
        step.addEventListener('mouseleave', function () {
            preview.classList.remove('visible');
            if (procVid) { procVid.pause(); }
            if (flipInterval) { clearInterval(flipInterval); flipInterval = null; }
        });
    });
})();

/* ── "Cómo trabajamos" — línea de progreso 01→05 + círculo demo (desktop) ── */
(function () {
    if (window.innerWidth <= 1100) return;
    var section = document.getElementById('s-process');
    if (!section) return;
    var steps = Array.prototype.slice.call(section.querySelectorAll('.step-item'));
    if (!steps.length) return;

    var demo = document.createElement('div');
    demo.id = 'proc-demo';
    section.appendChild(demo);

    var demoVid = null, flipTimer = null, timers = [], running = false, paused = false;
    var STEP_MS = 1700, PAUSE = 2800;

    function clearMedia() {
        if (flipTimer) { clearInterval(flipTimer); flipTimer = null; }
        if (demoVid) { demoVid.pause(); demoVid.style.display = 'none'; }
        demo.style.backgroundImage = 'none';
    }
    function showMedia(step) {
        clearMedia();
        var flipSrc = step.dataset.previewFlip, vidSrc = step.dataset.previewVideo;
        if (flipSrc) {
            var imgs = flipSrc.split('|'), idx = 0;
            demo.style.backgroundImage = 'url(' + imgs[0] + ')';
            flipTimer = setInterval(function () {
                idx = (idx + 1) % imgs.length;
                demo.style.backgroundImage = 'url(' + imgs[idx] + ')';
            }, 800);
        } else if (vidSrc) {
            var vStart = parseFloat(step.dataset.previewVideoStart || 0);
            var vEnd = parseFloat(step.dataset.previewVideoEnd || 3);
            if (!demoVid) {
                demoVid = document.createElement('video');
                demoVid.muted = true; demoVid.playsInline = true; demoVid.loop = false;
                demoVid.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;';
                demo.appendChild(demoVid);
            }
            demoVid.style.display = '';
            demoVid.src = vidSrc; demoVid.load();
            demoVid.addEventListener('canplay', function h() {
                demoVid.removeEventListener('canplay', h);
                demoVid.currentTime = vStart;
                var p = demoVid.play(); if (p) p.catch(function () {});
                demoVid.ontimeupdate = function () {
                    if (demoVid.currentTime >= vEnd) {
                        demoVid.currentTime = vStart;
                        var p2 = demoVid.play(); if (p2) p2.catch(function () {});
                    }
                };
            }, { once: true });
        }
    }
    function clearTimers() { timers.forEach(clearTimeout); timers = []; }

    function runOnce() {
        steps.forEach(function (s) { s.classList.remove('step-on', 'step-current'); });
        demo.classList.remove('visible');
        steps.forEach(function (s, i) {
            timers.push(setTimeout(function () {
                s.classList.add('step-on');
                steps.forEach(function (o) { o.classList.remove('step-current'); });
                s.classList.add('step-current');
                showMedia(s);
                demo.classList.add('visible');
            }, i * STEP_MS));
        });
        timers.push(setTimeout(function () { if (running && !paused) runOnce(); },
                                steps.length * STEP_MS + PAUSE));
    }

    steps.forEach(function (s) {
        s.addEventListener('mouseenter', function () {
            paused = true; clearTimers(); clearMedia();
            demo.classList.remove('visible');
        });
        s.addEventListener('mouseleave', function () {
            if (running) { paused = false; runOnce(); }
        });
    });

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                if (!running) { running = true; paused = false; runOnce(); }
            } else {
                running = false; clearTimers(); clearMedia();
                demo.classList.remove('visible');
                steps.forEach(function (s) { s.classList.remove('step-current'); });
            }
        });
    }, { threshold: 0.4 });
    io.observe(section);
})();

/* ── Floating preview + iris (Highlight Projects) ── */
(function () {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var preview = document.createElement('div');
    preview.id = 'proj-preview';
    var label = document.createElement('div');
    label.id = 'proj-preview-label';
    label.innerHTML = '<span></span>';
    preview.appendChild(label);
    document.body.appendChild(preview);

    var mx = 0, my = 0, cx = 0, cy = 0;
    var PW = 300, PH = 300, PAD = 20;

    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });

    (function tick() {
        var tx = (mx + PW + 32 + PAD > window.innerWidth) ? mx - PW - 32 : mx + 32;
        var ty = (my - PH - 24 < PAD) ? my + 24 : my - PH - 24;
        cx += (tx - cx) * 0.1;
        cy += (ty - cy) * 0.1;
        preview.style.left = cx + 'px';
        preview.style.top  = cy + 'px';
        requestAnimationFrame(tick);
    })();

    document.querySelectorAll('#s-projects .proj-card').forEach(function (card) {
        var bg = card.querySelector('.proj-card-bg');
        if (!bg) return;
        card.addEventListener('mouseenter', function () {
            preview.style.backgroundImage = bg.style.backgroundImage;
            label.querySelector('span').textContent = (card.querySelector('.proj-card-name') || {}).textContent || '';
            preview.classList.add('visible');
        });
        card.addEventListener('mouseleave', function () {
            preview.classList.remove('visible');
        });
    });

    /* iris transition */
    document.querySelectorAll('#s-projects a.proj-card').forEach(function (card) {
        card.addEventListener('click', function (e) {
            e.preventDefault();
            var href = this.getAttribute('href');
            var ocx  = cx + PW / 2;
            var ocy  = cy + PH / 2;

            preview.classList.remove('visible');

            var wrap = document.createElement('div');
            wrap.id  = 'proj-iris-wrap';
            wrap.style.setProperty('--cx', ocx + 'px');
            wrap.style.setProperty('--cy', ocy + 'px');

            var ifrm = document.createElement('iframe');
            ifrm.src = href;

            var black = document.createElement('div');
            black.id  = 'proj-iris-black';

            wrap.appendChild(ifrm);
            wrap.appendChild(black);
            document.body.appendChild(wrap);

            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    wrap.style.clipPath = 'circle(150% at ' + ocx + 'px ' + ocy + 'px)';
                });
            });

            ifrm.addEventListener('load', function () { black.style.opacity = '0'; });
            setTimeout(function () { window.location.href = href; }, 1900);
        });
    });
})();

/* ── Process: auto-play 01→05 + preview circular — tablet + mobile (≤1100px) ── */
(function () {
    if (window.innerWidth > 1100) return;

    var steps = Array.from(document.querySelectorAll('#s-process .step-item'));

    /* preview circle — posición fija, centrado abajo */
    var SIZE = window.innerWidth <= 600 ? 100 : 220;
    var isMobile = window.innerWidth <= 600;
    var preview = document.createElement('div');
    preview.style.cssText = [
        'position:fixed', 'pointer-events:none', 'z-index:500',
        'width:' + SIZE + 'px', 'height:' + SIZE + 'px',
        'border-radius:50%', 'overflow:hidden',
        'background-size:cover', 'background-position:center',
        'opacity:0', 'transform:translateX(-50%) scale(0.82)',
        'transition:opacity 0.3s ease,transform 0.3s ease',
        'box-shadow:0 20px 56px rgba(0,0,0,0.7)',
        'outline:2px solid #9dbba4', 'outline-offset:5px',
        'left:50%', 'bottom:16%'
    ].join(';');
    /* mobile: el círculo va DENTRO de la sección (posición estable ante el snap),
       ubicado debajo del paso activo y bajando con él */
    if (isMobile) {
        var procSec0 = document.getElementById('s-process');
        if (procSec0) {
            procSec0.style.position = 'relative';
            procSec0.appendChild(preview);
        } else {
            document.body.appendChild(preview);
        }
        preview.style.position = 'absolute';
        preview.style.bottom = 'auto';
        preview.style.left = '50%';
        preview.style.zIndex = '6';
        preview.style.transition = 'top 0.55s cubic-bezier(.4,0,.2,1), opacity 0.3s ease, transform 0.3s ease';
        preview.style.outlineOffset = '3px';
    } else {
        document.body.appendChild(preview);
    }
    function positionPreview(step) {
        if (!isMobile) return;
        preview.style.top = (step.offsetTop + step.offsetHeight + 6) + 'px';
    }
    if (isMobile && steps[0]) positionPreview(steps[0]);

    var tabVid = null;
    var tabFlip = null;

    function applyVisible(v) {
        preview.style.opacity = v ? '1' : '0';
        preview.style.transform = 'translateX(-50%) scale(' + (v ? '1' : '0.82') + ')';
    }

    function showPreview(step) {
        positionPreview(step);
        var flipSrc = step.dataset.previewFlip;
        var vidSrc  = step.dataset.previewVideo;

        if (flipSrc) {
            if (tabVid) { tabVid.pause(); tabVid.style.display = 'none'; }
            clearInterval(tabFlip);
            var imgs = flipSrc.split('|'), idx = 0;
            preview.style.backgroundImage = 'url(' + imgs[0] + ')';
            tabFlip = setInterval(function () {
                idx = (idx + 1) % imgs.length;
                preview.style.backgroundImage = 'url(' + imgs[idx] + ')';
            }, 800);
        } else if (vidSrc) {
            var vStart = parseFloat(step.dataset.previewVideoStart || 0);
            var vEnd   = parseFloat(step.dataset.previewVideoEnd   || 3);
            preview.style.backgroundImage = 'none';
            clearInterval(tabFlip);
            if (!tabVid) {
                tabVid = document.createElement('video');
                tabVid.muted = true; tabVid.playsInline = true; tabVid.loop = false;
                tabVid.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:50%;';
                preview.appendChild(tabVid);
            }
            tabVid.style.display = '';
            tabVid.pause(); tabVid.ontimeupdate = null;
            tabVid.src = vidSrc; tabVid.load();
            tabVid.addEventListener('canplay', function handler() {
                tabVid.removeEventListener('canplay', handler);
                tabVid.currentTime = vStart;
                var p = tabVid.play(); if (p) p.catch(function(){});
                tabVid.ontimeupdate = function () {
                    if (tabVid.currentTime >= vEnd) {
                        tabVid.currentTime = vStart;
                        var p2 = tabVid.play(); if (p2) p2.catch(function(){});
                    }
                };
            }, { once: true });
        }
        applyVisible(true);
    }

    function hidePreview() {
        applyVisible(false);
        clearInterval(tabFlip);
        if (tabVid) { tabVid.pause(); }
    }

    /* ── Auto-play: enciende 01→05 con su preview, en bucle ── */
    var autoTimers = [], autoRunning = false, resumeTimer = null;
    var STEP_MS = 1900, PAUSE = 2600;

    function lightStep(step) {
        steps.forEach(function (s) { s.classList.remove('expanded', 'step-current'); });
        step.classList.add('expanded', 'step-current');
        showPreview(step);
    }
    function clearAutoTimers() { autoTimers.forEach(clearTimeout); autoTimers = []; }
    function runOnce() {
        clearAutoTimers();
        steps.forEach(function (s, i) {
            autoTimers.push(setTimeout(function () { lightStep(s); }, i * STEP_MS));
        });
        autoTimers.push(setTimeout(function () { if (autoRunning) runOnce(); },
                                   steps.length * STEP_MS + PAUSE));
    }
    function startAuto() { if (autoRunning) return; autoRunning = true; runOnce(); }
    function stopAuto() { autoRunning = false; clearAutoTimers(); }

    /* arrancar/parar según visibilidad de la sección */
    var procSection = document.getElementById('s-process');
    if (procSection) {
        new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    startAuto();
                } else {
                    stopAuto(); hidePreview();
                    steps.forEach(function (s) { s.classList.remove('expanded', 'step-current'); });
                }
            });
        }, { threshold: 0.3 }).observe(procSection);
    }

    /* tap del usuario: pausa el auto, muestra ese paso, y reanuda a los 5s */
    steps.forEach(function (step) {
        if (window.innerWidth >= 601) {
            var icon = document.createElement('span');
            icon.className = 'step-toggle-icon';
            icon.innerHTML = '<svg viewBox="0 0 16 16"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>';
            step.appendChild(icon);
        }
        step.addEventListener('click', function () {
            stopAuto();
            if (resumeTimer) clearTimeout(resumeTimer);
            var isOpen = step.classList.contains('expanded');
            steps.forEach(function (s) { s.classList.remove('expanded', 'step-current'); });
            if (!isOpen) {
                step.classList.add('expanded', 'step-current');
                showPreview(step);
            } else {
                hidePreview();
            }
            resumeTimer = setTimeout(startAuto, 5000);
        });
    });
})();

/* ── Plans: círculos flotantes con video que siguen el mouse (solo desktop) ── */
(function () {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var cards = document.querySelectorAll('#s-packages [data-pkg-videos]');
    if (!cards.length) return;

    var layer = document.createElement('div');
    layer.id = 'pkg-circles-layer';
    document.body.appendChild(layer);

    var active = [];          // { el, baseX, baseY, depth, curX, curY }
    var flips = [];           // intervals de flip de imágenes
    var mx = 0, my = 0;       // posición actual del mouse
    var refX = 0, refY = 0;   // punto de referencia (centro de la card)

    function clear() {
        flips.forEach(clearInterval); flips = [];
        layer.innerHTML = ''; active = [];
    }

    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });

    cards.forEach(function (card) {
        var vids = (card.dataset.pkgVideos || '').split('|').filter(Boolean);
        if (!vids.length) return;

        card.addEventListener('mouseenter', function () {
            clear();
            var rect = card.getBoundingClientRect();
            var n = vids.length;
            var SIZE = n <= 2 ? 128 : (n === 3 ? 112 : 92);
            var GAP = 14, ARC = 24;
            var totalW = n * SIZE + (n - 1) * GAP;
            var vw = window.innerWidth;
            var centerX = rect.left + rect.width / 2;
            refX = centerX; refY = rect.top + rect.height / 2;
            var startX = centerX - totalW / 2;
            startX = Math.max(16, Math.min(startX, vw - totalW - 16));
            var baseY = rect.top - SIZE - 18;

            vids.forEach(function (src, i) {
                var factor = n > 1 ? (1 - Math.abs(2 * i / (n - 1) - 1)) : 0;
                var bx = startX + i * (SIZE + GAP);
                var by = baseY - factor * ARC;
                var c = document.createElement('div');
                c.className = 'pkg-circle';
                c.style.width  = SIZE + 'px';
                c.style.height = SIZE + 'px';
                c.style.left   = bx + 'px';
                c.style.top    = by + 'px';
                var inner = document.createElement('div');
                inner.className = 'pkg-circle-inner';
                inner.style.transitionDelay = (i * 0.05) + 's';

                if (src.indexOf('.mp4') !== -1) {
                    /* video en loop */
                    var v = document.createElement('video');
                    v.src = src; v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto';
                    var p = v.play(); if (p) p.catch(function () {});
                    inner.appendChild(v);
                } else if (src.indexOf(',') !== -1) {
                    /* flip de imágenes (igual que Concepto en Cómo trabajamos) */
                    var imgs = src.split(',');
                    var fi = 0;
                    inner.style.backgroundSize = 'cover';
                    inner.style.backgroundPosition = 'center';
                    inner.style.backgroundImage = 'url(' + imgs[0] + ')';
                    flips.push(setInterval(function () {
                        fi = (fi + 1) % imgs.length;
                        inner.style.backgroundImage = 'url(' + imgs[fi] + ')';
                    }, 800));
                } else {
                    /* imagen estática */
                    inner.style.backgroundSize = 'cover';
                    inner.style.backgroundPosition = 'center';
                    inner.style.backgroundImage = 'url(' + src + ')';
                }

                c.appendChild(inner);
                layer.appendChild(c);
                requestAnimationFrame(function () { c.classList.add('visible'); });
                /* depth alterna para dar profundidad: 0.20–0.40 */
                var depth = 0.20 + (i % 3) * 0.10;
                active.push({ el: c, baseX: bx, baseY: by, depth: depth, curX: 0, curY: 0 });
            });
        });
        card.addEventListener('mouseleave', clear);
    });

    (function tick() {
        for (var i = 0; i < active.length; i++) {
            var a = active[i];
            var tx = (mx - refX) * a.depth;
            var ty = (my - refY) * a.depth;
            a.curX += (tx - a.curX) * 0.12;
            a.curY += (ty - a.curY) * 0.12;
            a.el.style.transform = 'translate(' + a.curX + 'px,' + a.curY + 'px)';
        }
        requestAnimationFrame(tick);
    })();

    var sec = document.getElementById('s-packages');
    if (sec) {
        new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (!e.isIntersecting) clear(); });
        }, { threshold: 0.3 }).observe(sec);
    }
})();

/* ── Plataforma 3D: el video del visor solo corre cuando la sección está en pantalla ── */
(function () {
    var v = document.getElementById('platDemoVideo');
    if (!v || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { var p = v.play(); if (p) p.catch(function () {}); }
            else { v.pause(); }
        });
    }, { threshold: 0.25 }).observe(v);
})();

/* ── Edge click handler ── */
(function () {
    var EDGE = 72;
    document.addEventListener('click', function (e) {
        if (e.target.closest('a, button, input, select, textarea, label, .faq-q')) return;
        var vw = window.innerWidth, vh = window.innerHeight;
        var inCorner = (e.clientX < EDGE || e.clientX > vw - EDGE) && (e.clientY < EDGE || e.clientY > vh - EDGE);
        if (inCorner) return;
        if (e.clientY < EDGE)       window.snapGoTo(snapCurrent - 1);
        else if (e.clientY > vh - EDGE) window.snapGoTo(snapCurrent + 1);
    });
})();
