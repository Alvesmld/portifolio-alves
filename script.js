/* ============================================
   PORTFÓLIO ALVES - JAVASCRIPT PRINCIPAL
   Interatividade e Funcionalidades
   ============================================ */

// ============================================
// 1. INICIALIZAÇÃO DO DOCUMENTO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar loading screen primeiro
    initLoadingScreen();
    
    // Inicializar todas as funcionalidades
    initAOS();
    initTypingEffect();
    initParticles();
    initCustomCursor();
    initScrollProgress();
    initNavbarScroll();
    initThemeToggle();
    initMobileMenu();
    initSmoothScroll();
    initSkillBars();
    initFormValidation();
    initBackToTop();
    initMagneticButtons();
    initCounters();
    initTiltEffect();
    initRippleEffect();
    initShineEffect();
    initConfettiEffect();
});

// ============================================
// 2. LOADING SCREEN
// ============================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Simular carregamento
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remover do DOM após a animação
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
}

// ============================================
// 3. AOS (ANIMATE ON SCROLL) - Inicialização
// ============================================
function initAOS() {
    // Inicializa a biblioteca AOS para animações ao rolar
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// ============================================
// 3. EFEITO DE DIGITAÇÃO (Typing Effect)
// ============================================
function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    const phrases = [
        'Desenvolvedor Web',
        'Estudante de Tech',
        'Criador de Soluções',
        'Problem Solver',
        'Frontend Developer'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Deletando caracteres
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Mais rápido ao deletar
        } else {
            // Digitando caracteres
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Velocidade normal ao digitar
        }
        
        // Lógica para alternar entre frases
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Terminou de digitar a frase
            isDeleting = true;
            typingSpeed = 2000; // Pausa antes de deletar
        } else if (isDeleting && charIndex === 0) {
            // Terminou de deletar
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pausa antes de começar a próxima frase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Iniciar o efeito
    setTimeout(type, 1000);
}

// ============================================
// 4. PARTÍCULAS ANIMADAS
// ============================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Posição aleatória
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Tamanho aleatório
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Cor aleatória (entre primária e secundária)
    const colors = ['var(--primary)', 'var(--secondary)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Duração da animação aleatória
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = duration + 's';
    
    // Delay aleatório
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(particle);
}

// ============================================
// 5. CURSOR CUSTOMIZADO
// ============================================
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    
    // Só ativar em desktop (não mobile)
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Efeito hover em elementos interativos
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .stat-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                cursor.classList.add('active');
            });
            
            element.addEventListener('mouseleave', function() {
                cursor.classList.remove('active');
            });
        });
        
        // Efeito ao clicar
        document.addEventListener('mousedown', function() {
            cursor.classList.add('clicking');
        });
        
        document.addEventListener('mouseup', function() {
            cursor.classList.remove('clicking');
        });
    }
}

// ============================================
// 6. INDICADOR DE PROGRESSO DE SCROLL
// ============================================
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', function() {
        // Calcular a porcentagem de scroll
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        
        // Atualizar a largura da barra
        scrollProgress.style.width = progress + '%';
    });
}

// ============================================
// 7. NAVBAR - EFEITO AO SCROLL
// ============================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        // Adicionar classe 'scrolled' quando rolar a página
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Atualizar link ativo baseado na seção visível
        updateActiveNavLink(navLinks);
    });
}

function updateActiveNavLink(navLinks) {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// 8. TOGGLE DE TEMA (Dark/Light Mode)
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    
    // Verificar se há tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Aplicar novo tema
        html.setAttribute('data-theme', newTheme);
        
        // Salvar no localStorage
        localStorage.setItem('theme', newTheme);
        
        // Atualizar ícone
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// ============================================
// 9. MENU MOBILE
// ============================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle do menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevenir scroll do body quando menu está aberto
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// 10. SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Compensar altura da navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// 11. BARRAS DE PROGRESSO DE HABILIDADES
// ============================================
function initSkillBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    // Observer para animar barras quando visíveis
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, {
        threshold: 0.5
    });
    
    progressFills.forEach(fill => {
        observer.observe(fill);
    });
}

