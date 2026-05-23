const DEFAULT_TITLE = document.title;
let currentLanguage = localStorage.getItem('language') || 'pt-br';

const translations = {
  'pt-br': {
    navInicio: 'Início',
    navSobre: 'Sobre',
    navInfo: 'Informações',
    navProgramacao: 'Programação',
    navCartela: 'Comprar cartela',
    dark: '🌙 Modo escuro',
    light: '☀️ Modo claro',
    heroTag: 'Cordel, Cultura e Tradição',
    heroTitle: 'XIV São João Solidário',
    heroText: 'A grande festa junina da EEEP Alfredo Nunes de Melo chega com o tema Cordel, Cultura e Tradição, celebrando a identidade nordestina, a força da comunidade escolar e a solidariedade em forma de ação.',
    heroBtn1: 'Comprar minha cartela',
    heroBtn2: 'Ver programação',
    aboutSpan: 'Sobre o evento',
    aboutTitle: 'Uma festa feita por todos e para todos',
    aboutH3: 'O que é o São João Solidário?',
    aboutP1: 'O XIV São João Solidário da EEEP Alfredo Nunes de Melo é um evento que une alegria, tradição, cultura popular e compromisso social. Com o tema Cordel, Cultura e Tradição, a festa valoriza a literatura de cordel, a musicalidade, as quadrilhas, as comidas típicas e as expressões artísticas que fazem parte da identidade nordestina.',
    aboutP2: 'A entrada será feita por meio da compra de uma cartela ou da doação de 1 kg de alimento não perecível. Os alimentos arrecadados serão organizados em cestas básicas e doados para famílias da comunidade.',
    whyH3: 'Por que participar?',
    whyP: 'Ao comprar sua cartela ou doar 1 kg de alimento não perecível, você ajuda a fortalecer uma ação coletiva que movimenta a escola, valoriza a cultura regional, incentiva o protagonismo estudantil e contribui para a formação de cestas básicas destinadas à comunidade.',
    infoSpan: 'Informações principais',
    infoTitle: 'Prepare seu chapéu de palha',
    dataH3: 'Data',
    dataP: '30/06/2026',
    localH3: 'Local',
    horarioH3: 'Horário',
    horarioP: '18h às 22h',
    entradaH3: 'Entrada',
    entradaP: 'Cartela R$ 10,00 ou 1 kg de alimento',
    progSpan: 'Programação',
    progTitle: 'Cordel, quadrilha, música e solidariedade',
    t1Time: 'Acolhida',
    t1H3: 'Recepção do público',
    t1P: 'Momento inicial de acolhimento da comunidade escolar, organização da entrada solidária e abertura da festa.',
    t2Time: '18h às 20h',
    t2H3: 'Quadrilhas dos cursos',
    t2P: 'Apresentações juninas dos cursos, valorizando o tema Cordel, Cultura e Tradição por meio da dança, da música e da encenação popular.',
    t3Time: 'Intervalos',
    t3H3: 'Apresentações musicais',
    t3P: 'Nos intervalos da programação, o público poderá acompanhar apresentações musicais para animar ainda mais o arraiá.',
    t4Time: '20h às 22h',
    t4H3: 'Bingo solidário',
    t4P: 'Realização do bingo com as cartelas, sorteios e participação do público, encerrando a noite com alegria e solidariedade.',
    urgenciaTag: '🔥 ATENÇÃO! CARTELAS LIMITADAS',
    urgenciaTitle: 'Garanta agora sua participação no XIV São João Solidário',
    urgenciaP1: 'O XIV São João da EEEP Alfredo Nunes de Melo está chegando, e as cartelas estão acabando rápido!',
    urgenciaP2: 'Garanta agora a sua chance de participar dos sorteios, apoiar o nosso evento e viver uma noite inesquecível de cultura, tradição e muita animação.',
    urgenciaAlerta: '⏳ Quando as cartelas acabarem, não haverá novas unidades disponíveis.',
    urgenciaP3: 'Não deixe para depois, quem compra antes participa com mais tranquilidade e evita ficar de fora! 🎟️✨',
    urgenciaBtn: 'Comprar cartela agora',
    cartelaTag: 'Garanta sua participação',
    cartelaTitle: 'Compre sua cartela com o curso de Desenvolvimento de Sistemas',
    cartelaText: 'A entrada do evento poderá ser feita com a compra de uma cartela no valor de R$ 10,00 ou com a doação de 1 kg de alimento não perecível. As cartelas permitem a participação no bingo solidário, que terá prêmio principal de R$ 1.000,00. Os alimentos arrecadados serão organizados em cestas básicas para doação à comunidade. Compre sua cartela com o curso de Desenvolvimento de Sistemas.',
    price: 'Cartela: R$ 10,00',
    premio: '<strong>Prêmio principal:</strong> R$ 1.000,00.',
    bingo: '<strong>Bingo:</strong> das 20h às 22h, com participação por meio da cartela solidária.',
    rafaelTitle: 'Desenvolvimento de Sistemas — Rafael',
    rafaelDesc: 'Representante do 1º ano de Desenvolvimento de Sistemas',
    samanthaTitle: 'Desenvolvimento de Sistemas — Samantha',
    samanthaDesc: 'Representante do 2º ano de Desenvolvimento de Sistemas',
    luanTitle: 'Desenvolvimento de Sistemas — Luan',
    luanDesc: 'Representante do 3º ano de Desenvolvimento de Sistemas',
    zapBtn: 'Falar no WhatsApp',
    galeriaSpan: 'Tradição junina',
    galeriaTitle: 'Uma noite de cultura, alegria e solidariedade',
    g1: 'Cordel em cena',
    g2: 'Quadrilhas dos cursos',
    g3: 'Cultura nordestina',
    g4: 'Bingo solidário',
    g5: 'Doação de alimentos',
    g6: 'Tradição junina',
    redesSpan: 'Redes sociais',
    redesTitle: 'Nos acompanhe e preste seu apoio',
    redesP: 'Acompanhe o XIV São João Solidário nas redes sociais da escola e fortaleça essa ação curtindo, comentando, compartilhando e prestando seu apoio no post oficial do evento. Cada interação ajuda a divulgar a festa e ampliar a corrente de solidariedade em favor da comunidade.',
    insta: 'Acompanhar no Instagram',
    apoiar: 'Apoiar post oficial',
    footer1: '<strong>XIV São João Solidário</strong> | EEEP Alfredo Nunes de Melo',
    footer2: 'Cordel, cultura, tradição e solidariedade em uma só festa.'
  },

  'en': {
    navInicio: 'Home',
    navSobre: 'About',
    navInfo: 'Information',
    navProgramacao: 'Schedule',
    navCartela: 'Buy ticket',
    dark: '🌙 Dark mode',
    light: '☀️ Light mode',
    heroTag: 'Cordel, Culture and Tradition',
    heroTitle: '14th Solidarity São João Festival',
    heroText: 'The EEEP Alfredo Nunes de Melo June festival arrives with the theme Cordel, Culture and Tradition, celebrating Northeastern identity, the strength of the school community and solidarity in action.',
    heroBtn1: 'Buy my ticket',
    heroBtn2: 'See schedule',
    aboutSpan: 'About the event',
    aboutTitle: 'A festival made by everyone and for everyone',
    aboutH3: 'What is the Solidarity São João?',
    aboutP1: 'The 14th Solidarity São João of EEEP Alfredo Nunes de Melo is an event that brings together joy, tradition, popular culture and social commitment. With the theme Cordel, Culture and Tradition, the festival values cordel literature, music, quadrilhas, typical food and artistic expressions that are part of Northeastern identity.',
    aboutP2: 'Entry will be made by purchasing a ticket or donating 1 kg of non-perishable food. The collected food will be organized into basic food baskets and donated to families in the community.',
    whyH3: 'Why participate?',
    whyP: 'By buying your ticket or donating 1 kg of non-perishable food, you help strengthen a collective action that moves the school, values regional culture, encourages student leadership and contributes to basic food baskets for the community.',
    infoSpan: 'Main information',
    infoTitle: 'Get your straw hat ready',
    dataH3: 'Date',
    dataP: '06/30/2026',
    localH3: 'Place',
    horarioH3: 'Time',
    horarioP: '6 PM to 10 PM',
    entradaH3: 'Entry',
    entradaP: 'R$ 10 ticket or 1 kg of food',
    progSpan: 'Schedule',
    progTitle: 'Cordel, quadrilha, music and solidarity',
    t1Time: 'Welcome',
    t1H3: 'Audience reception',
    t1P: 'Opening moment to welcome the school community, organize the solidarity entry and start the festival.',
    t2Time: '6 PM to 8 PM',
    t2H3: 'Course quadrilhas',
    t2P: 'June dance presentations by the courses, valuing Cordel, Culture and Tradition through dance, music and popular performance.',
    t3Time: 'Breaks',
    t3H3: 'Musical performances',
    t3P: 'During the breaks, the audience will enjoy musical performances to make the festival even livelier.',
    t4Time: '8 PM to 10 PM',
    t4H3: 'Solidarity bingo',
    t4P: 'Bingo with tickets, prizes and public participation, closing the night with joy and solidarity.',
    urgenciaTag: '🔥 ATTENTION! LIMITED TICKETS',
    urgenciaTitle: 'Guarantee your participation in the 14th Solidarity São João',
    urgenciaP1: 'The São João festival of EEEP Alfredo Nunes de Melo is coming, and tickets are selling fast!',
    urgenciaP2: 'Guarantee your chance to join the prize draws, support the event and enjoy an unforgettable night of culture, tradition and celebration.',
    urgenciaAlerta: '⏳ When tickets run out, no new units will be available.',
    urgenciaP3: 'Do not leave it for later — buying early helps you participate calmly and avoid missing out! 🎟️✨',
    urgenciaBtn: 'Buy ticket now',
    cartelaTag: 'Guarantee your participation',
    cartelaTitle: 'Buy your ticket from the Systems Development course',
    cartelaText: 'Entry can be made by purchasing a ticket for R$ 10.00 or donating 1 kg of non-perishable food. Tickets allow participation in the solidarity bingo, with a main prize of R$ 1,000.00. The collected food will be organized into basic food baskets for the community. Buy your ticket from the Systems Development course.',
    price: 'Ticket: R$ 10.00',
    premio: '<strong>Main prize:</strong> R$ 1,000.00.',
    bingo: '<strong>Bingo:</strong> from 8 PM to 10 PM, with participation through the solidarity ticket.',
    rafaelTitle: 'Systems Development — Rafael',
    rafaelDesc: '1st year Systems Development representative',
    samanthaTitle: 'Systems Development — Samantha',
    samanthaDesc: '2nd year Systems Development representative',
    luanTitle: 'Systems Development — Luan',
    luanDesc: '3rd year Systems Development representative',
    zapBtn: 'Message on WhatsApp',
    galeriaSpan: 'June tradition',
    galeriaTitle: 'A night of culture, joy and solidarity',
    g1: 'Cordel on stage',
    g2: 'Course quadrilhas',
    g3: 'Northeastern culture',
    g4: 'Solidarity bingo',
    g5: 'Food donation',
    g6: 'June tradition',
    redesSpan: 'Social media',
    redesTitle: 'Follow us and show your support',
    redesP: 'Follow the 14th Solidarity São João on the school social media and support this action by liking, commenting, sharing and supporting the official event post. Every interaction helps promote the festival and expand the solidarity chain for the community.',
    insta: 'Follow on Instagram',
    apoiar: 'Support official post',
    footer1: '<strong>14th Solidarity São João Festival</strong> | EEEP Alfredo Nunes de Melo',
    footer2: 'Cordel, culture, tradition and solidarity in one festival.'
  },

  'pt-pt': {
    navInicio: 'Início',
    navSobre: 'Sobre',
    navInfo: 'Informações',
    navProgramacao: 'Programa',
    navCartela: 'Comprar cartela',
    dark: '🌙 Modo escuro',
    light: '☀️ Modo claro',
    heroTag: 'Cordel, Cultura e Tradição',
    heroTitle: 'XIV São João Solidário',
    heroText: 'A grande festa junina da EEEP Alfredo Nunes de Melo chega com o tema Cordel, Cultura e Tradição, celebrando a identidade nordestina, a força da comunidade escolar e a solidariedade em forma de ação.',
    heroBtn1: 'Comprar a minha cartela',
    heroBtn2: 'Ver programa',
    aboutSpan: 'Sobre o evento',
    aboutTitle: 'Uma festa feita por todos e para todos',
    aboutH3: 'O que é o São João Solidário?',
    aboutP1: 'O XIV São João Solidário da EEEP Alfredo Nunes de Melo é um evento que une alegria, tradição, cultura popular e compromisso social. Com o tema Cordel, Cultura e Tradição, a festa valoriza a literatura de cordel, a música, as quadrilhas, as comidas típicas e as expressões artísticas que fazem parte da identidade nordestina.',
    aboutP2: 'A entrada será feita através da compra de uma cartela ou da doação de 1 kg de alimento não perecível. Os alimentos recolhidos serão organizados em cabazes alimentares e doados a famílias da comunidade.',
    whyH3: 'Porquê participar?',
    whyP: 'Ao comprar a sua cartela ou doar 1 kg de alimento não perecível, ajuda a fortalecer uma ação coletiva que movimenta a escola, valoriza a cultura regional, incentiva o protagonismo estudantil e contribui para a formação de cabazes alimentares destinados à comunidade.',
    infoSpan: 'Informações principais',
    infoTitle: 'Prepare o seu chapéu de palha',
    dataH3: 'Data',
    dataP: '30/06/2026',
    localH3: 'Local',
    horarioH3: 'Horário',
    horarioP: '18h às 22h',
    entradaH3: 'Entrada',
    entradaP: 'Cartela R$ 10,00 ou 1 kg de alimento',
    progSpan: 'Programa',
    progTitle: 'Cordel, quadrilha, música e solidariedade',
    t1Time: 'Acolhimento',
    t1H3: 'Receção do público',
    t1P: 'Momento inicial de acolhimento da comunidade escolar, organização da entrada solidária e abertura da festa.',
    t2Time: '18h às 20h',
    t2H3: 'Quadrilhas dos cursos',
    t2P: 'Apresentações juninas dos cursos, valorizando o tema Cordel, Cultura e Tradição através da dança, da música e da encenação popular.',
    t3Time: 'Intervalos',
    t3H3: 'Apresentações musicais',
    t3P: 'Nos intervalos do programa, o público poderá acompanhar apresentações musicais para animar ainda mais o arraial.',
    t4Time: '20h às 22h',
    t4H3: 'Bingo solidário',
    t4P: 'Realização do bingo com as cartelas, sorteios e participação do público, encerrando a noite com alegria e solidariedade.',
    urgenciaTag: '🔥 ATENÇÃO! CARTELAS LIMITADAS',
    urgenciaTitle: 'Garanta a sua participação no XIV São João Solidário',
    urgenciaP1: 'O XIV São João da EEEP Alfredo Nunes de Melo está a chegar, e as cartelas estão a acabar rapidamente!',
    urgenciaP2: 'Garanta agora a sua oportunidade de participar nos sorteios, apoiar o evento e viver uma noite inesquecível de cultura, tradição e muita animação.',
    urgenciaAlerta: '⏳ Quando as cartelas acabarem, não haverá novas unidades disponíveis.',
    urgenciaP3: 'Não deixe para depois — quem compra antes participa com mais tranquilidade e evita ficar de fora! 🎟️✨',
    urgenciaBtn: 'Comprar cartela agora',
    cartelaTag: 'Garanta a sua participação',
    cartelaTitle: 'Compre a sua cartela com o curso de Desenvolvimento de Sistemas',
    cartelaText: 'A entrada no evento poderá ser feita com a compra de uma cartela no valor de R$ 10,00 ou com a doação de 1 kg de alimento não perecível. As cartelas permitem a participação no bingo solidário, que terá prémio principal de R$ 1.000,00. Os alimentos recolhidos serão organizados em cabazes alimentares para doação à comunidade. Compre a sua cartela com o curso de Desenvolvimento de Sistemas.',
    price: 'Cartela: R$ 10,00',
    premio: '<strong>Prémio principal:</strong> R$ 1.000,00.',
    bingo: '<strong>Bingo:</strong> das 20h às 22h, com participação através da cartela solidária.',
    rafaelTitle: 'Desenvolvimento de Sistemas — Rafael',
    rafaelDesc: 'Representante do 1.º ano de Desenvolvimento de Sistemas',
    samanthaTitle: 'Desenvolvimento de Sistemas — Samantha',
    samanthaDesc: 'Representante do 2.º ano de Desenvolvimento de Sistemas',
    luanTitle: 'Desenvolvimento de Sistemas — Luan',
    luanDesc: 'Representante do 3.º ano de Desenvolvimento de Sistemas',
    zapBtn: 'Falar no WhatsApp',
    galeriaSpan: 'Tradição junina',
    galeriaTitle: 'Uma noite de cultura, alegria e solidariedade',
    g1: 'Cordel em cena',
    g2: 'Quadrilhas dos cursos',
    g3: 'Cultura nordestina',
    g4: 'Bingo solidário',
    g5: 'Doação de alimentos',
    g6: 'Tradição junina',
    redesSpan: 'Redes sociais',
    redesTitle: 'Acompanhe-nos e preste o seu apoio',
    redesP: 'Acompanhe o XIV São João Solidário nas redes sociais da escola e fortaleça esta ação ao gostar, comentar, partilhar e prestar o seu apoio na publicação oficial do evento. Cada interação ajuda a divulgar a festa e a ampliar a corrente de solidariedade em favor da comunidade.',
    insta: 'Acompanhar no Instagram',
    apoiar: 'Apoiar publicação oficial',
    footer1: '<strong>XIV São João Solidário</strong> | EEEP Alfredo Nunes de Melo',
    footer2: 'Cordel, cultura, tradição e solidariedade numa só festa.'
  },

  'es': {
    navInicio: 'Inicio',
    navSobre: 'Sobre el evento',
    navInfo: 'Información',
    navProgramacao: 'Programación',
    navCartela: 'Comprar cartón',
    dark: '🌙 Modo oscuro',
    light: '☀️ Modo claro',
    heroTag: 'Cordel, Cultura y Tradición',
    heroTitle: 'XIV São João Solidario',
    heroText: 'La gran fiesta junina de la EEEP Alfredo Nunes de Melo llega con el tema Cordel, Cultura y Tradición, celebrando la identidad nordestina, la fuerza de la comunidad escolar y la solidaridad en acción.',
    heroBtn1: 'Comprar mi cartón',
    heroBtn2: 'Ver programación',
    aboutSpan: 'Sobre el evento',
    aboutTitle: 'Una fiesta hecha por todos y para todos',
    aboutH3: '¿Qué es el São João Solidario?',
    aboutP1: 'El XIV São João Solidario de la EEEP Alfredo Nunes de Melo es un evento que une alegría, tradición, cultura popular y compromiso social. Con el tema Cordel, Cultura y Tradición, la fiesta valora la literatura de cordel, la música, las cuadrillas, las comidas típicas y las expresiones artísticas de la identidad nordestina.',
    aboutP2: 'La entrada será mediante la compra de un cartón o la donación de 1 kg de alimento no perecedero. Los alimentos recaudados serán organizados en canastas básicas y donados a familias de la comunidad.',
    whyH3: '¿Por qué participar?',
    whyP: 'Al comprar tu cartón o donar 1 kg de alimento no perecedero, ayudas a fortalecer una acción colectiva que mueve la escuela, valora la cultura regional, incentiva el protagonismo estudiantil y contribuye a formar canastas básicas para la comunidad.',
    infoSpan: 'Información principal',
    infoTitle: 'Prepara tu sombrero de paja',
    dataH3: 'Fecha',
    dataP: '30/06/2026',
    localH3: 'Lugar',
    horarioH3: 'Horario',
    horarioP: '18h a 22h',
    entradaH3: 'Entrada',
    entradaP: 'Cartón R$ 10,00 o 1 kg de alimento',
    progSpan: 'Programación',
    progTitle: 'Cordel, cuadrilla, música y solidaridad',
    t1Time: 'Bienvenida',
    t1H3: 'Recepción del público',
    t1P: 'Momento inicial de bienvenida a la comunidad escolar, organización de la entrada solidaria y apertura de la fiesta.',
    t2Time: '18h a 20h',
    t2H3: 'Cuadrillas de los cursos',
    t2P: 'Presentaciones juninas de los cursos, valorando Cordel, Cultura y Tradición a través de la danza, la música y la actuación popular.',
    t3Time: 'Intervalos',
    t3H3: 'Presentaciones musicales',
    t3P: 'Durante los intervalos, el público podrá disfrutar de presentaciones musicales para animar aún más la fiesta.',
    t4Time: '20h a 22h',
    t4H3: 'Bingo solidario',
    t4P: 'Realización del bingo con los cartones, sorteos y participación del público, cerrando la noche con alegría y solidaridad.',
    urgenciaTag: '🔥 ¡ATENCIÓN! CARTONES LIMITADOS',
    urgenciaTitle: 'Garantiza ahora tu participación en el XIV São João Solidario',
    urgenciaP1: 'El XIV São João de la EEEP Alfredo Nunes de Melo se acerca, ¡y los cartones se están agotando rápido!',
    urgenciaP2: 'Garantiza ahora tu oportunidad de participar en los sorteos, apoyar nuestro evento y vivir una noche inolvidable de cultura, tradición y mucha animación.',
    urgenciaAlerta: '⏳ Cuando los cartones se agoten, no habrá nuevas unidades disponibles.',
    urgenciaP3: 'No lo dejes para después — quien compra antes participa con más tranquilidad y evita quedarse fuera. 🎟️✨',
    urgenciaBtn: 'Comprar cartón ahora',
    cartelaTag: 'Garantiza tu participación',
    cartelaTitle: 'Compra tu cartón con el curso de Desarrollo de Sistemas',
    cartelaText: 'La entrada al evento podrá realizarse con la compra de un cartón por R$ 10,00 o con la donación de 1 kg de alimento no perecedero. Los cartones permiten participar en el bingo solidario, que tendrá premio principal de R$ 1.000,00. Los alimentos recaudados serán organizados en canastas básicas para la comunidad. Compra tu cartón con el curso de Desarrollo de Sistemas.',
    price: 'Cartón: R$ 10,00',
    premio: '<strong>Premio principal:</strong> R$ 1.000,00.',
    bingo: '<strong>Bingo:</strong> de 20h a 22h, con participación mediante el cartón solidario.',
    rafaelTitle: 'Desarrollo de Sistemas — Rafael',
    rafaelDesc: 'Representante del 1.º año de Desarrollo de Sistemas',
    samanthaTitle: 'Desarrollo de Sistemas — Samantha',
    samanthaDesc: 'Representante del 2.º año de Desarrollo de Sistemas',
    luanTitle: 'Desarrollo de Sistemas — Luan',
    luanDesc: 'Representante del 3.º año de Desarrollo de Sistemas',
    zapBtn: 'Hablar por WhatsApp',
    galeriaSpan: 'Tradición junina',
    galeriaTitle: 'Una noche de cultura, alegría y solidaridad',
    g1: 'Cordel en escena',
    g2: 'Cuadrillas de los cursos',
    g3: 'Cultura nordestina',
    g4: 'Bingo solidario',
    g5: 'Donación de alimentos',
    g6: 'Tradición junina',
    redesSpan: 'Redes sociales',
    redesTitle: 'Síguenos y brinda tu apoyo',
    redesP: 'Acompaña el XIV São João Solidario en las redes sociales de la escuela y fortalece esta acción dando me gusta, comentando, compartiendo y apoyando la publicación oficial del evento. Cada interacción ayuda a divulgar la fiesta y ampliar la cadena de solidaridad para la comunidad.',
    insta: 'Seguir en Instagram',
    apoiar: 'Apoyar publicación oficial',
    footer1: '<strong>XIV São João Solidario</strong> | EEEP Alfredo Nunes de Melo',
    footer2: 'Cordel, cultura, tradición y solidaridad en una sola fiesta.'
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations['pt-br'];
  currentLanguage = translations[lang] ? lang : 'pt-br';

  document.documentElement.lang = currentLanguage;
  localStorage.setItem('language', currentLanguage);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key]) el.innerHTML = t[key];
  });

  updateThemeButton();
  updateSelectValue();

  document.title = DEFAULT_TITLE;
}

