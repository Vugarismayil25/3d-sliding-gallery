const gallery = document.getElementById('gallery');
const panels = document.querySelectorAll('.image-panel');
const indicators = document.querySelectorAll('.indicator-dot');
let currentPanel = 0;

// Update panel states based on scroll position
function updatePanelStates() {
    const galleryRect = gallery.getBoundingClientRect();
    const centerX = galleryRect.width / 2;

    panels.forEach((panel, index) => {
        const panelRect = panel.getBoundingClientRect();
        const panelCenter = panelRect.left + panelRect.width / 2 - galleryRect.left;
        const distanceFromCenter = Math.abs(panelCenter - centerX);
        const normalizedDistance = distanceFromCenter / centerX;

        // Remove all state classes
        panel.classList.remove('in-view', 'left-view', 'right-view', 'far-view', 'highlighted');

        // Determine panel state based on position
        if (normalizedDistance < 0.2) {
            panel.classList.add('in-view', 'highlighted');
            currentPanel = index;
        } else if (normalizedDistance < 0.6) {
            if (panelCenter < centerX) {
                panel.classList.add('left-view');
            } else {
                panel.classList.add('right-view');
            }
        } else {
            panel.classList.add('far-view');
        }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentPanel);
    });
}

// Smooth scroll to panel
function scrollToPanel(index) {
    const panel = panels[index];
    const panelRect = panel.getBoundingClientRect();
    const galleryRect = gallery.getBoundingClientRect();
    const scrollOffset = panelRect.left - galleryRect.left - (galleryRect.width - panelRect.width) / 2;
    
    gallery.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
    });
}

// Add scroll event listener with throttling
let scrollTimeout;
gallery.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updatePanelStates, 10);
});

// Mouse wheel scroll support
gallery.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        const scrollAmount = e.deltaY > 0 ? 300 : -300;
        gallery.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});

// Add click event listeners to indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        scrollToPanel(index);
    });
});

// Add click event listeners to panels for snap-to-center
panels.forEach((panel, index) => {
    panel.addEventListener('click', (e) => {
        // Only scroll if clicking on empty areas, not buttons
        if (!e.target.closest('.btn, .favorite-btn')) {
            scrollToPanel(index);
        }
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentPanel > 0) {
        scrollToPanel(currentPanel - 1);
    } else if (e.key === 'ArrowRight' && currentPanel < panels.length - 1) {
        scrollToPanel(currentPanel + 1);
    }
});

// Touch/swipe support for mobile
let startX = 0;
let startY = 0;
let isScrolling = false;

gallery.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isScrolling = false;
});

gallery.addEventListener('touchmove', (e) => {
    if (!startX || !startY) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = startX - currentX;
    const diffY = startY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        isScrolling = true;
    }
});

gallery.addEventListener('touchend', (e) => {
    if (!isScrolling) return;

    const currentX = e.changedTouches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) { // Minimum swipe distance
        if (diffX > 0 && currentPanel < panels.length - 1) {
            scrollToPanel(currentPanel + 1);
        } else if (diffX < 0 && currentPanel > 0) {
            scrollToPanel(currentPanel - 1);
        }
    }

    startX = 0;
    startY = 0;
    isScrolling = false;
});

// Initialize panel states
updatePanelStates();

// Auto-rotate demo (optional - remove if not wanted)
let autoRotateInterval;

function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        const nextPanel = (currentPanel + 1) % panels.length;
        scrollToPanel(nextPanel);
    }, 5000);
}

function stopAutoRotate() {
    clearInterval(autoRotateInterval);
}

// Start auto-rotate after 3 seconds of inactivity
let inactivityTimer;
function resetInactivityTimer() {
    stopAutoRotate();
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(startAutoRotate, 3000);
}

// Reset timer on user interaction
['scroll', 'click', 'touchstart', 'keydown'].forEach(event => {
    document.addEventListener(event, resetInactivityTimer);
});

resetInactivityTimer();

// Favorite functionality
function toggleFavorite(button) {
    button.classList.toggle('active');
    const heartIcon = button.querySelector('.heart-icon');
    
    if (button.classList.contains('active')) {
        heartIcon.textContent = '♥';
        button.style.animation = 'heartBeat 0.6s ease-in-out';
    } else {
        heartIcon.textContent = '♡';
        button.style.animation = 'none';
    }
    
    setTimeout(() => {
        button.style.animation = 'none';
    }, 600);
}

// Add button click handlers
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
            alert('Redirecting to purchase...');
        }, 150);
    });
});

document.querySelectorAll('.btn-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
            alert('Added to cart!');
        }, 150);
    });
});

// Heart beat animation
const style = document.createElement('style');
style.textContent = `
    @keyframes heartBeat {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.2); }
        50% { transform: scale(1.1); }
        75% { transform: scale(1.15); }
    }
`;
document.head.appendChild(style);
