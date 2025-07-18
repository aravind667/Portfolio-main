// Portfolio JavaScript - Netflix/Apple inspired interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initTypingAnimation();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initResumeDownload();
    initMobileMenu();
    initProjectCards();
});

// Typing Animation for Hero Section
function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const texts = [
        'Software Engineer',
        'Full-Stack Developer',
        'Python Developer',
        'Django Expert',
        'Problem Solver'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                resetHamburger();
            }
        });
    });
    
    // Hero section buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(17, 17, 17, 0.95)';
        } else {
            navbar.style.background = 'rgba(17, 17, 17, 0.9)';
        }
    });
    
    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            resetHamburger();
        }
    });
}

function resetHamburger() {
    const hamburger = document.getElementById('hamburger');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

// Project Cards Interaction
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle expanded state
            const achievements = this.querySelector('.project-achievements');
            const isExpanded = this.classList.contains('expanded');
            
            if (isExpanded) {
                this.classList.remove('expanded');
                achievements.style.maxHeight = '0';
                achievements.style.opacity = '0';
            } else {
                // Close other expanded cards
                projectCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('expanded');
                        const otherAchievements = otherCard.querySelector('.project-achievements');
                        otherAchievements.style.maxHeight = '0';
                        otherAchievements.style.opacity = '0';
                    }
                });
                
                // Expand current card
                this.classList.add('expanded');
                achievements.style.maxHeight = achievements.scrollHeight + 'px';
                achievements.style.opacity = '1';
            }
        });
        
        // Set initial styles for achievements
        const achievements = card.querySelector('.project-achievements');
        achievements.style.maxHeight = '0';
        achievements.style.opacity = '0';
        achievements.style.transition = 'all 0.3s ease';
        achievements.style.overflow = 'hidden';
        
        // Add click indicator
        card.style.cursor = 'pointer';
        
        // Add hover effect for better UX
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('expanded')) {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('expanded')) {
                this.style.transform = 'translateY(-10px) scale(1)';
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.achievement-item, .project-card, .education-card, .certification-card, .skill-category, .timeline-item');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('scroll-animation');
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
}

// Skill Bar Animations
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const barVisible = 150;
            
            if (barTop < window.innerHeight - barVisible && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                    bar.classList.add('animated');
                }, 200);
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Check on load
}

// Contact Form with Google Sheets Integration
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessage = document.getElementById('form-message');
    
    // Google Apps Script Web App URL for form submission
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxYourScriptIdHere/exec';
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject') || 'Portfolio Contact',
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
        
        try {
            // For demo purposes, we'll simulate the submission
            // In a real implementation, you would use the Google Apps Script URL
            await simulateFormSubmission(data);
            
            // Show success message
            showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            
        } catch (error) {
            // Show error message
            showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
            submitBtn.disabled = false;
        }
    });
    
    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            // Simulate API call delay
            setTimeout(() => {
                // Log form data for demo
                console.log('Form submission data:', data);
                
                // Simulate success (90% success rate for demo)
                if (Math.random() > 0.1) {
                    resolve('Success');
                } else {
                    reject(new Error('Simulated error'));
                }
            }, 2000);
        });
    }
    
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.classList.remove('hidden');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
    
    // Real Google Sheets integration function (for reference)
    async function submitToGoogleSheets(data) {
        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            return response;
        } catch (error) {
            throw new Error('Network error');
        }
    }
}

// Resume Download
function initResumeDownload() {
    const resumeBtn = document.getElementById('resume-download');
    
    resumeBtn.addEventListener('click', function() {
        // Download the resume PDF from the local 'assets' folder
        const resumeUrl = '/Resume.pdf'; // Update path if needed

        // Create download link
        const a = document.createElement('a');
        a.href = resumeUrl;
        a.download = 'Kottakota_Aravind_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Show download feedback
        const originalText = resumeBtn.innerHTML;
        resumeBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
        resumeBtn.style.background = 'rgba(0, 122, 255, 0.8)';
        
        setTimeout(() => {
            resumeBtn.innerHTML = originalText;
            resumeBtn.style.background = '';
        }, 2000);
    });
}


// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    
    if (scrolled < heroHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation to page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-description, .hero-buttons');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Preload animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial states for animations
    const heroElements = document.querySelectorAll('.hero-title, .hero-description, .hero-buttons');
    heroElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
});

// Google Apps Script setup instructions for contact form
/*
To set up Google Sheets integration:

1. Create a new Google Sheet
2. Go to Extensions > Apps Script
3. Replace the code with:

function doPost(e) {
  var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.subject,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({result: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}

4. Deploy as web app with execute permissions for "Anyone"
5. Copy the web app URL and replace GOOGLE_SCRIPT_URL in the JavaScript
*/

// Performance optimization
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

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events here if needed
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Service worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker registration would go here
        console.log('Service worker ready for registration');
    });
}