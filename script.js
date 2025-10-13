// ========================================
//   GAMETRACKER - SCRIPT.JS
//   Funcionalidades principales
// ========================================

// ========== GAME DATA ==========
const gameData = {
    genshin: {
        title: "Genshin Impact",
        description: "Explora el mundo de Teyvat en este RPG de mundo abierto con sistema gacha. Colecciona personajes elementales y descubre una historia épica llena de misterios y aventuras.",
        platform: "PC • Mobile • PS5 • PS4",
        genre: "RPG Gacha",
        hours: 480,
        status: "Completado",
        rating: 5
    },
    "honkai-sr": {
        title: "Honkai: Star Rail",
        description: "Embárcate en una aventura galáctica con combates por turnos estratégicos. Narrativa cinematográfica y personajes memorables en un viaje por las estrellas.",
        platform: "PC • Mobile",
        genre: "RPG Turn-Based",
        hours: 320,
        status: "Completado",
        rating: 5
    },
    fgo: {
        title: "Fate/Grand Order",
        description: "Convoca a héroes legendarios en esta aventura basada en la franquicia Fate. Rica historia y sistema de combate estratégico con personajes icónicos.",
        platform: "iOS • Android",
        genre: "RPG Gacha",
        hours: 250,
        status: "Jugando",
        rating: 4
    },
    arknights: {
        title: "Arknights",
        description: "Tower defense estratégico con personajes únicos y profunda historia. Desafía tu ingenio en cada batalla táctica contra enemigos devastadores.",
        platform: "iOS • Android",
        genre: "Tower Defense",
        hours: 380,
        status: "Completado",
        rating: 5
    },
    epic7: {
        title: "Epic Seven",
        description: "RPG coreano con impresionantes animaciones 2D. Sistema de combate dinámico y colección de héroes épicos con historias fascinantes.",
        platform: "Mobile",
        genre: "RPG",
        hours: 210,
        status: "Jugando",
        rating: 4
    },
    azur: {
        title: "Azur Lane",
        description: "Juego de disparos con personificaciones de barcos de guerra. Combina estrategia naval con elementos gacha y colección de personajes.",
        platform: "iOS • Android",
        genre: "Shoot 'em up",
        hours: 290,
        status: "Completado",
        rating: 5
    }
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Inicializando GameTracker...');
    
    // Generate stars background
    generateStars();
    
    // Setup navigation
    setupNavigation();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Animate progress bars
    animateProgressBars();
    
    // Animate circle progress
    animateCircleProgress();
    
    // Animate chart bars
    animateChartBars();
    
    // Setup parallax
    setupParallax();
    
    console.log('✅ GameTracker inicializado exitosamente!');
});

// ========== BACKGROUND STARS GENERATION ==========
function generateStars() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) return;
    
    const starCount = 120;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        starsContainer.appendChild(star);
    }
}

// ========== NAVIGATION ==========
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
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
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
    
    // Observe elements
    const elements = document.querySelectorAll('.game-card, .dashboard-card, .showcase-item');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ${index * 0.1}s, transform 0.6s ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ========== PROGRESS BARS ANIMATION ==========
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = targetWidth;
                }, 200);
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
                        // 58% completion = 147 offset
                        circleProgress.style.strokeDashoffset = '147';
                    }, 300);
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
                }, 300);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    chartBars.forEach(bar => observer.observe(bar));
}

// ========== PARALLAX EFFECT ==========
function setupParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const orbs = document.querySelectorAll('.glow-orb');
                
                orbs.forEach((orb, index) => {
                    const speed = 0.3 + (index * 0.15);
                    orb.style.transform = `translateY(${scrolled * speed}px)`;
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ========== PENDING GAMES ==========
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

function addPendingGame() {
    const gameName = prompt('Ingresa el nombre del juego que quieres agregar:');
    if (gameName && gameName.trim()) {
        const pendingList = document.querySelector('.pending-list');
        const newItem = document.createElement('div');
        newItem.className = 'pending-item';
        newItem.onclick = function() { togglePending(this); };
        newItem.innerHTML = `
            <div class="pending-left">
                <div class="checkbox"></div>
                <div class="pending-info">
                    <span class="pending-title">${gameName.trim()}</span>
                    <span class="pending-platform">Multi-plataforma</span>
                </div>
            </div>
            <div class="checkbox-right"></div>
        `;
        pendingList.appendChild(newItem);
        
        // Animation
        newItem.style.opacity = '0';
        newItem.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            newItem.style.transition = 'all 0.3s';
            newItem.style.opacity = '1';
            newItem.style.transform = 'translateX(0)';
        }, 10);
    }
}

