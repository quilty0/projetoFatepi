document.addEventListener('DOMContentLoaded', function() {
    // Adiciona funcionalidade para dispositivos móveis
    const navItems = document.querySelectorAll('.nav-item');
    const dashboard = document.getElementById('dashboard');
    const menuPrincipal = document.getElementById('principal-menu');

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
document.addEventListener('DOMContentLoaded', function() {
    const criarProcessoView = document.getElementById('criar-processo');
    const formCriarProcesso = document.getElementById('form-criar-processo');
    const btnCancelar = document.querySelector('.btn-cancel');
    const btnNovoProcesso = document.querySelector('.novo-processo-btn');
    const dashboard = document.getElementById('dashboard');
    const processosEmAndamento = document.getElementById('processos-em-andamento');

    // Função para mostrar o formulário de criação de processo
    function mostrarFormularioCriarProcesso() {
        dashboard.style.display = 'none';
        processosEmAndamento.style.display = 'none';
        criarProcessoView.style.display = 'block';
    }

    // Adiciona evento de clique ao botão "Novo Processo"
    btnNovoProcesso.addEventListener('click', mostrarFormularioCriarProcesso);

    // Adiciona evento de clique ao botão "Cancelar"
    btnCancelar.addEventListener('click', function() {
        criarProcessoView.style.display = 'none';
        dashboard.style.display = 'block';
    });

    // Adiciona evento de submit ao formulário
    formCriarProcesso.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // adicionar a lógica para processar os dados do formulário
        //enviar para um servidor ou armazenar localmente

        const formData = new FormData(formCriarProcesso);
        const processoData = Object.fromEntries(formData.entries());

        console.log('Dados do novo processo:', processoData);

        // Simula o envio do processo
        alert('Processo criado com sucesso!');

        // Limpa o formulário
        formCriarProcesso.reset();

        
    });

    // Atualiza a data de abertura para a data atual por padrão
    document.getElementById('data-abertura').valueAsDate = new Date();
});
document.addEventListener('DOMContentLoaded', function () {
    const criarProcessoView = document.getElementById('criar-processo');
    const dashboard = document.getElementById('dashboard');
    const processosEmAndamento = document.getElementById('processos-em-andamento');
    const menuNovoProcesso = document.getElementById('novo-processo-menu');
    const btnCancelar = document.querySelector('.btn-cancel');

    // Exibir o formulário de criação de processo ao clicar no submenu "Novo Processo"
    menuNovoProcesso.addEventListener('click', function (e) {
        e.preventDefault(); // Evita comportamento padrão do link
        criarProcessoView.style.display = 'block';
        dashboard.style.display = 'none';
        processosEmAndamento.style.display = 'none';
    });

    // Ocultar o formulário e voltar ao dashboard ao cancelar
    btnCancelar.addEventListener('click', function () {
        criarProcessoView.style.display = 'none';
        dashboard.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const criarProcessoDiv = document.getElementById('criar-processo');
    const processosDiv = document.getElementById('processos-em-andamento');
    const principalDiv = document.getElementById('principal');
    const novoProcessoMenu = document.getElementById('novo-processo-menu');
    const processosMenu = document.getElementById('processos-menu');
    const principalMenu = document.getElementById('principal-menu');
    const btnVoltar = document.getElementById('btn-voltar');

    // Mostrar formulário e esconder outras seções
    novoProcessoMenu.addEventListener('click', function (e) {
        e.preventDefault(); // Evitar recarregar a página
        criarProcessoDiv.style.display = 'block';
        processosDiv.style.display = 'none';
        principalDiv.style.display = 'none';
    });

    // Mostrar Processos em Andamento e esconder outras seções
    processosMenu.addEventListener('click', function (e) {
        e.preventDefault();
        criarProcessoDiv.style.display = 'none';
        processosDiv.style.display = 'block';
        principalDiv.style.display = 'none';
    });

    // Mostrar Principal e esconder outras seções
    principalMenu.addEventListener('click', function (e) {
        e.preventDefault();
        criarProcessoDiv.style.display = 'none';
        processosDiv.style.display = 'none';
        principalDiv.style.display = 'block';
    });

    // Botão "Voltar" no formulário
    btnVoltar.addEventListener('click', function () {
        criarProcessoDiv.style.display = 'none';
        processosDiv.style.display = 'block';
        principalDiv.style.display = 'none';
    });
});


