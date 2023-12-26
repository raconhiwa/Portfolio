/*Principal*/
const container = document.querySelector('.container');
const indisponivel = document.querySelector('.indisponivel');
/*----------------------------------------------------*/


/*Dark mode*/
const switchs = document.querySelector(".switch");
const botao = document.querySelector(".switch__botao");
const lua = document.querySelector(".switch__img--lua");
const sol = document.querySelector(".switch__img--sol");
const estrela = document.querySelector(".switch__img--star");
const nuvem = document.querySelector(".switch__img--clouds");
/*------------------------------------------------------------*/

const p = document.querySelector("p");
const h1 = document.querySelector("h1");
const t1 = document.querySelector(".saudacao__texto");
const neve = document.querySelector('.teste');
const snow = document.querySelector('.snow');
const left = document.querySelector('.intro--1');
const right = document.querySelector('.intro--2');
const intro = document.querySelector('.intro');
const spans = document.querySelectorAll('span');


const linguas = document.querySelector('.linguas');
const pt = document.querySelector('.linguas__pt');
const en = document.querySelector('.linguas__en');
const fr = document.querySelector('.linguas__fr');
const es = document.querySelector('.linguas__es');

const header = document.querySelector('.header__main');

/*Livro*/
const anteriorbtn = document.querySelector('.livro__botao-anterior');
const proximobtn = document.querySelector('.livro__botao-proximo');
const tituloLivro = document.querySelector('.livro__papel--frente-titulo');

const livro = document.querySelector('.livro');

const papel1 = document.querySelector('#p1');
const papel2 = document.querySelector('#p2');
const papel3 = document.querySelector('#p3');
const papel4 = document.querySelector('#p4');
const papel5 = document.querySelector('#p5');
const papel6 = document.querySelector('#p6');
const papel7 = document.querySelector('#p7');
const papel8 = document.querySelector('#p8');
const papel9 = document.querySelector('#p9');
const papel10 = document.querySelector('#p10');
/*------------------------------------------------------------*/


/*Sidebar*/
const apps = document.querySelector('.sidebar__list--items-apps');
const inicio = document.querySelector('.sidebar__list--items-inicio');
const perfil = document.querySelector('.sidebar__list--items-perfil');
const contato = document.querySelector('.sidebar__list--items-contato');
const projetos = document.querySelector('.sidebar__list--items-projetos');
const teste = document.querySelectorAll('.sidebar__list--items');
const inicioLegenda = document.querySelector('.sidebar__list--legenda-inicio');
const projetosLegenda = document.querySelector('.sidebar__list--legenda-projetos');
const appsLegenda = document.querySelector('.sidebar__list--legenda-apps');
const perfilLegenda = document.querySelector('.sidebar__list--legenda-perfil');
const contatoLegenda = document.querySelector('.sidebar__list--legenda-contato');
const i = document.querySelectorAll('i');


const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');
const tela3 = document.querySelector('.tela3');
const tela4 = document.querySelector('.tela4');
const tela5 = document.querySelector('.tela5');

/*------------------------------------------------------------*/


/*Contact form*/
const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const assunto = document.querySelector('.assunto');
const mensagem = document.querySelector('.mensagem');

const nenhum = document.querySelector('.nenhum');
const oferta = document.querySelector('.oferta');
const sugestao = document.querySelector('.sugestao');
const meme = document.querySelector('.meme');

// const spans = document.querySelectorAll('.dk');
const inputs = document.querySelectorAll('.inputis');
let contatoEnviar = document.querySelector('.contato__form--enviar');
const t = document.querySelector('.teste');
const botaoTexto = document.querySelector('.contato__form--enviar-botao');


/*------------------------------------------------------------*/

/*Perfil*/

const pais = document.querySelector('.perfil__cima-infos-lista-items-pais');
const brasil = document.querySelector('.perfil__cima-infos-lista-items-brasil');
const raca = document.querySelector('.perfil__cima-infos-lista-items-raca');
const humano = document.querySelector('.perfil__cima-infos-lista-items-humano');
const classe = document.querySelector('.perfil__cima-infos-lista-items-classe');
const dev = document.querySelector('.perfil__cima-infos-lista-items-dev');
const arma1 = document.querySelector('.perfil__cima-infos-lista-items-arma1');
const teclado = document.querySelector('.perfil__cima-infos-lista-items-teclado');
const arma2 = document.querySelector('.perfil__cima-infos-lista-items-arma2');
const cubo = document.querySelector('.perfil__cima-infos-lista-items-cubo');
const perfilContainer = document.querySelector('.perfil');
const testeee = document.querySelectorAll('span');

