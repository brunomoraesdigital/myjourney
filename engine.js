// Seleciona o elemento onde o ano será exibido
const anoAtualElement = document.getElementById("ano-atual");

// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Atualiza o conteúdo do elemento com o ano atual
anoAtualElement.textContent = `Copyright ©
${anoAtual} Bruno Moraes`;   
/*********************************/

// Pegar todos os elementos com a classe 'botao'
var botoes = document.getElementsByClassName('botao');

// Elemento com o ID 'example-element'
var exemploElemento = document.getElementById('example-element');

/**
 * Função chamada quando um botão é clicado.
 * Atualiza a classe do elemento 'example-element' e destaca o botão clicado.
 */
function clique() {
    // Obter o valor específico do botão pressionado
    var valorBackgroundAttachment = this.innerText.toLowerCase().trim();

    // Atribuir a classe 'selecionado' ao botão clicado
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove('selecionado');
    }
    this.classList.add('selecionado');

    // Remover 'background-attachment:' e ponto e vírgula, e substituir vírgula por espaço
    exemploElemento.className = valorBackgroundAttachment
        .replace('background-attachment: ', '')
        .replace(/;/g, '')
        .replace(/, /g, '-');
}

// Iterar sobre cada botão e adicionar um ouvinte de evento de clique
for (var i = 0; i < botoes.length; i++) {
    // Adicionar o ouvinte de evento de clique a cada botão
    // Quando um botão for clicado, a função clique() será chamada
    botoes[i].addEventListener('click', clique);
}