// ========== FILTER GAMES ==========
function filterGames(filter) {
    const gameCards = document.querySelectorAll('.game-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    gameCards.forEach(card => {
        const status = card.getAttribute('data-status');
        
        if (filter === 'all') {
            card.style.display = 'block';
        } else if (filter === 'completed' && status === 'completed') {
            card.style.display = 'block';
        } else if (filter === 'playing' && status === 'playing') {
            card.style.display = 'block';
        } else if (filter === 'pending' && status === 'pending') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ========== LOAD MORE GAMES ==========
function loadMoreGames() {
    alert('🎮 Función de cargar más juegos\n\nEn la versión completa, esto cargaría más juegos desde la base de datos.');
}

// ========== GAME DETAILS ==========
function showGameDetails(gameKey) {
    const game = gameData[gameKey];
    if (!game) return;
    
    alert(`${game.title}\n\n${game.description}\n\nPlataforma: ${game.platform}\nGénero: ${game.genre}\nHoras jugadas: ${game.hours}h\nEstado: ${game.status}\nRating: ${'★'.repeat(game.rating)}${'☆'.repeat(5 - game.rating)}`);
}

// ========== SEARCH FUNCTIONALITY ==========
function toggleSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.toggle('active');
        if (modal.classList.contains('active')) {
            document.getElementById('searchInput').focus();
        }
    }
}