const dirigir = document.querySelector('.perfil__baixo-direito--hobbies-lista-items-dirigir')
const musica = document.querySelector('.perfil__baixo-direito--hobbies-lista-items-musica')
const codar = document.querySelector('.perfil__baixo-direito--hobbies-lista-items-codar')
const jogar = document.querySelector('.perfil__baixo-direito--hobbies-lista-items-jogar')
const ler = document.querySelector('.perfil__baixo-direito--hobbies-lista-items-ler')

const portugues = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-pt');
const ingles = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-en');
const espanhol = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-es');
const frances = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-esforço');

const esforço = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-esforço');
const equipe = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-equipe');
const comunicação = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-comunicação');
const criatividade = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-criatividade');
const foco = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-foco');
const organização = document.querySelector('.perfil__baixo-esquerdo--skills-esquerdo--lista-items-organização');

/*------------------------------------------------------------*/

inicio.addEventListener('click', () => { 
  tela1.style.left= "0";
  tela2.style.left= "-100%";
  tela3.style.left= "-100%";
  tela4.style.left= "-100%";
  tela5.style.left= "-100%";
});

projetos.addEventListener('click', () => { 
  tela1.style.left= "-100%";
  tela2.style.left= "0";
  tela3.style.left= "-100%";
  tela4.style.left= "-100%";
  tela5.style.left= "-100%";
});

apps.addEventListener('click', () => { 
  tela2.style.left= "-100%";
  tela1.style.left= "-100%";
  tela3.style.left= "0";
  tela4.style.left= "-100%";
  tela5.style.left= "-100%";
});

perfil.addEventListener('click', () => { 
  tela1.style.left= "-100%";
  tela2.style.left= "-100%";
  tela3.style.left= "-100%";
  tela4.style.left= "0";
  tela5.style.left= "-100%";
});
contato.addEventListener('click', () => { 
  tela1.style.left= "-100%";
  tela2.style.left= "-100%";
  tela3.style.left= "-100%";
  tela4.style.left= "-100%";
  tela5.style.left= "0";
});





anteriorbtn.addEventListener('click', anteriorPagina);
proximobtn.addEventListener('click', proximaPagina);

let localAtual = 1;
let numPage = 8;
let localMax = numPage + 1;

function abrirLivro() {
  livro.style.transform = 'translateX(50%)';
  anteriorbtn.style.transform = "translateX(-35rem)";
  
}

function fecharLivro(comeco) { 
  if(comeco) {
    livro.style.transform = 'translateX(0)';
    anteriorbtn.style.transform = 'translateX(0)';
  proximobtn.style.transform = 'translateX(0)';
    
    
  } else {
    livro.style.transform = 'translateX(100%)';
  anteriorbtn.style.transform = 'translateX(-35rem)';

    
  }
  
  

}

function proximaPagina() {
  if(localAtual < localMax) {
    switch(localAtual) {
      case 1:
        abrirLivro();
        papel1.classList.add('flipped');
        papel1.style.zIndex = 1;
        break;
        case 2:
          papel2.classList.add('flipped');
          papel2.style.zIndex = 2;
          break;
          case 3:
            papel3.classList.add('flipped');
            papel3.style.zIndex = 3;
            break;
          case 4:
            papel4.classList.add('flipped');
            papel4.style.zIndex = 4;
          break;
          case 5:
            papel5.classList.add('flipped');
            papel5.style.zIndex = 5;
          break;
          case 6:
            papel6.classList.add('flipped');
            papel6.style.zIndex = 6;
          break;
          case 7:
            papel7.classList.add('flipped');
            papel7.style.zIndex = 7;
          break;
          case 8:
            papel8.classList.add('flipped');
            papel8.style.zIndex = 8;
            fecharLivro();
          break;
            default:
              throw new Error('unknown state');
    }
    localAtual++;
    console.log(localAtual)
  }
}

