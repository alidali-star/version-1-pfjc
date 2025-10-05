// ========== BACKGROUND STARS GENERATION ==========
function generateStars() {
    const starsContainer = document.getElementById('starsContainer');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 4 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.5 + 0.1;
        star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite ${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}

// ========== NAVIGATION ACTIVE STATE ==========
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ========== PENDING GAMES TOGGLE ==========
function togglePending(element) {
    element.classList.toggle('checked');
    
    const checkbox = element.querySelector('.pending-left .checkbox');
    const checkboxRight = element.querySelector('.checkbox-right');
    
    if (element.classList.contains('checked')) {
        checkbox.classList.add('checked');
        checkbox.textContent = '✓';
        checkboxRight.classList.add('checked');
    } else {
        checkbox.classList.remove('checked');
        checkbox.textContent = '';
        checkboxRight.classList.remove('checked');
    }
}

// ========== SCROLL ANIMATIONS ==========
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });
    
    // Observe character cards
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ${index * 0.1}s, transform 0.6s ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ========== PROGRESS BARS ANIMATION ==========
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// ========== CIRCLE PROGRESS ANIMATION ==========
function animateCircleProgress() {
    const circleProgress = document.querySelector('.circle-progress');
    
    if (circleProgress) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        const targetOffset = 110; // 58% completion
                        circleProgress.style.strokeDashoffset = targetOffset;
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(circleProgress);
    }
}

// ========== CHART BARS ANIMATION ==========
function animateChartBars() {
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetHeight = entry.target.style.height;
                entry.target.style.height = '0px';
                setTimeout(() => {
                    entry.target.style.height = targetHeight;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    chartBars.forEach(bar => observer.observe(bar));
}

// ========== ADD SVG GRADIENT DEFINITION ==========
function addSVGGradient() {
    const svg = document.querySelector('.circle-svg');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'circleGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6ACBED');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#3C91C4');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
}

// ========== SMOOTH SCROLL FOR ALL LINKS ==========
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== PARALLAX EFFECT FOR ORBS ==========
function setupParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const orbs = document.querySelectorAll('.glow-orb');
                
                orbs.forEach((orb, index) => {
                    const speed = 0.5 + (index * 0.2);
                    orb.style.transform = `translateY(${scrolled * speed}px)`;
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ========== CARD HOVER EFFECTS ==========
function setupCardEffects() {
    const cards = document.querySelectorAll('.game-card, .character-card, .dashboard-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ========== LOADING ANIMATION ==========
function initLoadingAnimation() {
    document.body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s';
            document.body.style.opacity = '1';
        }, 100);
    });
}

// ========== INITIALIZE ALL FUNCTIONS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Generate stars background
    generateStars();
    
    // Setup navigation
    setupNavigation();
    
    // Add SVG gradient
    addSVGGradient();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Animate progress bars
    animateProgressBars();
    
    // Animate circle progress
    animateCircleProgress();
    
    // Animate chart bars
    animateChartBars();
    
    // Setup smooth scroll
    setupSmoothScroll();
    
    // Setup parallax
    setupParallax();
    
    // Setup card effects
    setupCardEffects();
    
    // Initialize loading animation
    initLoadingAnimation();
    
    console.log('GameTracker initialized successfully!');
});

// ========== UTILITY FUNCTIONS ==========

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========== EXPORT FOR GLOBAL USE ==========
window.togglePending = togglePending;