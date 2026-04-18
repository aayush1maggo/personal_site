(function(){
  // ---- Tweaks mode ----
  const panel = document.getElementById('tweaks');
  const root = document.documentElement;

  function apply(t){
    if(t.accent){ root.style.setProperty('--accent', t.accent); }
    if(t.bg){ root.style.setProperty('--bg', t.bg); }
    document.body.style.setProperty('--_scan', t.showScanlines===false ? '0' : '.6');
    document.body.classList.toggle('no-scan', t.showScanlines===false);
    document.body.classList.toggle('no-grid', t.showGrid===false);
  }
  // inject display toggles
  const sty = document.createElement('style');
  sty.textContent = '.no-scan::after{display:none}.no-grid::before{display:none}';
  document.head.appendChild(sty);

  if(typeof TWEAKS !== 'undefined') apply(TWEAKS);

  if(panel){
    window.addEventListener('message', e => {
      if(!e.data) return;
      if(e.data.type === '__activate_edit_mode'){ panel.classList.add('open'); }
      if(e.data.type === '__deactivate_edit_mode'){ panel.classList.remove('open'); }
    });
    window.parent.postMessage({type:'__edit_mode_available'}, '*');

    function persist(edits){
      Object.assign(TWEAKS, edits);
      apply(TWEAKS);
      window.parent.postMessage({type:'__edit_mode_set_keys', edits}, '*');
    }
    document.getElementById('tw-accent').addEventListener('input', e => persist({accent: e.target.value}));
    document.getElementById('tw-bg').addEventListener('input', e => persist({bg: e.target.value}));
    document.getElementById('tw-scan').addEventListener('change', e => persist({showScanlines: e.target.checked}));
    document.getElementById('tw-grid').addEventListener('change', e => persist({showGrid: e.target.checked}));
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if(id.length > 1){
        const el = document.querySelector(id);
        if(el){
          e.preventDefault();
          window.scrollTo({top: el.getBoundingClientRect().top + window.pageYOffset - 60, behavior: 'smooth'});
        }
      }
    });
  });
})();
