const botao = document.getElementById('botao');
let mensagem = null;

botao.addEventListener('click', function() {
    // Criar bolhas
    for (let i = 0; i < 10; i++) {
        criarBolha();
    }

    // Alternar mensagem
    if (!mensagem) {
        mensagem = document.createElement('p');
        mensagem.textContent = 'PER ARDUA SURGO = VENCER, APESAR DAS DIFICULDADES!';
        mensagem.id = 'mensagemBotao';

        mensagem.style.marginTop = '10px';
        mensagem.style.fontWeight = 'bold';
        mensagem.style.textAlign = 'center';
        mensagem.style.width = '100%';
        mensagem.style.border = '2px solid'; 
        mensagem.style.borderRadius = '5px';
        mensagem.style.padding = '10px';
        mensagem.style.animation = 'brilho 2s ease-in-out infinite';


        // Animação de brilho (defina no CSS)
        mensagem.style.animation = 'brilho 2s ease-in-out infinite';
        
        this.insertAdjacentElement('afterend', mensagem);
    } else {
        mensagem.remove();
        mensagem = null;
    }
});

function criarBolha() {
    const bolha = document.createElement('div');
    bolha.classList.add('bolha');

    const size = Math.random() * 10 + 10;
    bolha.style.width = size + 'px';
    bolha.style.height = size + 'px';

    bolha.style.left = Math.random() * 100 + '%';

    bolha.style.bottom = '0px';

    botao.appendChild(bolha);

    setTimeout(() => {
        bolha.remove();
    }, 2000);
}


