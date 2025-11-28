// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Visit Github Button
const visitGithubBtn = document.querySelector('.visit-btn');
visitGithubBtn.addEventListener('click', () => {
    window.open('https://github.com/maithil06', '_blank');
});

// Download CV Button
const downloadCVBtn = document.querySelector('.btn-group .btn:first-child');
downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'Maithil_Tandel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Contact Button in About Section
const contactBtn = document.querySelector('.btn-group .btn:last-child');
contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Social Media Links
const linkedinIcon = document.querySelector('.fa-linkedin-in');
const githubIcon = document.querySelector('.fa-github');

linkedinIcon.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/maithiltandel', '_blank');
});

githubIcon.addEventListener('click', () => {
    window.open('https://github.com/maithil06', '_blank');
});

// Project Cards - Video autoplay on hover and button functionality
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    const video = card.querySelector('video');
    const image = card.querySelector('img');
    const liveDemoBtn = card.querySelector('.btn:first-of-type');
    const sourceCodeBtn = card.querySelector('.btn:last-of-type');
    
    // Only add video functionality if the card has a video (projects 2, 3, 4)
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
});

// Contact Form Submission
const contactForm = document.querySelector('.contact form');
const emailInput = contactForm.querySelector('input[type="email"]');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    
    // Open default email client
    window.location.href = `mailto:maithiltandel6@gmail.com?subject=Contact from Portfolio&body=From: ${email}`;
});

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
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});