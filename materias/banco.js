// Tema claro/escuro
        const themeToggle = document.getElementById('themeToggle');
        const themeToggleMobile = document.getElementById('themeToggleMobile');
        const html = document.documentElement;
        
        // Verificar preferência do usuário
        const currentTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'light') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Alternar tema
        function toggleTheme() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            if (newTheme === 'light') {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                themeToggleMobile.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
       themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            
            // Atualizar ícone
            const icon = themeToggle.querySelector('i');
            icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
            
            // Animação
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 500);
        });

        themeToggle.addEventListener('click', toggleTheme);
        themeToggleMobile.addEventListener('click', toggleTheme);
        
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
        
        // Efeito de scroll no header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });