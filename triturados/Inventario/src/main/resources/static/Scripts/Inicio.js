// Modal de Login
const loginModal = document.getElementById('loginModal');
const loginTriggers = document.querySelectorAll('.btn-login-trigger');
const modalClose = document.getElementById('modalClose');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const heroScrollIndicator = document.querySelector('.hero-scroll-indicator');

// Abrir modal al hacer clic en cualquier botón de login
loginTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

// Cerrar modal
modalClose.addEventListener('click', () => {
    closeModal();
});

// Cerrar modal al hacer clic fuera del contenido
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.classList.contains('active')) {
        closeModal();
    }
});

// Función para abrir modal
function openModal() {
    loginModal.classList.add('active');
    document.body.classList.add('modal-open');
}

// Función para cerrar modal
function closeModal() {
    loginModal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Alternar visibilidad de contraseña
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Cambiar ícono
    const icon = togglePassword.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});

// Manejar envío del formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Aquí iría la lógica de autenticación real
    console.log('Iniciando sesión con:', { username, password, rememberMe });
    
    // Simulación de login exitoso
    const loginBtn = document.querySelector('.btn-login');
    const originalText = loginBtn.textContent;
    
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Iniciando sesión...';
    loginBtn.disabled = true;
    
    setTimeout(() => {
        // Simulación de respuesta
        // alert(`¡Bienvenido, ${username}! (Esta es una demostración, no se ha enviado información real)`);
        
        // Restaurar botón
        loginBtn.textContent = originalText;
        loginBtn.disabled = false;
        
        // Cerrar modal
        closeModal();
        
        // Limpiar formulario
        loginForm.reset();

        // Redirigir visualmente al módulo de Inventario de Tecnología
        window.location.href = '/inventario-tecnologia';
    }, 1500);
});

// Botones de login social
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const provider = btn.classList.contains('google-btn') ? 'Google' : 'Microsoft';
        alert(`Iniciar sesión con ${provider} (esta es una demostración)`);
    });
});

// Menú móvil
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Scroll suave para el indicador del hero
heroScrollIndicator.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight - 80,
        behavior: 'smooth'
    });
});

// Efecto de cambio de color en navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    }
});

// Inicializar año actual en el footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Animación para elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.service-card, .project-card').forEach(el => {
        observer.observe(el);
    });

    // Animación para el enlace "Olvidó su contraseña"
    document.querySelector('.forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Función de recuperación de contraseña (esta es una demostración)');
    });
});

// Prevenir scroll cuando el modal está abierto
document.addEventListener('wheel', (e) => {
    if (document.body.classList.contains('modal-open')) {
        e.preventDefault();
    }
}, { passive: false });

// Cerrar menú móvil al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !e.target.closest('.nav-menu') && 
        !e.target.closest('.mobile-menu-btn')) {
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});

// Ajustar el padding del body cuando se carga la página
window.addEventListener('load', () => {
    // Asegurar que el hero section esté correctamente posicionado
    const heroSection = document.querySelector('.hero');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    // Actualizar el padding del body y el hero
    document.body.style.paddingTop = `${navbarHeight}px`;
    heroSection.style.marginTop = `-${navbarHeight}px`;
    heroSection.style.paddingTop = `${navbarHeight}px`;
    
    // Actualizar el scroll-margin para todas las secciones
    document.querySelectorAll('section[id]').forEach(section => {
        section.style.scrollMarginTop = `${navbarHeight}px`;
    });
});