function anteriorPagina() { 
  if(localAtual > 1) {
    switch(localAtual) {
      case 2:
        fecharLivro(true);
        papel1.classList.remove("flipped");
        papel1.style.zIndex = 8;
        break;
      case 3:
          papel2.classList.remove("flipped");
          papel2.style.zIndex = 7;
          break;
      case 4:
          papel3.classList.remove("flipped");
          papel3.style.zIndex = 6;
          break;
      case 5:
          papel4.classList.remove("flipped");
          papel4.style.zIndex = 5;
          break;
      case 6:
          papel5.classList.remove("flipped");
          papel5.style.zIndex = 4;
          break;
      case 7:
          papel6.classList.remove("flipped");
          papel6.style.zIndex = 3;
          break;
      case 8:
          papel7.classList.remove("flipped");
          papel7.style.zIndex = 2;
          break;
      case 9:
        abrirLivro();
          papel8.classList.remove("flipped");
          papel8.style.zIndex = 1;
          break;
            default:
              throw new Error("unknown state");
    }

    localAtual--;
    console.log(localAtual)
  }
}



/*********************************************************************/
/*****************************DARK MODE*******************************/
/*********************************************************************/

x = 0;

switchs.addEventListener('click', () => {
  if (x == 0) {
    container.style.background = "linear-gradient(90.11deg, #0F0C29 1.51%, #302B63 54.29%, #24243E 99.89%)";
    switchs.style.backgroundColor = "#000";
    lua.classList.add("up");
    estrela.classList.add("up");
    sol.classList.add("down");
    nuvem.classList.add("down");
    p.classList.add('texto');
    h1.classList.add('texto');
    spans.forEach(e => e.classList.toggle('texto'));
    inputs.forEach(e => e.classList.toggle('texto'));
    contatoEnviar.classList.toggle('texto');
    contatoEnviar.style.setProperty('--cor', '#45f3ff');
    // perfilContainer.style.background = 'linear-gradient(to right, #fc5c7d, #6a82fb)';
    i.forEach(e => e.classList.toggle('texto'));
      x = 1;
  } else {
    container.style.background = "linear-gradient(63.13deg, #9CFCF8 0.09%, #6E7BFB 100.46%)";
    switchs.style.backgroundColor = "#34b4eb";
    lua.classList.remove("up");
    estrela.classList.remove("up");
    sol.classList.remove("down");
    nuvem.classList.remove("down");
    p.classList.remove('texto');
    h1.classList.remove('texto');
    spans.forEach(e => e.classList.toggle('texto'));
    inputs.forEach(e => e.classList.toggle('texto'));
    contatoEnviar.classList.toggle('texto');
    contatoEnviar.style.setProperty('--cor', '#390da0');
    // perfilContainer.style.background = 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)';
    i.forEach(e => e.classList.toggle('texto'));
    x = 0;
  }
})


/*********************************************************************/
/*************************ANIMAÇÕES LINGUAGENS************************/
/*********************************************************************/

z = 0;
linguas.addEventListener("click", () => {
  if (z == 0) {
  pt.style.left = '3rem';
  pt.style.transform = 'rotate(360deg)';

  en.style.left = '6rem';
  en.style.transform = 'rotate(360deg)';

  fr.style.left = '9rem';
  fr.style.transform = 'rotate(360deg)';

  es.style.left = '12rem';
  es.style.transform = 'rotate(360deg)';
  z = 1;
  // } else if (z == 0 && screen.width <= 600 ){
  //   pt.style.left = '6rem';
  // pt.style.transform = 'rotate(360deg)';

  // en.style.left = '9rem';
  // en.style.transform = 'rotate(360deg)';

  // fr.style.left = '12rem';
  // fr.style.transform = 'rotate(360deg)';

  // es.style.left = '15rem';
  // es.style.transform = 'rotate(360deg)';
  // z = 1;
  } else {

    pt.style.left = '0rem';
    pt.style.transform = 'rotate(-360deg)';
  
    en.style.left = '0rem';
    en.style.transform = 'rotate(-360deg)';
  
    fr.style.left = '0rem';
    fr.style.transform = 'rotate(-360deg)';
  
    es.style.left = '0rem';
    es.style.transform = 'rotate(-360deg)';
    z = 0;
  }
  
  }

)


