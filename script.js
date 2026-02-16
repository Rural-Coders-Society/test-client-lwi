// Header Scroll Logic
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 80) {
        nav.style.backgroundColor = "rgba(15, 23, 42, 0.95)"; // Slate 900 with blur
        nav.style.backdropFilter = "blur(10px)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    } else {
        nav.style.backgroundColor = "#0f172a";
        nav.style.boxShadow = "none";
    }
});

// Verify Smooth Scroll is firing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});