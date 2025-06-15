// JS para o Header com Scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // JS para o Alternador de Tema
        document.querySelector('.theme-toggle').addEventListener('click', function() {
            const html = document.documentElement;
            if (html.getAttribute('data-theme') === 'dark') {
                html.setAttribute('data-theme', 'light');
                this.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                html.setAttribute('data-theme', 'dark');
                this.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const closeBtn = document.querySelector('.nav-overlay-mobile .close-btn');
        const navOverlay = document.querySelector('.nav-overlay-mobile');
        const navLinksMobile = document.querySelectorAll('.nav-links-mobile-list a');

        mobileMenuBtn.addEventListener('click', () => {
            navOverlay.classList.add('open');
        });

        closeBtn.addEventListener('click', () => {
            navOverlay.classList.remove('open');
        });

        navLinksMobile.forEach(link => {
            link.addEventListener('click', (e) => {
                // Previne o comportamento padrão para rolar suavemente para as seções
                e.preventDefault(); 
                const targetId = e.target.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                navOverlay.classList.remove('open');
            });
        });

          closeMenuBtn.addEventListener('click', () => {
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Habilita scroll no body
        });

        // GSAP Scroll Animations
        gsap.registerPlugin(ScrollTrigger);

        // Hero Section Animations
        gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1.2, delay: 0.5, ease: "power3.out" });
        gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1.2, delay: 0.7, ease: "power3.out" });
        gsap.from(".hero-btns", { opacity: 0, y: 50, duration: 1.2, delay: 0.9, ease: "power3.out" });
        gsap.from(".social-links", { opacity: 0, y: 50, duration: 1.2, delay: 1.1, ease: "power3.out" });
        gsap.from(".hero-image-wrapper", { opacity: 0, scale: 0.8, duration: 1.5, delay: 0.8, ease: "elastic.out(1, 0.5)" });

        // Section Title Animation
        gsap.utils.toArray(".section-title").forEach(title => {
            gsap.from(title, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: title,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        // About Section Animation
        gsap.from(".about-image-wrapper", {
            opacity: 0,
            x: -100,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#about",
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from(".about-text p, .skills", {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#about .about-text",
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        // Services Card Animation
        gsap.utils.toArray(".service-card").forEach(card => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        // Project Card Animation
        gsap.utils.toArray(".project-card").forEach(card => {
            gsap.from(card, {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        // Testimonial Card Animation
        gsap.utils.toArray(".testimonial-card").forEach(card => {
            gsap.from(card, {
                opacity: 0,
                x: 100,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        // Blog Post Card Animation
        gsap.utils.toArray(".blog-post-card").forEach(card => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        // Contact Section Animation
        gsap.from(".contact-info, .contact-formulario", {
            opacity: 0,
            y: 50,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#contact",
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = document.querySelector('header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset - 20; // Adiciona um pequeno padding

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }

                // Remove active class from all nav links
                document.querySelectorAll('.nav-links a, .nav-links-mobile a').forEach(link => {
                    link.classList.remove('active');
                });
                // Add active class to the clicked link
                this.classList.add('active');
            });
        });

        // Update active link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a, .nav-links-mobile a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });