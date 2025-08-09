// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#00d4ff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
        enable: true,
        distance: 150,
        color: '#00d4ff',
        opacity: 0.4,
        width: 1
    },
    move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
    }
    },
    interactivity: {
    detect_on: 'canvas',
    events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
    }
    },
    retina_detect: true
});

// Typing Animation
const typingElement = document.getElementById('typing-text');
const roles = [
    'Software Developer',
    'Java Enthusiast',
    'IoT Builder',
    'Tech Innovator',
    'Problem Solver',
    'eSports Player',
    'Web Developer',
    'Python Programmer',
    'Automation Creator',
    'Gamer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    } else {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000;
    isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
}

// Start typing animation
type();

// Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    } else {
    navbar.classList.remove('scrolled');
    }
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    backToTop.classList.add('show');
    } else {
    backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right').forEach(el => {
    observer.observe(el);
});

// Add some interactive effects
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#particles-js');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
});