// ============================================
// 12. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// ============================================
function initFormValidation() {
    const form = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar campos
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Validar nome
        if (name.value.trim() === '') {
            showError(name, 'Por favor, insira seu nome');
            isValid = false;
        } else {
            clearError(name);
        }
        
        // Validar email
        if (email.value.trim() === '') {
            showError(email, 'Por favor, insira seu email');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido');
            isValid = false;
        } else {
            clearError(email);
        }
        
        // Validar mensagem
        if (message.value.trim() === '') {
            showError(message, 'Por favor, insira sua mensagem');
            isValid = false;
        } else {
            clearError(message);
        }
        
        // Se válido, simular envio
        if (isValid) {
            simulateFormSubmission(form, formFeedback);
        }
    });
    
    // Limpar erro ao digitar
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');
    
    input.style.borderColor = '#ef4444';
    errorElement.textContent = message;
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');
    
    input.style.borderColor = '';
    errorElement.textContent = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function simulateFormSubmission(form, feedback) {
    // Desabilitar botão
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    // Enviar formulário via AJAX para Formspree
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Mostrar feedback de sucesso
            feedback.classList.add('show');
            
            // Resetar formulário
            form.reset();
            
            // Esconder feedback após 3 segundos
            setTimeout(() => {
                feedback.classList.remove('show');
            }, 3000);
        } else {
            throw new Error('Erro ao enviar mensagem');
        }
    })
    .catch(error => {
        // Mostrar feedback de erro
        feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i><p>Erro ao enviar mensagem. Tente novamente.</p>';
        feedback.classList.add('show');
        
        setTimeout(() => {
            feedback.classList.remove('show');
            // Restaurar feedback original
            feedback.innerHTML = '<i class="fas fa-check-circle"></i><p>Mensagem enviada com sucesso!</p>';
        }, 3000);
    })
    .finally(() => {
        // Reabilitar botão
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensagem';
    });
}

// ============================================
// 13. BOTÃO VOLTAR AO TOPO
// ============================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        // Mostrar botão quando rolar 300px
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll suave ao topo
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// 14. PREVENIR FLASH DE CONTEÚDO (FOUC)
// ============================================
// Adiciona classe ao body quando JavaScript está carregado
document.body.classList.add('js-loaded');

// ============================================
// 15. LAZY LOADING DE IMAGENS (Opcional)
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// 16. ANIMAÇÃO DE ENTRADA DE ELEMENTOS
// ============================================
// Adiciona classe para animar elementos quando entram na viewport
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// ============================================
// 17. CONTADOR DE ESTATÍSTICAS (Opcional)
// ============================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                // Se for um número, animar
                if (!isNaN(finalValue)) {
                    animateCounter(target, parseInt(finalValue));
                }
                
                counterObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// 18. DETECÇÃO DE DISPOSITIVO
// ============================================
function isMobile() {
    return window.innerWidth <= 768;
}

function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 992;
}

function isDesktop() {
    return window.innerWidth > 992;
}

// ============================================
// 19. EVENTOS DE REDIMENSIONAMENTO
// ============================================
window.addEventListener('resize', function() {
    // Reativar/desativar cursor customizado baseado no tamanho da tela
    const cursor = document.getElementById('customCursor');
    
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    } else {
        cursor.style.display = 'block';
    }
});

// ============================================
// 20. BOTÕES MAGNÉTICOS (Magnetic Buttons)
// ============================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn, .social-link, .project-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// 21. CONTADOR DE ESTATÍSTICAS ANIMADO
// ============================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                
                // Verificar se é um número
                if (!isNaN(text) && text !== '∞') {
                    const finalValue = parseInt(text);
                    animateCounter(target, finalValue);
                }
                
                counterObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// 22. EFEITO TILT 3D PARA CARDS
// ============================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ============================================
// 23. RIPPLE EFFECT PARA BOTÕES
// ============================================
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .project-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============================================
// 24. EFEITO DE BRILHO NOS CARDS
// ============================================
function initShineEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-card, .stat-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ============================================
// 25. EFEITO DE CONFETTI AO ENVIAR FORMULÁRIO
// ============================================
function initConfettiEffect() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        // A confetti effect will be triggered after successful submission
        // This is handled in the simulateFormSubmission function
    });
}

// ============================================
// 26. EXPORTAR FUNÇÕES (para uso externo, se necessário)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAOS,
        initTypingEffect,
        initParticles,
        initCustomCursor,
        initScrollProgress,
        initNavbarScroll,
        initThemeToggle,
        initMobileMenu,
        initSmoothScroll,
        initSkillBars,
        initFormValidation,
        initBackToTop,
        initMagneticButtons,
        initCounters,
        initTiltEffect,
        initRippleEffect,
        initShineEffect,
        initLoadingScreen,
        initConfettiEffect
    };
}

// ============================================
// FIM DO ARQUIVO script.js
// ============================================
