document.addEventListener('DOMContentLoaded', function() {
    // Adiciona funcionalidade para dispositivos móveis
    const navItems = document.querySelectorAll('.nav-item');
    const dashboard = document.getElementById('dashboard');
    const menuPrincipal = document.getElementById('menu-principal');

    // Esconde o dashboard inicialmente
    dashboard.style.display = 'none';

    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            // Apenas previne o comportamento padrão se tiver submenu
            if (item.querySelector('.dropdown-menu')) {
                e.preventDefault();
                
                // Em dispositivos móveis
                if (window.innerWidth <= 768) {
                    // Remove active de todos os outros itens
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle active no item clicado
                    item.classList.toggle('active');
                }
            }
        });
    });

    // Adiciona funcionalidade ao menu Principal
    menuPrincipal.addEventListener('click', function(e) {
        e.preventDefault();
        dashboard.style.display = 'block';
        
        // Adiciona classe active ao item do menu
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        this.parentElement.classList.add('active');
    });

    // Fecha os menus quando clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item')) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Ajusta os menus ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Adiciona funcionalidade ao botão de criar processo
    const createButton = document.querySelector('.create-button');
    createButton.addEventListener('click', function() {
        alert('Iniciando criação de novo processo...');
        // Aqui você pode adicionar a lógica para abrir um formulário ou redirecionar
    });
});