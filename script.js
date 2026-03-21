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
            navLinks.style.background = '#0A0A0A';
            navLinks.style.padding = '2rem 0';
            navLinks.style.borderBottom = '1px solid #3A3A3A';
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

    // Technical Floating Data Chips Animation
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": ["#D9D9D9", "#BFBFBF", "#F2F2F2", "#4A4A4A"] },
                "shape": {
                    "type": ["edge", "triangle"],
                    "stroke": { "width": 1, "color": "rgba(255,255,255,0.1)" }
                },
                "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 6,
                    "random": true,
                    "anim": { "enable": true, "speed": 4, "size_min": 0.3, "sync": false }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "top-right",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": { "enable": true, "mode": "bubble" },
                    "onclick": { "enable": true, "mode": "repulse" },
                    "resize": true
                },
                "modes": {
                    "bubble": { "distance": 200, "size": 15, "duration": 2, "opacity": 0.8, "speed": 3 },
                    "repulse": { "distance": 200, "duration": 0.4 }
                }
            },
            "retina_detect": true
        });
    }
});
