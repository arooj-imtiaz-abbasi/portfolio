// Main JavaScript file for Dr. Arooj Abbasi Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initCursorGlow();
    initSmoothScrolling();
    initPuzzle();
    initBreathingVisualizer();
    initScrollAnimations();
    initMobileMenu();
    updateCopyrightYear();
});

// Cursor glow effect
function initCursorGlow() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Hide cursor when not moving
    let timeout;
    document.addEventListener('mousemove', () => {
        cursor.style.opacity = '1';
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cursor.style.opacity = '0';
        }, 1000);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Cognitive restructuring puzzle
function initPuzzle() {
    const startButton = document.getElementById('start-puzzle');
    const thoughtsContainer = document.getElementById('thoughts-container');
    const reframesContainer = document.getElementById('reframes-container');
    const scoreElement = document.getElementById('puzzle-score');
    
    const puzzleData = [
        { thought: "I'm a failure", reframe: "I'm learning and growing" },
        { thought: "Everyone hates me", reframe: "Some people may not understand me" },
        { thought: "I can't do anything right", reframe: "I'm capable of improvement" },
        { thought: "This is a disaster", reframe: "This is a challenge I can handle" },
        { thought: "I'm worthless", reframe: "I have inherent value" },
        { thought: "Nothing ever works out", reframe: "Some things work out better than others" }
    ];
    
    let currentPuzzle = [];
    let score = 0;
    let matches = 0;
    
    startButton.addEventListener('click', () => {
        startPuzzle();
    });
    
    function startPuzzle() {
        // Shuffle and select 4 random pairs
        const shuffled = [...puzzleData].sort(() => Math.random() - 0.5);
        currentPuzzle = shuffled.slice(0, 4);
        
        // Clear containers
        thoughtsContainer.innerHTML = '';
        reframesContainer.innerHTML = '';
        
        // Create thought cards
        currentPuzzle.forEach((item, index) => {
            const thoughtCard = createPuzzleCard(item.thought, 'thought', index);
            thoughtsContainer.appendChild(thoughtCard);
        });
        
        // Create reframe cards (shuffled)
        const shuffledReframes = [...currentPuzzle].sort(() => Math.random() - 0.5);
        shuffledReframes.forEach((item, index) => {
            const reframeCard = createPuzzleCard(item.reframe, 'reframe', index);
            reframesContainer.appendChild(reframeCard);
        });
        
        score = 0;
        matches = 0;
        updateScore();
        startButton.textContent = 'Restart Puzzle';
    }
    
    function createPuzzleCard(text, type, index) {
        const card = document.createElement('div');
        card.className = 'puzzle-card bg-white p-3 rounded-lg border-2 border-gray-200 text-sm cursor-pointer select-none';
        card.textContent = text;
        card.dataset.type = type;
        card.dataset.index = index;
        card.dataset.text = text;
        
        card.addEventListener('click', () => handleCardClick(card));
        
        return card;
    }
    
    function handleCardClick(card) {
        if (card.classList.contains('correct')) return;
        
        const selectedCards = document.querySelectorAll('.puzzle-card.selected');
        
        if (selectedCards.length === 0) {
            card.classList.add('selected');
            card.style.backgroundColor = '#E0F2FE';
        } else if (selectedCards.length === 1) {
            const firstCard = selectedCards[0];
            const secondCard = card;
            
            if (firstCard.dataset.type !== secondCard.dataset.type) {
                checkMatch(firstCard, secondCard);
            } else {
                // Clear selection if same type
                firstCard.classList.remove('selected');
                firstCard.style.backgroundColor = '';
            }
        }
    }
    
    function checkMatch(card1, card2) {
        const thoughtCard = card1.dataset.type === 'thought' ? card1 : card2;
        const reframeCard = card1.dataset.type === 'reframe' ? card1 : card2;
        
        const thoughtText = thoughtCard.dataset.text;
        const reframeText = reframeCard.dataset.text;
        
        // Find the matching pair
        const matchingPair = currentPuzzle.find(pair => 
            pair.thought === thoughtText && pair.reframe === reframeText
        );
        
        if (matchingPair) {
            // Correct match
            thoughtCard.classList.add('correct');
            reframeCard.classList.add('correct');
            thoughtCard.style.backgroundColor = '#10B981';
            reframeCard.style.backgroundColor = '#10B981';
            thoughtCard.style.color = 'white';
            reframeCard.style.color = 'white';
            
            score += 10;
            matches++;
            
            if (matches === currentPuzzle.length) {
                scoreElement.innerHTML = `<div class="success p-3 rounded-lg text-center">🎉 Puzzle Complete! Score: ${score}</div>`;
                // Save best score
                const bestScore = localStorage.getItem('puzzle-best-score') || 0;
                if (score > bestScore) {
                    localStorage.setItem('puzzle-best-score', score);
                    scoreElement.innerHTML += `<div class="text-green-600 text-sm mt-2">New best score!</div>`;
                }
            }
        } else {
            // Incorrect match
            thoughtCard.classList.add('incorrect');
            reframeCard.classList.add('incorrect');
            
            setTimeout(() => {
                thoughtCard.classList.remove('incorrect', 'selected');
                reframeCard.classList.remove('incorrect', 'selected');
                thoughtCard.style.backgroundColor = '';
                reframeCard.style.backgroundColor = '';
                thoughtCard.style.color = '';
                reframeCard.style.color = '';
            }, 1000);
        }
        
        updateScore();
    }
    
    function updateScore() {
        if (matches < currentPuzzle.length) {
            scoreElement.textContent = `Score: ${score} | Matches: ${matches}/${currentPuzzle.length}`;
        }
    }
}

