// Seleciona todos os botões de trailer da página
const botoes = document.querySelectorAll('.trailer-btn');

// Cria uma função de clique para cada botão encontrado
botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // Encontra a div do vídeo que está logo depois do botão clicado
        const videoContainer = this.nextElementSibling;

        // Se o vídeo estiver escondido, mostra. Se estiver visível, esconde.
        if (videoContainer.style.display === 'none') {
            videoContainer.style.display = 'block';
            this.textContent = 'Fechar Trailer'; // Muda o texto do botão
        } else {
            videoContainer.style.display = 'none';
            this.textContent = 'Assistir Trailer'; // Volta o texto original
        }
    });
});
