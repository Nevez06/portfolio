document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeButtons = document.querySelectorAll('.theme-toggle');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuCloseBtn = document.querySelector('.close-btn');
    const mobileOverlay = document.querySelector('.nav-overlay-mobile');
    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-mobile-list a');
    const sections = [...document.querySelectorAll('main section[id]')];
    const revealItems = document.querySelectorAll('.reveal-up');

    const applyThemeIcon = () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        themeButtons.forEach((button) => {
            const icon = button.querySelector('i');
            icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        });
    };

    const setTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        applyThemeIcon();
    };

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        applyThemeIcon();
    }

    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
        });
    });

    const openMobileMenu = () => {
        mobileOverlay.classList.add('open');
        mobileOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        mobileOverlay.classList.remove('open');
        mobileOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    mobileMenuBtn?.addEventListener('click', openMobileMenu);
    mobileMenuCloseBtn?.addEventListener('click', closeMobileMenu);
    mobileOverlay?.addEventListener('click', (event) => {
        if (event.target === mobileOverlay) {
            closeMobileMenu();
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href?.startsWith('#')) {
                return;
            }

            event.preventDefault();
            const target = document.querySelector(href);
            if (!target) {
                return;
            }

            const headerOffset = document.querySelector('.site-header')?.offsetHeight ?? 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset - 16;

            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            closeMobileMenu();
        });
    });

    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + (document.querySelector('.site-header')?.offsetHeight ?? 0) + 24;

        let currentSectionId = sections[0]?.id ?? 'hero';
        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${currentSectionId}`;
            link.classList.toggle('active', isActive);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.18 });

    revealItems.forEach((item) => observer.observe(item));

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
});
