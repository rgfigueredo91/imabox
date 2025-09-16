(() => {
  const btn   = document.querySelector('.imabox-chat-btn');
  const panel = document.getElementById('imabox-chat-panel');
  const form  = document.getElementById('imabox-chat-form');
  const ok    = form.querySelector('.ok');
  const err   = form.querySelector('.err');
  const whats = document.getElementById('imabox-whats');

  // Email receptor con FormSubmit
  const FORM_EMAIL = "imabox.rendering@gmail.com";
  const ENDPOINT   = `https://formsubmit.co/ajax/${encodeURIComponent(FORM_EMAIL)}`;

  // Toggle abrir/cerrar panel
  btn.addEventListener('click', () => {
    if (panel.hasAttribute('hidden')) {
      panel.removeAttribute('hidden');
      btn.setAttribute('aria-expanded','true');
    } else {
      panel.setAttribute('hidden','');
      btn.setAttribute('aria-expanded','false');
    }
  });

  // Envío por FormSubmit (AJAX)
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    ok.hidden = true; err.hidden = true;

    const fd = new FormData(form);
    if ((fd.get('_honey') || '').trim() !== '') return; // honeypot

    const payload = {};
    fd.forEach((v,k)=>payload[k]=v);

    try {
      const res = await fetch(ENDPOINT, {
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify(payload)
      });
      if(res.ok){ ok.hidden=false; form.reset(); }
      else{ err.hidden=false; }
    } catch(_){ err.hidden=false; }
  });

  // Abrir WhatsApp en otra ventana
  whats.addEventListener('click', () => {
    const msg = encodeURIComponent(
      form.querySelector('textarea[name="message"]').value || 'Hola Imabox, quiero consultar…'
    );
    window.open(`https://wa.me/59898325902?text=${msg}`, '_blank', 'noopener');
  });
})();