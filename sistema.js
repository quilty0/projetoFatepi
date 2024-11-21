document.addEventListener('DOMContentLoaded', function() {
    const processosButton = document.getElementById('processos');
    const processosSubmenu = document.getElementById('processos-submenu');
    const tramitacaoItem = document.getElementById('tramitacao');
    const tramitacaoSubmenu = document.getElementById('tramitacao-submenu');
    const relatorioButton = document.getElementById('relatorio');
    const relatorioSubmenu = document.getElementById('relatorio-submenu');

    processosButton.addEventListener('click', function() {
        processosSubmenu.style.display = processosSubmenu.style.display === 'block' ? 'none' : 'block';
        tramitacaoSubmenu.style.display = 'none';
        relatorioSubmenu.style.display = 'none';
    });

    tramitacaoItem.addEventListener('mouseover', function() {
        tramitacaoSubmenu.style.display = 'block';
    });

    tramitacaoItem.addEventListener('mouseout', function() {
        tramitacaoSubmenu.style.display = 'none';
    });

    relatorioButton.addEventListener('click', function() {
        relatorioSubmenu.style.display = relatorioSubmenu.style.display === 'block' ? 'none' : 'block';
        processosSubmenu.style.display = 'none';
        tramitacaoSubmenu.style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        if (!processosButton.contains(event.target) && !processosSubmenu.contains(event.target) &&
            !relatorioButton.contains(event.target) && !relatorioSubmenu.contains(event.target)) {
            processosSubmenu.style.display = 'none';
            tramitacaoSubmenu.style.display = 'none';
            relatorioSubmenu.style.display = 'none';
        }
    });
});

// Seleciona elementos do DOM
const processosMenu = document.getElementById('processos');
const processosSubmenu = document.getElementById('processos-submenu');
const aberturaMenuItem = document.getElementById('abertura');
const formulario = document.getElementById('formulario');



    // Exibe o formulário ao clicar em "Abertura"
    formulario.addEventListener('click', () => {
    // Esconde o submenu de processos
    processosSubmenu.style.display = 'none';
    
  
});
