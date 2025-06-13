document.addEventListener('DOMContentLoaded', function() {
    // Anima as barras de habilidades quando a seção é visualizada
    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.skill-level');
        const materiasSection = document.querySelector('.materias-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(materiasSection);
    };
    
    animateSkills();
    
    // Adiciona efeito de hover nos cards
    const materiaCards = document.querySelectorAll('.materia-card');
    
    materiaCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const header = card.querySelector('.materia-header');
            header.style.background = 'linear-gradient(135deg, #2ecc71 0%, #3498db 100%)';
        });
        
        card.addEventListener('mouseleave', () => {
            const header = card.querySelector('.materia-header');
            header.style.background = 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)';
        });
    });
});
