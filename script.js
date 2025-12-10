document.addEventListener('DOMContentLoaded',function(){
  // set current year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('open');
      if(nav.classList.contains('open')){
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '12px';
        nav.style.position = 'absolute';
        nav.style.right = '12px';
        nav.style.top = '64px';
        nav.style.background = 'rgba(11,17,28,0.85)';
        nav.style.padding = '12px';
        nav.style.borderRadius = '10px';
      } else {
        nav.style.display = '';
        nav.style.position = '';
        nav.style.background = '';
        nav.style.padding = '';
      }
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href && href.length>1){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
          // close nav on mobile
          if(nav && nav.classList.contains('open')){
            nav.classList.remove('open');
            nav.style.display = '';
          }
        }
      }
    });
  });

  // contact form (demo only)
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      alert('Thanks! This contact form is a demo — backend is not implemented yet.');
    });
  }
});