function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (!searchTerm) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const results = Object.values(gameData).filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.genre.toLowerCase().includes(searchTerm) ||
        game.platform.toLowerCase().includes(searchTerm)
    );
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="color: var(--color-accent); padding: 1rem;">No se encontraron resultados</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(game => `
        <div style="padding: 1rem; background: rgba(13, 27, 62, 0.5); border-radius: 0.75rem; margin-bottom: 0.5rem; cursor: pointer; border: 1px solid rgba(0, 212, 255, 0.2);" 
             onmouseover="this.style.borderColor='rgba(0, 212, 255, 0.5)'" 
             onmouseout="this.style.borderColor='rgba(0, 212, 255, 0.2)'">
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 153, 204, 0.2)); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: rgba(160, 196, 217, 0.4);">IMG</div>
                <div>
                    <h4 style="color: var(--color-accent); margin-bottom: 0.25rem;">${game.title}</h4>
                    <p style="color: rgba(179, 236, 249, 0.6); font-size: 0.85rem;">${game.genre} • ${game.platform.split('•')[0].trim()}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ========== SMOOTH SCROLL ==========
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========== CLOSE MODALS ON ESC ==========
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const searchModal = document.getElementById('searchModal');
        if (searchModal && searchModal.classList.contains('active')) {
            toggleSearch();
        }
    }
});

// ========== UTILITY FUNCTIONS ==========
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

// ========== LAZY LOADING IMAGES ==========
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ========== LOCAL STORAGE FUNCTIONS ==========
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error al guardar en localStorage:', e);
        return false;
    }
}

function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error al cargar desde localStorage:', e);
        return null;
    }
}

function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        console.error('Error al eliminar de localStorage:', e);
        return false;
    }
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.9), rgba(0, 153, 204, 0.9));
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 212, 255, 0.4);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 600;
        backdrop-filter: blur(10px);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ========== FORM VALIDATION ==========
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 3) {
        errors.push('El nombre debe tener al menos 3 caracteres');
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
        errors.push('El email no es válido');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// ========== RATING SYSTEM ==========
function setRating(gameId, rating) {
    if (rating < 1 || rating > 5) return false;
    
    const ratingData = loadFromLocalStorage('ratings') || {};
    ratingData[gameId] = rating;
    saveToLocalStorage('ratings', ratingData);
    
    showNotification(`Rating de ${rating} estrellas guardado`, 'success');
    return true;
}

function getRating(gameId) {
    const ratingData = loadFromLocalStorage('ratings') || {};
    return ratingData[gameId] || 0;
}

// ========== FAVORITES SYSTEM ==========
function toggleFavorite(gameId) {
    const favorites = loadFromLocalStorage('favorites') || [];
    const index = favorites.indexOf(gameId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('Eliminado de favoritos', 'info');
    } else {
        favorites.push(gameId);
        showNotification('Agregado a favoritos', 'success');
    }
    
    saveToLocalStorage('favorites', favorites);
    return favorites;
}

function isFavorite(gameId) {
    const favorites = loadFromLocalStorage('favorites') || [];
    return favorites.includes(gameId);
}

function getFavorites() {
    return loadFromLocalStorage('favorites') || [];
}

// ========== STATISTICS TRACKING ==========
function trackGameSession(gameId, duration) {
    const sessions = loadFromLocalStorage('gameSessions') || {};
    
    if (!sessions[gameId]) {
        sessions[gameId] = {
            totalTime: 0,
            sessions: 0,
            lastPlayed: null
        };
    }
    
    sessions[gameId].totalTime += duration;
    sessions[gameId].sessions += 1;
    sessions[gameId].lastPlayed = new Date().toISOString();
    
    saveToLocalStorage('gameSessions', sessions);
}

function getGameStatistics(gameId) {
    const sessions = loadFromLocalStorage('gameSessions') || {};
    return sessions[gameId] || null;
}

function getAllStatistics() {
    return loadFromLocalStorage('gameSessions') || {};
}

// ========== THEME TOGGLE ==========
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    saveToLocalStorage('theme', newTheme);
    
    showNotification(`Tema ${newTheme === 'dark' ? 'oscuro' : 'claro'} activado`, 'info');
}

function loadTheme() {
    const savedTheme = loadFromLocalStorage('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

// ========== EXPORT DATA ==========
function exportUserData() {
    const userData = {
        favorites: loadFromLocalStorage('favorites') || [],
        ratings: loadFromLocalStorage('ratings') || {},
        sessions: loadFromLocalStorage('gameSessions') || {},
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `gametracker-backup-${Date.now()}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    showNotification('Datos exportados correctamente', 'success');
}

// ========== IMPORT DATA ==========
function importUserData(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.favorites) saveToLocalStorage('favorites', data.favorites);
            if (data.ratings) saveToLocalStorage('ratings', data.ratings);
            if (data.sessions) saveToLocalStorage('gameSessions', data.sessions);
            
            showNotification('Datos importados correctamente', 'success');
            location.reload();
        } catch (error) {
            showNotification('Error al importar datos', 'error');
            console.error('Error importing data:', error);
        }
    };
    
    reader.readAsText(file);
}

// ========== CONSOLE WELCOME MESSAGE ==========
console.log('%c🎮 GameTracker', 'color: #00D4FF; font-size: 24px; font-weight: bold; font-family: Orbitron;');
console.log('%cBienvenido a tu biblioteca gaming personal', 'color: #66E0FF; font-size: 14px;');
console.log('%cStack: HTML5 + CSS3 + Vanilla JavaScript', 'color: #0099CC; font-size: 12px;');
console.log('%c\n📊 Estadísticas del sistema:', 'color: #00FFCC; font-size: 12px; font-weight: bold;');
console.log(`- Juegos en base de datos: ${Object.keys(gameData).length}`);
console.log(`- Favoritos guardados: ${getFavorites().length}`);
console.log(`- Sesiones registradas: ${Object.keys(getAllStatistics()).length}`);

// ========== PERFORMANCE MONITORING ==========
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Página cargada en: ${pageLoadTime}ms`);
    }
});

// ========== ERROR HANDLING ==========
window.addEventListener('error', (event) => {
    console.error('Error capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Promise rechazada:', event.reason);
});

// ========== END OF SCRIPT ==========