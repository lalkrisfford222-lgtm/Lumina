// Scroll Reveal Animation Logic
const revealSections = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(window_section => {
        const windowHeight = window.innerHeight;
        const elementTop = window_section.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            window_section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);

// Mouse Glow Effect (Follows the user cursor)
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Basic mouse following logic (optional flare)
    const x = e.clientX;
    const y = e.clientY;
    
    // Check if the glow element exists to avoid errors
    if(cursorGlow) {
        cursorGlow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 242, 255, 0.08), transparent 40%)`;
        cursorGlow.style.position = 'fixed';
        cursorGlow.style.top = 0;
        cursorGlow.style.left = 0;
        cursorGlow.style.width = '100%';
        cursorGlow.style.height = '100%';
        cursorGlow.style.pointerEvents = 'none';
        cursorGlow.style.zIndex = '9999';
    }
});

// Initial check to reveal hero
window.onload = revealSections;