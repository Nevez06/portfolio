
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
        
        themeToggle.addEventListener('click', toggleTheme);
        themeToggleMobile.addEventListener('click', toggleTheme);
        
        // Menu mobile
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navOverlay = document.getElementById('navOverlay');
        const closeBtn = document.getElementById('closeBtn');
        
        mobileMenuBtn.addEventListener('click', () => {
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeBtn.addEventListener('click', () => {
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Fechar menu ao clicar em um link
        navOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
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
 