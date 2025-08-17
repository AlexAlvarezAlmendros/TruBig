document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading implementation for better performance
    function implementLazyLoading() {
        const images = document.querySelectorAll('img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        // Remove the opacity change that was interfering with transitions
                        observer.unobserve(img);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px 0px'
            });

            images.forEach(img => {
                // Don't modify opacity for images that need hover effects
                if (!img.classList.contains('service-image') && 
                    !img.classList.contains('product-image') && 
                    !img.classList.contains('installation-image')) {
                    img.style.transition = 'opacity 0.3s ease';
                }
                img.setAttribute('loading', 'lazy');
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                img.setAttribute('loading', 'lazy');
            });
        }
    }

    // Smooth scroll functionality for CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    // Add click event listener to CTA button for additional functionality
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Track CTA click for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'engagement',
                    'event_label': 'header_cta'
                });
            }
            
            // The mailto functionality is handled by the href attribute
            // Add a small animation effect when clicking
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Lazy loading for images (basic implementation)
    const imageContainers = document.querySelectorAll('.image-placeholder');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    }, observerOptions);

    imageContainers.forEach(img => {
        img.style.opacity = '0.7';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });

    // Add scroll-to-top functionality (optional)
    let scrollToTopButton = null;
    
    function createScrollToTopButton() {
        scrollToTopButton = document.createElement('button');
        scrollToTopButton.innerHTML = '↑';
        scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
        scrollToTopButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #E89555;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(232, 149, 85, 0.3);
        `;
        
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(scrollToTopButton);
    }

    // Show/hide scroll to top button based on scroll position
    function handleScroll() {
        if (!scrollToTopButton) {
            createScrollToTopButton();
        }
        
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
        } else {
            scrollToTopButton.style.opacity = '0';
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Add animation on scroll for sections
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        section.style.opacity = '0.8';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

    // Enhanced mailto functionality
    function enhanceMailtoButton() {
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            // Add additional parameters to the mailto link
            const subject = encodeURIComponent('Sol·licitud de Cita - Trubig Peluqueria Canina');
            const body = encodeURIComponent(`Hola,

M'agradaria sol·licitar una cita per a la meva mascota.

Detalls de la mascota:
- Nom: 
- Raça: 
- Edat: 
- Servei desitjat: 

Disponibilitat:
- Dia preferit: 
- Hora preferida: 

Gràcies!`);
            
            ctaButton.href = `mailto:info@trubig.com?subject=${subject}&body=${body}`;
        }
    }

    enhanceMailtoButton();

    // Smooth scroll for footer links
    function addSmoothScrollToFooterLinks() {
        const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
        
        footerLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    addSmoothScrollToFooterLinks();
    
    // Initialize performance optimizations
    implementLazyLoading();
});
