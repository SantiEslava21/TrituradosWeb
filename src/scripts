// Navbar scroll effect - TAMAÑO FIJO (eliminamos el efecto de cambio)
const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Eliminamos el efecto de scroll que cambiaba el navbar
// Solo mantenemos el navbar fijo con tamaño constante

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const isEmpresaPage = currentPage.includes('Empresa.html') || currentPage.includes('empresa.html');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (isEmpresaPage && (link.getAttribute('href') === 'Empresa.html' || link.getAttribute('href') === 'empresa.html')) {
            link.classList.add('active');
        } else if (!isEmpresaPage && (link.getAttribute('href') === '#inicio' || link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Call on page load
setActiveNavLink();

// Mobile menu toggle
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Remover clase active de todos los enlaces
        navLinks.forEach(item => item.classList.remove('active'));
        
        // Agregar clase active solo al enlace clickeado
        this.classList.add('active');
    });
});

// Counter animation for statistics
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;
    
    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observer.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    observer.observe(counter);
});

// Carousel functionality - MEJORADO
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = carouselSlides.length;
let autoSlideInterval;

// Function to update carousel position
function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
    resetAutoSlide();
}

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoSlide();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
        resetAutoSlide();
    });
});



function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Smooth scrolling for anchor links - MODIFICADO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Solo para el enlace de Inicio (que es interno)
            if (targetId === '#inicio') {
                // Remover clase active de todos los enlaces
                navLinks.forEach(item => item.classList.remove('active'));
                
                // Agregar clase active solo al enlace de Inicio
                this.classList.add('active');
            }
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            // Here you would typically send the email to your server
            alert(`¡Gracias por suscribirte con el correo: ${email}!`);
            emailInput.value = '';
        }
    });
}

// Initialize carousel on load
updateCarousel();
startAutoSlide();

// Pausar carrusel cuando el mouse está sobre él
const proyectosSection = document.querySelector('.proyectos');
if (proyectosSection) {
    proyectosSection.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    proyectosSection.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}

// Add hover effect to service cards on touch devices
if ('ontouchstart' in window) {
    const serviceCards = document.querySelectorAll('.servicio-card-img');
    serviceCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('hover');
            }, 300);
        });
    });
}

// Prevenir que las imágenes del carrusel se pasen solas al hacer hover
const carouselItems = document.querySelectorAll('.proyecto-item');
carouselItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    item.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});