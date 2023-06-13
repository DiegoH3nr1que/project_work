class MobileNavbar{
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

animateLinks(){
    this.navLinks.forEach((link, index) => {
        link.style.animation
        ?(link.style.animation = "")
        :(link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
}

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }


    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();


var typed = new Typed(".input",{
    strings:["Seja bem Vindo!"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

$(".nav-list a").on("click", function (event){
    if(this.hash != "" ){
        event.preventDefault();
        const hash = decodeURIComponent(this.hash);

        $("html, body").animate(
            {
            scrollTop: $(hash).offset().top - 100
            },
            800
        );    
    }
});

// Gerando um valor RGB aleatório
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

// Aplicando a cor à barra de rolagem
document.documentElement.style.setProperty('--scrollbar-color', red + ', ' + green + ', ' + blue);



// Obtendo referências para o botão e a div
var botao = document.getElementById("saibaMais");
var div = document.getElementById("sobre-ling");

// Adicionando um evento de clique ao botão
botao.addEventListener("click", function() {
  // Verificando o estado de exibição da div
  if (div.style.display === "none") {
    // Se a div estiver oculta, torná-la visível
    div.style.display = "grid";
  } else {
    // Caso contrário, ocultá-la novamente
    div.style.display = "none";
  }
});

var botao1 = document.getElementById("saibaMaisJava");
var div1 = document.getElementById("sobre-Java");

botao1.addEventListener("click", function() {
    // Verificando o estado de exibição da div
    if (div1.style.display === "none") {
      // Se a div estiver oculta, torná-la visível
      div1.style.display = "grid";
    } else {
      // Caso contrário, ocultá-la novamente
      div1.style.display = "none";
    }
});
  

var botao2 = document.getElementById("saibaMaisBanco");
var div2 = document.getElementById("sobre-Bdados");

botao2.addEventListener("click", function() {
    // Verificando o estado de exibição da div
    if (div2.style.display === "none") {
      // Se a div estiver oculta, torná-la visível
      div2.style.display = "grid";
    } else {
      // Caso contrário, ocultá-la novamente
      div2.style.display = "none";
    }
});

var botao3 = document.getElementById("saibaMaisAuto");
var div3 = document.getElementById("sobre-Auto");

botao3.addEventListener("click", function() {
    // Verificando o estado de exibição da div
    if (div3.style.display === "none") {
      // Se a div estiver oculta, torná-la visível
      div3.style.display = "grid";
    } else {
      // Caso contrário, ocultá-la novamente
      div3.style.display = "none";
    }
});

var botao4 = document.getElementById("saibaMaisCiencia");
var div4 = document.getElementById("sobre-Ciencia");

botao4.addEventListener("click", function() {
    // Verificando o estado de exibição da div
    if (div4.style.display === "none") {
      // Se a div estiver oculta, torná-la visível
      div4.style.display = "grid";
    } else {
      // Caso contrário, ocultá-la novamente
      div4.style.display = "none";
    }
});

var botao5 = document.getElementById("saibaMaisRedes");
var div5 = document.getElementById("sobre-Redes");

botao5.addEventListener("click", function() {
    // Verificando o estado de exibição da div
    if (div5.style.display === "none") {
      // Se a div estiver oculta, torná-la visível
      div5.style.display = "grid";
    } else {
      // Caso contrário, ocultá-la novamente
      div5.style.display = "none";
    }
});
