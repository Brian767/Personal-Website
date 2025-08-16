// Home Page JavaScript

// Additional floating elements animation
document.addEventListener('DOMContentLoaded', function() {
    // Create additional floating particles
    createFloatingParticles();
    
    // Add mouse interaction effects
    addMouseInteraction();
    
    // Initialize text typing effect (optional enhancement)
    initTypeWriter();
});

function createFloatingParticles() {
    const floatingContainer = document.querySelector('.floating-elements');
    
    // Create additional small particles
    // for (let i = 0; i < 2; i++) {
    //     const particle = document.createElement('div');
    //     particle.classList.add('floating-particle');
    //     particle.style.cssText = `
    //         position: absolute;
    //         width: ${Math.random() * 20 + 10}px;
    //         height: ${Math.random() * 20 + 10}px;
    //         background: linear-gradient(135deg, rgba(0, 110, 255, 0.2), rgba(0, 212, 255, 0.2));
    //         border-radius: 50%;
    //         left: ${Math.random() * 100}%;
    //         animation: floatSmall ${15 + Math.random() * 10}s infinite linear;
    //         animation-delay: ${Math.random() * 10}s;
    //     `;
        
    //     floatingContainer.appendChild(particle);
    // }
    
    // Add CSS for small particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatSmall {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.6;
            }
            90% {
                opacity: 0.6;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function addMouseInteraction() {
    const heroContent = document.querySelector('.hero-content');
    
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate mouse position as percentage
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;
        
        // Apply subtle parallax effect to hero content
        const moveX = xPercent * 10;
        const moveY = yPercent * 10;
        
        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // Add glow effect to buttons on mouse proximity
    const buttons = document.querySelectorAll('.cta-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.filter = 'brightness(1.1)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.filter = 'brightness(1)';
        });
    });
}

function initTypeWriter() {
    // Optional: Add typewriter effect to subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    const text = subtitle.textContent;
    
    // Uncomment below to enable typewriter effect
    
    // subtitle.textContent = '';
    // subtitle.style.opacity = '1';
    
    // let i = 0;
    // const typeWriter = () => {
    //     if (i < text.length) {
    //         subtitle.textContent += text.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, 50);
    //     }
    // };
    
    // Start typewriter effect after initial animation
    setTimeout(typeWriter, 1500);
    
}

// Enhanced button click effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});