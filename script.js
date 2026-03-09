// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-items');
    
    if (hamburger && navItems) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navItems.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navItems.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navItems.contains(event.target)) {
                hamburger.classList.remove('active');
                navItems.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Active navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if the link matches current page
        if (linkPath === currentPath || 
            (currentPath.includes('index') && linkPath === 'static-webpage.html')) {
            link.style.color = '#E63946';
            link.style.borderBottom = '2px solid #E63946';
        }
    });
});

// Form validation (for contact form)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.querySelector('input[name="name"]');
            const email = document.querySelector('input[name="email"]');
            const message = document.querySelector('textarea[name="message"]');
            
            let isValid = true;
            
            // Simple validation
            if (!name || name.value.trim() === '') {
                isValid = false;
                alert('Please enter your name');
            } else if (!email || email.value.trim() === '') {
                isValid = false;
                alert('Please enter your email');
            } else if (!message || message.value.trim() === '') {
                isValid = false;
                alert('Please enter your message');
            }
            
            if (isValid) {
                // Here you would normally send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            }
        });
    }
});

// Image lazy loading optimization
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '100';
                img.onload = function() {
                    img.style.transition = 'opacity 0.3s ease-in-out';
                    img.style.opacity = '1';
                };
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Responsive adjustments on window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Close mobile menu on resize to desktop
        const hamburger = document.querySelector('.hamburger');
        const navItems = document.querySelector('.nav-items');
        
        if (window.innerWidth > 768 && hamburger && navItems) {
            hamburger.classList.remove('active');
            navItems.classList.remove('active');
        }
    }, 250);
});
