window.onscroll = function() {
    const nav = document.querySelector('nav');
    const stickyCall = document.getElementById('sticky-call');
    
    // Header shadow on scroll
    if (window.scrollY > 50) {
        nav.classList.add('shadow-xl', 'bg-slate-900');
        nav.classList.remove('bg-slate-900/90');
    } else {
        nav.classList.remove('shadow-xl', 'bg-slate-900');
        nav.classList.add('bg-slate-900/90');
    }

    // Show sticky mobile bar after hero
    const heroHeight = window.innerHeight * 0.8;
    if (window.scrollY > heroHeight) {
        stickyCall.classList.add('translate-y-0');
        stickyCall.classList.remove('translate-y-full');
    } else {
        stickyCall.classList.add('translate-y-full');
        stickyCall.classList.remove('translate-y-0');
    }
};