// Breathing visualizer
function initBreathingVisualizer() {
    const startButton = document.getElementById('start-breathing');
    const leftLung = document.getElementById('left-lung');
    const rightLung = document.getElementById('right-lung');
    const text = document.getElementById('breathing-text');
    const instructions = document.getElementById('breathing-instructions');
    const particlesContainer = document.getElementById('breathing-particles');
    const phase1 = document.getElementById('phase-1');
    const phase2 = document.getElementById('phase-2');
    const phase3 = document.getElementById('phase-3');
    const phaseText = document.getElementById('phase-text');
    
    let isBreathing = false;
    let breathingInterval;
    let currentPhase = 0;
    let particleInterval;
    
    const phases = [
        { name: 'Inhale', duration: 4000, text: 'Breathe In', color: 'bg-mental-teal' },
        { name: 'Hold', duration: 4000, text: 'Hold', color: 'bg-mental-blue' },
        { name: 'Exhale', duration: 6000, text: 'Breathe Out', color: 'bg-mental-grey' }
    ];
    
    startButton.addEventListener('click', () => {
        if (isBreathing) {
            stopBreathing();
        } else {
            startBreathing();
        }
    });
    
    function startBreathing() {
        isBreathing = true;
        startButton.textContent = 'Stop Breathing Exercise';
        startButton.classList.remove('bg-mental-blue', 'hover:bg-blue-600');
        startButton.classList.add('bg-red-500', 'hover:bg-red-600');
        
        currentPhase = 0;
        runBreathingCycle();
        startParticleAnimation();
    }
    
    function stopBreathing() {
        isBreathing = false;
        startButton.textContent = 'Start Breathing Exercise';
        startButton.classList.remove('bg-red-500', 'hover:bg-red-600');
        startButton.classList.add('bg-mental-blue', 'hover:bg-blue-600');
        
        clearInterval(breathingInterval);
        clearInterval(particleInterval);
        resetLungs();
        text.textContent = 'Ready to breathe';
        instructions.style.display = 'block';
        resetPhaseIndicators();
        clearParticles();
    }
    
    function runBreathingCycle() {
        if (!isBreathing) return;
        
        const phase = phases[currentPhase];
        text.textContent = phase.text;
        instructions.style.display = 'none';
        
        // Update phase indicators
        updatePhaseIndicators(currentPhase);
        
        // Animate lungs based on phase
        animateLungs(phase.name);
        
        // Move to next phase
        setTimeout(() => {
            currentPhase = (currentPhase + 1) % phases.length;
            runBreathingCycle();
        }, phase.duration);
    }
    
    function animateLungs(phase) {
        const lungScale = phase === 'Inhale' ? 'scale-110' : phase === 'Hold' ? 'scale-105' : 'scale-100';
        const lungOpacity = phase === 'Inhale' ? 'opacity-80' : phase === 'Hold' ? 'opacity-70' : 'opacity-60';
        
        leftLung.className = `absolute left-0 top-0 w-20 h-32 bg-gradient-to-b from-mental-teal/30 to-mental-teal/60 rounded-l-full transition-all duration-1000 ease-in-out transform ${lungScale} ${lungOpacity}`;
        rightLung.className = `absolute right-0 top-0 w-20 h-32 bg-gradient-to-b from-mental-blue/30 to-mental-blue/60 rounded-r-full transition-all duration-1000 ease-in-out transform ${lungScale} ${lungOpacity}`;
        
        // Add inner lung details
        leftLung.innerHTML = `
            <div class="absolute inset-2 bg-gradient-to-b from-mental-teal/40 to-mental-teal/80 rounded-l-full transition-all duration-1000"></div>
            <div class="absolute inset-4 bg-gradient-to-b from-mental-teal/50 to-mental-teal/90 rounded-l-full transition-all duration-1000"></div>
        `;
        rightLung.innerHTML = `
            <div class="absolute inset-2 bg-gradient-to-b from-mental-blue/40 to-mental-blue/80 rounded-r-full transition-all duration-1000"></div>
            <div class="absolute inset-4 bg-gradient-to-b from-mental-blue/50 to-mental-blue/90 rounded-r-full transition-all duration-1000"></div>
        `;
    }
    
    function resetLungs() {
        leftLung.className = 'absolute left-0 top-0 w-20 h-32 bg-gradient-to-b from-mental-teal/30 to-mental-teal/60 rounded-l-full transition-all duration-1000 ease-in-out';
        rightLung.className = 'absolute right-0 top-0 w-20 h-32 bg-gradient-to-b from-mental-blue/30 to-mental-blue/60 rounded-r-full transition-all duration-1000 ease-in-out';
        
        leftLung.innerHTML = `
            <div class="absolute inset-2 bg-gradient-to-b from-mental-teal/40 to-mental-teal/80 rounded-l-full"></div>
            <div class="absolute inset-4 bg-gradient-to-b from-mental-teal/50 to-mental-teal/90 rounded-l-full"></div>
        `;
        rightLung.innerHTML = `
            <div class="absolute inset-2 bg-gradient-to-b from-mental-blue/40 to-mental-blue/80 rounded-r-full"></div>
            <div class="absolute inset-4 bg-gradient-to-b from-mental-blue/50 to-mental-blue/90 rounded-r-full"></div>
        `;
    }
    
    function updatePhaseIndicators(phaseIndex) {
        // Reset all indicators
        [phase1, phase2, phase3].forEach(phase => {
            phase.className = 'w-4 h-4 bg-mental-grey rounded-full transition-colors duration-300';
        });
        
        // Highlight current phase
        const currentPhaseElement = [phase1, phase2, phase3][phaseIndex];
        if (currentPhaseElement) {
            currentPhaseElement.className = 'w-4 h-4 bg-mental-teal rounded-full transition-colors duration-300';
        }
        
        // Update phase text
        const phaseNames = ['Inhale', 'Hold', 'Exhale'];
        phaseText.textContent = phaseNames.map((name, index) => 
            index === phaseIndex ? `• ${name} •` : name
        ).join(' ');
    }
    
    function resetPhaseIndicators() {
        [phase1, phase2, phase3].forEach(phase => {
            phase.className = 'w-4 h-4 bg-mental-grey rounded-full transition-colors duration-300';
        });
        phaseText.textContent = 'Inhale • Hold • Exhale';
    }
    
    function startParticleAnimation() {
        particleInterval = setInterval(() => {
            if (!isBreathing) return;
            createBreathingParticle();
        }, 200);
    }
    
    function createBreathingParticle() {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-mental-teal/60 rounded-full animate-ping';
        
        // Random position at the top of lungs
        const x = Math.random() * 180 + 10; // 10 to 190px
        const y = Math.random() * 20 + 5;   // 5 to 25px
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDuration = '2s';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
    
    function clearParticles() {
        particlesContainer.innerHTML = '';
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .timeline-item, .skill-tag');
    animateElements.forEach(el => observer.observe(el));
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'md:hidden p-2 text-mental-dark';
    mobileMenuButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
    `;
    
    const header = document.querySelector('header nav .flex');
    const nav = header.querySelector('.hidden.md\\:flex');
    
    if (nav) {
        header.appendChild(mobileMenuButton);
        
        const mobileMenu = nav.cloneNode(true);
        mobileMenu.className = 'md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 space-y-4';
        mobileMenu.style.display = 'none';
        
        nav.parentNode.appendChild(mobileMenu);
        
        mobileMenuButton.addEventListener('click', () => {
            const isVisible = mobileMenu.style.display !== 'none';
            mobileMenu.style.display = isVisible ? 'none' : 'block';
        });
    }
}

// Utility functions
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

// Handle form submissions
function handleContactForm() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! Dr. Arooj will get back to you soon.');
        });
    }
}

// Initialize contact form if it exists
document.addEventListener('DOMContentLoaded', handleContactForm);

// Update copyright year dynamically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#current-year');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}
