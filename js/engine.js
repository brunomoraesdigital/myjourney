// footer

const anoAtualElement = document.getElementById("ano-atual");
const anoAtual = new Date().getFullYear();
anoAtualElement.textContent = `Copyright ©
${anoAtual} Bruno Moraes`;
var botoes = document.getElementsByClassName('botao');
var exemploElemento = document.getElementById('example-element');

function clique() {
  var valorBackgroundAttachment = this.innerText.toLowerCase().trim();
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove('selecionado');
  }
  this.classList.add('selecionado');
  exemploElemento.className = valorBackgroundAttachment
    .replace('background-attachment: ', '')
    .replace(/;/g, '')
    .replace(/, /g, '-');
}

for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', clique);
}



// Selecionando elementos do DOM
let navIcon = document.getElementById('nav-icon');
let navClose = document.getElementById('nav-close');
let navList = document.getElementById('nav-list');
let brFlag = document.getElementById('br-flag');
let usFlag = document.getElementById('us-flag');
let brText = document.getElementsByClassName('br-text');
let usText = document.getElementsByClassName('us-text');

// Função para alternar classes da barra de navegação
function toggleClassesNav() {
  navIcon.classList.toggle('move-nav-icon');
  navList.classList.toggle('move-nav-list');
  navClose.classList.toggle('move-nav-close');
}

// Função para remover classes da barra de navegação
function removeClassesNav() {
  navIcon.classList.remove('move-nav-icon');
  navList.classList.remove('move-nav-list');
  navClose.classList.remove('move-nav-close');
}

// Função para alternar para o idioma brasileiro
function switchToBr() {
  brFlag.classList.remove('show');
  usFlag.classList.remove('hide');
  brFlag.classList.add('hide');
  usFlag.classList.add('show');
  for (let i = 0; i < usText.length; i++) {
    // Oculta texto em inglês e exibe texto em português
    usText[i].classList.add('hide');
    usText[i].classList.remove('show');
    brText[i].classList.add('show');
    brText[i].classList.remove('hide');
  }
}

// Função para alternar para o idioma inglês
function switchToUs() {
  usFlag.classList.remove('show');
  brFlag.classList.remove('hide');
  usFlag.classList.add('hide');
  brFlag.classList.add('show');
  for (let i = 0; i < usText.length; i++) {
    // Oculta texto em português e exibe texto em inglês
    usText[i].classList.add('show');
    usText[i].classList.remove('hide');
    brText[i].classList.add('hide');
    brText[i].classList.remove('show');
  }
}

// Adiciona listeners de eventos aos elementos do DOM
brFlag.addEventListener('click', switchToBr);
usFlag.addEventListener('click', switchToUs);
navIcon.addEventListener('click', toggleClassesNav);
navClose.addEventListener('click', removeClassesNav);

/************************************/
// click 
/**********************************/
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona todos os itens do menu
  const navItems = document.querySelectorAll("#nav-list ul li");

  // Adiciona um ouvinte de evento de clique para cada item do menu
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
      // Chama a função para lidar com o clique
      handleMenuItemClick(i);
    });
  }

  // Função para lidar com o clique nos itens do menu
  function handleMenuItemClick(index) {
    // Reseta a classe "active" de todos os itens
    resetActiveClass();

    // Adiciona a classe "active" ao item clicado
    navItems[index].classList.add("active");
  }

  // Função para resetar a classe "active" de todos os itens do menu
  function resetActiveClass() {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("active");
    }
  }
});

/**********************************/
// scroll e touchmove 
/**********************************/
document.addEventListener("DOMContentLoaded", function() {
  // Adiciona um ouvinte de evento de rolagem para a janela
  document.addEventListener("scroll", debounce(handleScroll, 300));
  document.addEventListener("touchmove", debounce(handleScroll, 300));

  // Chama handleScroll para mostrar a seção atual ao carregar a página
  handleScroll();

  function handleScroll() {
    const sections = document.querySelectorAll(".sec");
    let closestSection = sections[0];
    let closestDistance = Math.abs(window.innerHeight);

    sections.forEach((section) => {
      const distance = Math.abs(section.getBoundingClientRect().top);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = section;
      }
    });

    // Adiciona a classe "nav-icon-background" ao elemento com ID "nav-icon" se não for a seção "hero"
    const navIcon = document.getElementById("nav-icon");
    if (closestSection.id !== "hero") {
      navIcon.classList.add("nav-icon-background");
    } else {
      navIcon.classList.remove("nav-icon-background");
    }

    // Remove a classe "active" de todos os itens do menu
    resetActiveClass();

    // Adiciona a classe "active" ao item correspondente no menu
    const navItem = document.querySelector(`[href="#${closestSection.id}"]`);
    navItem.parentElement.classList.add("active");

    console.log("Current Section:", closestSection.id);
  }

  function debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this,
        args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function resetActiveClass() {
    const navItems = document.querySelectorAll("#nav-list ul li");
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

/***************************/
// vel vídeo
/***************************/

  document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.sec-b.bg-sec.video-container video');
    if (video) {
      video.playbackRate = 0.75; // Defina o valor desejado (0.75 reduz a velocidade em 25%)
    }
  }); 