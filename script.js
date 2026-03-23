// Change Navigation style on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-sm', 'border-b', 'border-gray-100');
    } else {
        nav.classList.remove('shadow-sm', 'border-b', 'border-gray-100');
    }
});

// Simple Log to confirm setup
console.log("Ember Brew Café: Site initialized.");