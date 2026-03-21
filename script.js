document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.flexDirection = 'column';
            navLinks.style.background = '#ffffff';
            navLinks.style.padding = '2rem 0';
        });
    }

    // Modal Logic for Job Applications
    const applyBtns = document.querySelectorAll('.apply-btn');
    const applyModal = document.getElementById('application-modal');
    const closeModal = document.getElementById('close-modal');
    const applyForm = document.getElementById('application-form');
    const modalJobTitle = document.getElementById('modal-job-title');

    applyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const jobTitle = btn.getAttribute('data-job');
            if (modalJobTitle) {
                modalJobTitle.innerText = jobTitle;
            }
            if (applyModal) {
                applyModal.classList.add('active');
            }
        });
    });

    if (closeModal && applyModal) {
        closeModal.addEventListener('click', () => {
            applyModal.classList.remove('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === applyModal) {
            applyModal.classList.remove('active');
        }
    });

    if (applyForm) {
        applyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your application has been received successfully! Our HR team will reach out to you shortly.');
            applyModal.classList.remove('active');
            applyForm.reset();
        });
    }

    // Network Particles Animation (particles.js)
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": ["#FF5722", "#FFC107", "#FF9800", "#F44336"] },
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": { "enable": true, "speed": 3, "size_min": 1, "sync": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 160,
                    "color": "#FF9800",
                    "opacity": 0.6,
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "repulse": { "distance": 100, "duration": 0.4 },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});
