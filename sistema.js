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

   
});
document.addEventListener('DOMContentLoaded', function() {
    const processosEmAndamento = document.getElementById('processos-em-andamento');
    const dashboard = document.getElementById('dashboard');
    const emAndamentoLink = document.querySelector('.nav-item:first-child .dropdown-menu li:nth-child(2) a');

    // Adiciona funcionalidade ao submenu "Em Andamento"
    emAndamentoLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Esconde o dashboard e mostra a view de processos em andamento
        dashboard.style.display = 'none';
        processosEmAndamento.style.display = 'block';
        
        // Atualiza o estado ativo do menu
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        this.closest('.nav-item').classList.add('active');
    });

    // Atualiza o código existente do menu Principal
    document.getElementById('menu-principal').addEventListener('click', function(e) {
        e.preventDefault();
        // Mostra o dashboard e esconde a view de processos em andamento
        dashboard.style.display = 'block';
        processosEmAndamento.style.display = 'none';
        
        // Atualiza o estado ativo do menu
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        this.parentElement.classList.add('active');
    });



    // Adiciona funcionalidade ao botão Novo Processo
    document.querySelector('.novo-processo-btn').addEventListener('click', function() {
        alert('Iniciando criação de novo processo...');
    });
});

