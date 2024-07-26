// Register GSAP ScrollTrigger plugin and ScrollToPlugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Navbar functionality
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Navbar animations
gsap.from('.logo', { 
    opacity: 0, 
    x: -20, 
    duration: 1, 
    ease: 'power3.out' 
});

gsap.from('.nav-links li', { 
    opacity: 0, 
    y: -20, 
    stagger: 0.1, 
    duration: 0.8, 
    ease: 'power2.out'
});

// Hero image animation
function animateHeroImage() {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const heroImage = activeSlide.querySelector('.hero-image');
    
    gsap.fromTo(heroImage, {
        scale: 1.1,
    }, {
        scale: 1,
        duration: 6,
        ease: 'power2.out'
    });
}

// Parallax effect for hero images
function parallaxHero() {
    const heroSection = document.querySelector('.hero');
    const heroImages = document.querySelectorAll('.hero-image');
    
    gsap.to(heroImages, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
        }
    });
}

// Initialize Swiper
const heroSwiper = new Swiper('.hero-carousel', {
    loop: true,
    effect: 'fade',
    speed: 1500,
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.carousel-nav',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + ' carousel-nav-item"></div>';
        },
    },
    on: {
        slideChangeTransitionStart: function () {
            gsap.to(this.slides, {
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.in'
            });
        },
        slideChangeTransitionEnd: function () {
            animateHeroImage();
        },
        init: function() {
            animateHeroImage();
            parallaxHero();
        }
    }
});

// Featured Collections animations
function animateFeaturedCollections() {
    gsap.from('.featured-collections .section-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.featured-collections',
            start: 'top 80%',
        }
    });

    gsap.from('.collection-item', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.collections-grid',
            start: 'top 80%',
        }
    });
}

// Design Journey interactions
function initDesignJourney() {
    const journeyItems = document.querySelectorAll('.journey-item');
    const journeyStepTitle = document.querySelector('.journey-step-title');
    const journeyStepDescription = document.querySelector('.journey-step-description');

    const descriptions = [
        "Inspiration is drawn from various sources: nature, art, architecture, and culture. Our designers immerse themselves in these influences to create unique concepts.",
        "Sketches bring abstract ideas into tangible form. Designers explore multiple variations, refining their vision through each stroke of the pencil.",
        "Selecting the perfect fabric is crucial. We consider texture, drape, color, and sustainability to bring our designs to life in the most exquisite way.",
        "Pattern making is where precision meets creativity. Every curve and line is carefully calculated to ensure a perfect fit and silhouette.",
        "Our skilled artisans pour their expertise into every stitch. Hand-sewing, embroidery, and meticulous attention to detail bring the garment to life.",
        "In the final stage, we perfect every element. From hand-sewn embellishments to the last press, we ensure each piece meets our exacting standards."
    ];

    journeyItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            journeyItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const title = item.querySelector('h3').textContent;
            journeyStepTitle.textContent = title;
            journeyStepDescription.textContent = descriptions[index];

            gsap.from(journeyStepTitle, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: 'power2.out'
            });

            gsap.from(journeyStepDescription, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                delay: 0.2,
                ease: 'power2.out'
            });
        });
    });

    // Set initial state
    journeyItems[0].click();
}

// Design Journey animations
function animateDesignJourney() {
    gsap.from('.design-journey .section-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.design-journey',
            start: 'top 80%',
        }
    });

    gsap.from('.journey-item', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.journey-gallery',
            start: 'top 80%',
        }
    });

    gsap.from('.journey-image', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.journey-gallery',
            start: 'top 80%',
        }
    });
}

// Client Testimonials animations
function animateTestimonials() {
    gsap.from('.client-testimonials .section-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.client-testimonials',
            start: 'top 80%',
        }
    });

    gsap.from('.testimonial-slide', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.testimonials-carousel',
            start: 'top 80%',
        }
    });
}