/*********************************************************************/
/**************************TROCA DE LINGUAGEM*************************/
/*********************************************************************/

let linguagens = document.querySelectorAll('.lang');
    

linguagens.forEach(el => {
  el.addEventListener('click', () => {
    switch(true) {
      case el.getAttribute('language') == 'portuguese': 
        el.style.zIndex = '1';
        en.style.zIndex = '0';
        es.style.zIndex = '0';
        fr.style.zIndex = '0';
        break;
        case el.getAttribute('language') == 'english':
          el.style.zIndex = '1';
          pt.style.zIndex = '0';
          es.style.zIndex = '0';
          fr.style.zIndex = '0';
          break;
          case el.getAttribute('language') == 'french': 
        el.style.zIndex = '1';
        en.style.zIndex = '0';
        es.style.zIndex = '0';
        pt.style.zIndex = '0';
        break;
        case el.getAttribute('language') == 'spanish':
          el.style.zIndex = '1';
          pt.style.zIndex = '0';
          pt.style.zIndex = '0';
          fr.style.zIndex = '0';
          break;
    }

    let attr = el.getAttribute('language');


    header.textContent = data[attr].heading;
    tituloLivro.textContent = data[attr].titulo;
    nome.textContent = data[attr].nome;
    assunto.textContent = data[attr].assunto;
    mensagem.textContent = data[attr].mensagem;
    nenhum.textContent = data[attr].nenhum;
    oferta.textContent = data[attr].oferta;
    sugestao.textContent = data[attr].sugestao;
    meme.textContent = data[attr].meme;
    botaoTexto.textContent = data[attr].contatoEnviar;
    pais.textContent = data[attr].pais;
    brasil.textContent = data[attr].brasil;
    raca.textContent = data[attr].raca;
    humano.textContent = data[attr].humano;
    classe.textContent = data[attr].classe;
    dev.textContent = data[attr].dev;
    arma1.textContent = data[attr].arma1;
    teclado.textContent = data[attr].teclado;
    arma2.textContent = data[attr].arma2;
    cubo.textContent = data[attr].cubo;
    dirigir.textContent = data[attr].dirigir;
    musica.textContent = data[attr].musica;
    codar.textContent = data[attr].codar;
    jogar.textContent = data[attr].jogar;
    ler.textContent = data[attr].ler;
    portugues.textContent = data[attr].portugues;
    ingles.textContent = data[attr].ingles;
    espanhol.textContent = data[attr].espanhol;
    frances.textContent = data[attr].frances;
    inicioLegenda.textContent = data[attr].inicio;
    projetosLegenda.textContent = data[attr].projetos;
    perfilLegenda.textContent = data[attr].perfil;
    contatoLegenda.textContent = data[attr].contato;
    esforço.textContent = data[attr].esforço;
    equipe.textContent = data[attr].equipe;
    comunicação.textContent = data[attr].comunicação;
    criatividade.textContent = data[attr].criatividade;
    foco.textContent = data[attr].foco;
    organização.textContent = data[attr].organização;

    
  })
})

