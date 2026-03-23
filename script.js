document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeButtons = document.querySelectorAll('.theme-toggle');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuCloseBtn = document.querySelector('.close-btn');
    const mobileOverlay = document.querySelector('.nav-overlay-mobile, .nav-overlay');
    const mobileNavSelector = '.nav-links-mobile-list a, .nav-links-mobile a';
    const navLinks = document.querySelectorAll(`.nav-links a, ${mobileNavSelector}`);
    const sections = [...document.querySelectorAll('main section[id], section[id]')];
    const revealItems = document.querySelectorAll('.reveal-up');
    const header = document.querySelector('.site-header, header, .header-mobile');

    const applyThemeIcon = () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        themeButtons.forEach((button) => {
            const icon = button.querySelector('i');
            if (icon) {
                icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
            }
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
        if (!mobileOverlay) return;
        mobileOverlay.classList.add('open', 'active');
        mobileOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        if (!mobileOverlay) return;
        mobileOverlay.classList.remove('open', 'active');
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
                closeMobileMenu();
                return;
            }

            event.preventDefault();
            const target = document.querySelector(href);
            if (!target) {
                closeMobileMenu();
                return;
            }

            const headerOffset = header?.offsetHeight ?? 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset - 16;

            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            closeMobileMenu();
        });
    });

    const updateActiveLink = () => {
        if (!sections.length) return;
        const scrollPosition = window.scrollY + (header?.offsetHeight ?? 0) + 24;

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

    if (revealItems.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.18 });

        revealItems.forEach((item) => observer.observe(item));
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
});