// Initialize Testimonials Swiper
const testimonialsSwiper = new Swiper('.testimonials-carousel', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.testimonials-nav',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + ' testimonials-nav-item"></div>';
        },
    }
});
// Virtual Try-On Experience
function initVirtualTryOn() {
    const designOptions = document.querySelectorAll('.design-option');
    const colorOptions = document.querySelectorAll('.color-option');
    const garmentOverlay = document.querySelector('.garment-overlay');

    const designs = {
        design1: './laura-chouette-_rWF1DVWkUs-unsplash.jpg',
        design2: './fray-bekele-C8yO3FXdfaE-unsplash.jpg',
        design3: './naeim-jafari-6Xai7XxOgBc-unsplash.jpg'
    };

    let currentDesign = null;
    let currentColor = null;

    function updateGarment() {
        garmentOverlay.style.opacity = 0; // Set opacity to 0 to hide the image

        setTimeout(() => {
            if (currentDesign) {
                garmentOverlay.style.backgroundImage = `url(${currentDesign})`; // Set the new background image
                garmentOverlay.style.opacity = 1; // Set opacity back to 1 to show the new image

                if (currentColor) {
                    garmentOverlay.style.backgroundColor = currentColor;
                    garmentOverlay.style.mixBlendMode = 'multiply';
                } else {
                    garmentOverlay.style.backgroundColor = 'transparent';
                    garmentOverlay.style.mixBlendMode = 'normal';
                }
            }
        }, 300); // Delay to allow the opacity transition to complete
    }

    designOptions.forEach(option => {
        option.addEventListener('click', () => {
            const design = option.getAttribute('data-design');
            currentDesign = designs[design];
            updateGarment();

            designOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    colorOptions.forEach(option => {
        const color = option.getAttribute('data-color');
        option.style.backgroundColor = color;

        option.addEventListener('click', () => {
            currentColor = color;
            updateGarment();

            colorOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Initialize with the first design
    designOptions[0].click();
}

// Call initVirtualTryOn when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initVirtualTryOn();
});


// Virtual Try-On animations
function animateVirtualTryOn() {
    gsap.from('.virtual-try-on .section-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.virtual-try-on',
            start: 'top 80%',
        }
    });

    gsap.from('.model-container', {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: '.try-on-container',
            start: 'top 80%',
        }
    });

    gsap.from('.controls-container', {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.try-on-container',
            start: 'top 80%',
        }
    });
}

// Video Showcase Functionality
function initVideoShowcase() {
    const mainVideo = document.getElementById('main-video');
    const videoItems = document.querySelectorAll('.video-item');
    const videoOverlay = document.querySelector('.video-overlay');

    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoSrc = item.getAttribute('data-video');
            
            // Create a reveal animation
            gsap.to(videoOverlay, {
                opacity: 1,
                duration: 0.5,
                onComplete: () => {
                    mainVideo.src = videoSrc;
                    mainVideo.play();
                    gsap.to(videoOverlay, {
                        opacity: 0,
                        duration: 0.5,
                        delay: 0.2
                    });
                }
            });

            // Highlight the selected video item
            videoItems.forEach(v => v.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Play/Pause main video on click
    mainVideo.addEventListener('click', () => {
        if (mainVideo.paused) {
            mainVideo.play();
        } else {
            mainVideo.pause();
        }
    });
}

// Video Showcase animations
function animateVideoShowcase() {
    gsap.from('.video-showcase .section-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.video-showcase',
            start: 'top 80%',
        }
    });

    gsap.from('.main-video-wrapper', {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: '.video-container',
            start: 'top 80%',
        }
    });

    gsap.from('.video-item', {
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.video-grid',
            start: 'top 80%',
        }
    });
}

// Call all animation and initialization functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateFeaturedCollections();
    initDesignJourney();
    animateDesignJourney();
    animateTestimonials();
    initVirtualTryOn();
    animateVirtualTryOn();
    initVideoShowcase();
    animateVideoShowcase();
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            gsap.to(window, {
                duration: 1,
                scrollTo: targetElement,
                ease: 'power2.inOut'
            });
        }
    });
});

// Navbar scroll effect
ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'navbar--scrolled', targets: '.navbar'}
});

// Optional: Add a loading animation
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut'
    });
});