function updateSelectValue() {
  const select = document.getElementById('language');
  if (select) select.value = currentLanguage;
}

function updateThemeButton() {
  const button = document.getElementById('themeButton');

  if (!button) return;

  button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  updateThemeButton();
}

function scrollToTop(event) {
  if (event) event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mainMenu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');

    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupSmartHeader() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;
  let ticking = false;

  function handleNavbar() {
    if (window.innerWidth <= 1120) {
      navbar.classList.remove('nav-hidden');
      lastScroll = window.scrollY;
      return;
    }

    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll <= 20) {
      navbar.classList.remove('nav-hidden');
    } else if (currentScroll > lastScroll) {
      navbar.classList.add('nav-hidden');
    } else {
      navbar.classList.remove('nav-hidden');
    }

    lastScroll = Math.max(currentScroll, 0);
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleNavbar();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  document.addEventListener('mousemove', (event) => {
    if (window.innerWidth > 1120 && event.clientY <= 24) {
      navbar.classList.remove('nav-hidden');
    }
  });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');

  setupMobileMenu();
  setupSmartHeader();
  setupRevealAnimations();

  const languageSelect = document.getElementById('language');
  if (languageSelect) {
    languageSelect.addEventListener('change', (event) => setLanguage(event.target.value));
  }

  document.querySelector('.logo-area')?.addEventListener('click', scrollToTop);
  document.getElementById('themeButton')?.addEventListener('click', toggleDarkMode);

  setLanguage(currentLanguage);
});
