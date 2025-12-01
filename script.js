// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Visit Github Button
const visitGithubBtn = document.querySelector('.visit-btn');
if (visitGithubBtn) {
    visitGithubBtn.addEventListener('click', () => {
        window.open('https://github.com/maithil06', '_blank');
    });
}

// Download CV Button
const downloadCVBtn = document.querySelector('.btn-group .btn:first-child');
if (downloadCVBtn && downloadCVBtn.textContent.includes('Download CV')) {
    downloadCVBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = 'cv.pdf';
        link.download = 'Maithil_Tandel_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Contact Button in About Section
const contactBtn = document.querySelector('.btn-group .btn:last-child');
if (contactBtn && contactBtn.textContent.includes('Contact')) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Social Media Links
const linkedinIcon = document.querySelector('.fa-linkedin-in');
const githubIcon = document.querySelector('.fa-github');

if (linkedinIcon) {
    linkedinIcon.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/maithiltandel', '_blank');
    });
}

if (githubIcon) {
    githubIcon.addEventListener('click', () => {
        window.open('https://github.com/maithil06', '_blank');
    });
}

// Project Cards - Video autoplay on hover and button functionality
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    const video = card.querySelector('video');
    const liveDemoBtn = card.querySelector('.btn:first-of-type');
    const sourceCodeBtn = card.querySelector('.btn:last-of-type');
    
    // Only add video functionality if the card has a video
    if (video) {
        // Play video on hover
        card.addEventListener('mouseenter', () => {
            video.play();
        });
        
        // Pause video when not hovering
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
    
    // Button functionality - only for index.html (first 4 projects)
    if (liveDemoBtn && index < 4) {
        liveDemoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const demoUrls = [
                'https://huggingface.co/spaces/Maithil06/PersonalFinancialAnalyst',
                'project2.mp4',
                'https://huggingface.co/spaces/Maithil06/GroceryRecommendationSystem',
                'project4.mp4'
            ];
            window.open(demoUrls[index], '_blank');
        });
    }
    
    if (sourceCodeBtn && index < 4) {
        sourceCodeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const repoUrls = [
                'https://huggingface.co/spaces/Maithil06/PersonalFinancialAnalyst/tree/main',
                'https://github.com/maithil06/FashionSimilarity',
                'https://github.com/maithil06/GroceryRecommendationSystem',
                'https://github.com/maithil06/Traffic'
            ];
            window.open(repoUrls[index], '_blank');
        });
    }
});

// Contact Form Submission
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    const emailInput = contactForm.querySelector('input[type="email"]');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value;
        
        // Open default email client
        window.location.href = `mailto:maithiltandel6@gmail.com?subject=Contact from Portfolio&body=From: ${email}`;
    });
}

// Smooth scrolling for navigation links
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

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// PROJECTS PAGE SPECIFIC FUNCTIONALITY
// ============================================

// Projects Filter Functionality (only runs on projects.html page)
const filterBtns = document.querySelectorAll('.filter-btn');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const projectCardsFiltered = document.querySelectorAll('.project-card');

            projectCardsFiltered.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                    // Trigger reflow for animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    const categories = card.getAttribute('data-category');
                    if (categories && categories.includes(filter)) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Projects Page - Dynamic button URLs
// This section handles the project buttons on projects.html
const isProjectsPage = window.location.pathname.includes('projects.html');

if (isProjectsPage) {
    const allProjectCards = document.querySelectorAll('.project-card');
    
    // Define all your project URLs here
    const projectData = [
        {
            demo: 'https://huggingface.co/spaces/Maithil06/PersonalFinancialAnalyst',
            repo: 'https://huggingface.co/spaces/Maithil06/PersonalFinancialAnalyst/tree/main'
        },
        {
            demo: '#',
            repo: 'https://github.com/maithil06/FashionSimilarity'
        },
        {
            demo: 'https://huggingface.co/spaces/Maithil06/GroceryRecommendationSystem',
            repo: 'https://github.com/maithil06/GroceryRecommendationSystem'
        },
        {
            demo: '#',
            repo: 'https://github.com/maithil06/Traffic'
        },
        // Add URLs for your additional projects (5-12)
        {
            demo: 'project5.mp4',
            repo: 'https://github.com/maithil06/Football_Analytics'
        },
        {
            demo: 'project6.mp4',
            repo: 'https://github.com/maithil06/ManufacturingGrossMargin'
        },
        {
            demo: 'project7.mp4',
            repo: 'https://github.com/maithil06/CreditCardDefaulters'
        },
        {
            demo: 'project8.mov',
            repo: 'https://github.com/maithil06/CAR'
        },
        {
            demo: 'project9.mp4',
            repo: 'https://github.com/maithil06/SupportTicketClassification'
        },
        {
            demo: 'project10.mp4',
            repo: 'https://github.com/maithil06/Restraunts'
        },
        {
            demo: 'project11.mp4',
            repo: 'https://github.com/maithil06/CricketBattingAngles'
        },
        {
            demo: 'project12.png',
            repo: 'https://github.com/maithil06/Football-injury-prediction'
        }
    ];
    
    allProjectCards.forEach((card, index) => {
        const liveDemoBtn = card.querySelector('.project-buttons .btn:first-child');
        const sourceCodeBtn = card.querySelector('.project-buttons .btn:last-child');
        
        if (liveDemoBtn && projectData[index]) {
            liveDemoBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (projectData[index].demo !== '#') {
                    window.open(projectData[index].demo, '_blank');
                }
            });
        }
        
        if (sourceCodeBtn && projectData[index]) {
            sourceCodeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (projectData[index].repo !== '#') {
                    window.open(projectData[index].repo, '_blank');
                }
            });
        }
    });
}