const data = {
    english: {
      heading: 'Hello !',
      titulo: 'Drawing Book',
      nome: 'Name',
      assunto: 'Subject',
      mensagem: 'Message',
      nenhum: 'Choose a subject',
      oferta: 'Job offer',
      sugestao: 'Suggestions',
      meme: 'Send me a meme',
      contatoEnviar: 'Send',
      pais: 'Nation:',
      brasil: 'Brazil',
      raca: 'Race:',
      humano: 'Human',
      classe: 'Class:',
      dev: 'Front-end web developer',
      arma1: 'Main Weapon:',
      teclado: 'Keyboard',
      arma2: 'Secondary Weapon:',
      cubo: "Rubik's cube",
      dirigir: 'To drive',
      musica: 'Music',
      codar: 'To code',
      jogar: 'To play',
      ler: 'To read',
      portugues: 'Portuguese',
      ingles: 'English ',
      espanhol: 'Spanish',
      frances: 'French',
      inicio: 'Main',
      projetos: 'Projects',
      perfil: 'Profile',
      contato: 'Contact',
      esforço: 'Effort',
      equipe: 'Team work',
      comunicação: 'Comunication',
      criatividade: 'Criativity',
      foco: 'Focus',
      organização: 'Organization'


    },
    portuguese: {
      heading: 'Oi !',
      titulo: 'Livro de desenho',
      nome: 'Nome',
      assunto: 'Assunto',
      mensagem: 'Mensagem',
      nenhum: 'Escolha um assunto',
      oferta: 'Oferta de emprego',
      sugestao: 'Sugestões',
      meme: 'Me mande um meme',
      contatoEnviar: 'Enviar',
      pais: 'Nação:',
      brasil: 'Brasil',
      raca: 'Raça:',
      humano: 'Humano',
      classe: 'Classe:',
      dev: ' Desenvolvedor web front-end',
      arma1: 'Arma principal:',
      teclado: 'Teclado',
      arma2: 'Arma secundaria:',
      cubo: "Cubo magico",
      dirigir: 'Dirigir',
      musica: 'Musica',
      codar: 'Codar',
      jogar: 'Jogar',
      ler: 'Ler',
      portugues: 'Português',
      ingles: 'Inglês',
      espanhol: 'Espanhol',
      frances: 'Francês',
      inicio: 'Início',
      projetos: 'Projetos',
      perfil: 'Perfil',
      contato: 'Contato',
      esforço: 'Esforço',
      equipe: 'Trabalho em equipe',
      comunicação: 'Comunicação',
      criatividade: 'Criatividade',
      foco: 'Foco',
      organização: 'Organização'

    },
    french: {
      heading: 'Salut !',
      titulo: 'Livre de dessin',
      nome: 'Nom',
      assunto: 'Sujet',
      mensagem: 'Message',
      nenhum: 'choisir un sujet',
      oferta: "offre d'emploi",
      sugestao: 'Suggestions',
      meme: 'envoie moi un mème',
      contatoEnviar: 'Envoyer',
      pais: 'Nation:',
      brasil: 'Brésil',
      raca: 'Race:',
      humano: 'Humaine',
      classe: 'Classe:',
      dev: 'Développeur web front-end',
      arma1: 'Arma principale:',
      teclado: 'Clavier',
      arma2: 'Arma secondaire:',
      cubo: "Cubo magique",
      dirigir: 'Conduire',
      musica: 'Musique',
      codar: 'Code',
      jogar: 'Jouer',
      ler: 'Lire',
      portugues: 'Portugais',
      ingles: 'Anglais',
      espanhol: 'Espagnol',
      frances: 'Francês',
      inicio: 'Principal',
      projetos: 'Projets',
      perfil: 'Profil',
      contato: 'Contact',
      esforço: 'Effort',
      equipe: 'Travail en équipe',
      comunicação: 'Communication',
      criatividade: 'La créativité',
      foco: 'Se concentrer',
      organização: 'Organisation'

    },
    spanish: {
      heading: 'Hola !',
      titulo: 'Libro de dibujo',
      nome: 'Nombre',
      assunto: 'Sujeto',
      mensagem: 'Mesaje',
      nenhum: 'elige un tema',
      oferta: 'oferta de empleo',
      sugestao: 'sugerencias',
      meme: 'envíame un meme',
      contatoEnviar: 'Enviar',
      pais: 'Nación:',
      brasil: 'Brasil',
      raca: 'Raza:',
      humano: 'Humano',
      classe: 'Classe:',
      dev: 'Desarrollador web front-end',
      arma1: 'Arma principal:',
      teclado: 'teclado',
      arma2: 'Arma secondaria:',
      cubo: "Cubo magico",
      dirigir: 'Conducir',
      musica: 'Musica',
      codar: 'Codigo',
      jogar: 'Jugar',
      ler: 'Leer',
      portugues: 'Portugués',
      ingles: 'Inglés',
      espanhol: 'Español',
      frances: 'Francês',
      inicio: 'Principal',
      projetos: 'Proyectos',
      perfil: 'Perfil',
      contato: 'Contacto',
      esforço: 'Esfuerzo',
      equipe: 'Trabajo en equipo',
      comunicação: 'Comunicación',
      criatividade: 'Creatividad',
      foco: 'Enfocar',
      organização: 'Organización'
    }
}

