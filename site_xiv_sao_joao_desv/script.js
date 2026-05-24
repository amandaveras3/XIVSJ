const DEFAULT_TITLE = document.title;
let currentLanguage = localStorage.getItem('language') || 'pt-br';

const baseTranslations = {
  navInicio: 'Início',
  navSobre: 'Sobre',
  navInfo: 'Informações',
  navEnredo: 'Enredo',
  navDestaques: 'Destaques',
  navProgramacao: 'Programação',
  navVideo: 'Vídeo',
  navPatrocinador: 'Patrocínio',
  navCartela: 'Cartela',
  navRedes: 'Redes',

  heroTag: 'Cordel, Cultura e Tradição',
  heroTitle: 'XIV São João Solidário',
  heroText: 'A grande festa junina da EEEP Alfredo Nunes de Melo chega com o tema Cordel, Cultura e Tradição, celebrando a identidade nordestina, a força da comunidade escolar e a solidariedade em forma de ação.',
  heroBtn1: 'Comprar minha cartela',
  heroBtn2: 'Ver programação',

  aboutSpan: 'Sobre o evento',
  aboutTitle: 'Uma festa feita por todos e para todos',
  aboutH3: 'O que é o São João Solidário?',
  aboutP1: 'O XIV São João Solidário da EEEP Alfredo Nunes de Melo é um evento que une alegria, tradição, cultura popular e compromisso social.',
  aboutP2: 'A entrada será feita por meio da compra de uma cartela ou da doação de 1 kg de alimento não perecível.',
  whyH3: 'Por que participar?',
  whyP: 'Ao comprar sua cartela ou doar alimento, você fortalece a cultura regional, o protagonismo estudantil e a solidariedade.',

  infoSpan: 'Informações principais',
  infoTitle: 'Prepare seu chapéu de palha',
  dataH3: 'Data',
  dataP: '30/06/2026',
  localH3: 'Local',
  horarioH3: 'Horário',
  horarioP: '18h às 22h',
  entradaH3: 'Entrada',
  entradaP: 'Cartela R$ 10,00 ou 1 kg de alimento',

  countdownSpan: 'Contagem regressiva',
  countdownTitle: 'Falta pouco para o nosso São João Solidário',
  countdownDays: 'Dias',
  countdownHours: 'Horas',
  countdownMinutes: 'Minutos',
  countdownSeconds: 'Segundos',

  enredoTag: '✨ Atualizações em breve',
  enredoTitle: 'Vem enredo por aí...',
  enredoP1: 'O XIV São João Solidário ainda guarda surpresas que serão anunciadas nos próximos dias.',
  enredoP2: 'Os antigos dizem que uma promessa feita diante da fogueira jamais poderá ser quebrada.',
  enredoP3: 'Haverá quem atravesse diferentes reinos, encontre figuras misteriosas e transforme o impossível em espetáculo.',
  enredoBox: '“No meio do caminho da festa, entre a fogueira e o cordel, haverá quem desça às sombras para encontrar a luz.”',
  enredoFinal: 'A noite é nossa, do jeito que o pecado gosta.',

  destaquesSpan: 'Em breve',
  destaquesTitle: 'Os personagens que brilham no nosso São João',
  destaqueReisTitle: 'Reis da Noite',
  destaqueReisText: 'Representando a tradição, a elegância e o brilho do nosso arraiá.',
  destaqueNoivosTitle: 'Noivos',
  destaqueNoivosText: 'O amor junino que conduz a festa entre promessa, dança e emoção.',
  destaqueMarcadorTitle: 'Marcador',
  destaqueMarcadorText: 'A voz que guia a quadrilha e dá vida ao espetáculo no terreiro.',

  progSpan: 'Programação',
  progTitle: 'Cordel, quadrilha, música e solidariedade',
  t1Time: 'Acolhida',
  t1H3: 'Recepção do público',
  t1P: 'Momento inicial de acolhimento da comunidade escolar.',
  t2Time: '18h às 20h',
  t2H3: 'Quadrilhas dos cursos',
  t2P: 'Apresentações juninas dos cursos.',
  t3Time: 'Intervalos',
  t3H3: 'Apresentações musicais',
  t3P: 'Apresentações musicais nos intervalos da programação.',
  t4Time: '20h às 22h',
  t4H3: 'Bingo solidário',
  t4P: 'Realização do bingo com as cartelas e participação do público.',

  urgenciaTag: '🔥 ATENÇÃO! CARTELAS LIMITADAS',
  urgenciaTitle: 'Garanta agora sua participação no XIV São João Solidário',
  urgenciaP1: 'As cartelas estão acabando rápido!',
  urgenciaP2: 'Garanta sua chance de participar dos sorteios e apoiar nosso evento.',
  urgenciaAlerta: '⏳ Quando as cartelas acabarem, não haverá novas unidades disponíveis.',
  urgenciaP3: 'Não deixe para depois!',
  urgenciaBtn: 'Comprar cartela agora',

  galeriaSpan: 'Tradição junina',
  galeriaTitle: 'Uma noite de cultura, alegria e solidariedade',
  g1: 'Cordel em cena',
  g2: 'Quadrilhas dos cursos',
  g3: 'Cultura nordestina',
  g4: 'Bingo solidário',
  g5: 'Doação de alimentos',
  g6: 'Tradição junina',

  videoSpan: 'Nos apoie nas redes',
  videoTitle: 'Assista ao nosso vídeo oficial no Instagram',
  videoTag: '🎬 Vídeo oficial',
  videoH3: 'Cada curtida fortalece o nosso São João',
  videoP1: 'O XIV São João Solidário é construído por alunos, professores e toda a comunidade escolar.',
  videoP2: 'Assista, curta, comente e compartilhe para nos ajudar a divulgar essa grande noite.',
  videoBtn1: 'Assistir no Instagram',
  videoBtn2: 'Compartilhar vídeo',

  patrocinadorTag: '✨ Seja nosso patrocinador',
  patrocinadorTitle: 'Apoie o XIV São João Solidário',
  patrocinadorP1: 'O evento é construído coletivamente pela comunidade escolar.',
  patrocinadorP2: 'Ao se tornar patrocinador, sua marca apoia cultura, educação e solidariedade.',
  beneficio1: 'Divulgação durante o evento',
  beneficio2: 'Exposição nas redes sociais',
  beneficio3: 'Apoio à cultura nordestina',
  patrocinadorBtn: 'Falar sobre patrocínio',

  cartelaTag: 'Garanta sua participação',
  cartelaTitle: 'Compre sua cartela com o curso de Desenvolvimento de Sistemas',
  cartelaText: 'A cartela custa R$ 10,00 e permite participar do bingo solidário.',
  price: 'Cartela: R$ 10,00',
  premio: '<strong>Prêmio principal:</strong> R$ 1.000,00.',
  bingo: '<strong>Bingo:</strong> das 20h às 22h.',
  rafaelTitle: 'Desenvolvimento de Sistemas — Rafael',
  rafaelDesc: 'Representante do 1º ano de Desenvolvimento de Sistemas',
  samanthaTitle: 'Desenvolvimento de Sistemas — Samantha',
  samanthaDesc: 'Representante do 2º ano de Desenvolvimento de Sistemas',
  luanTitle: 'Desenvolvimento de Sistemas — Luan',
  luanDesc: 'Representante do 3º ano de Desenvolvimento de Sistemas',
  zapBtn: 'Falar no WhatsApp',

  redesSpan: 'Redes sociais',
  redesTitle: 'Nos acompanhe e preste seu apoio',
  redesP: 'Acompanhe o evento nas redes sociais da escola, curta, comente e compartilhe.',
  insta: 'Acompanhar no Instagram',
  apoiar: 'Apoiar post oficial',

  footer1: '<strong>XIV São João Solidário</strong> | EEEP Alfredo Nunes de Melo',
  footer2: 'Cordel, cultura, tradição e protagonismo estudantil em festa.',
  footer3: "Desenvolvido por Amanda Félix Veras - Todos os direitos reservados. © 2026"
};

const translations = {
  'pt-br': baseTranslations,

  'en': {
  ...baseTranslations,

  navInicio: 'Home',
  navSobre: 'About',
  navInfo: 'Information',
  navEnredo: 'Story',
  navDestaques: 'Highlights',
  navProgramacao: 'Schedule',
  navVideo: 'Video',
  navPatrocinador: 'Sponsorship',
  navCartela: 'Ticket',
  navRedes: 'Socials',

  heroTag: 'Cordel, Culture and Tradition',
  heroTitle: '14th Solidarity São João',
  heroText: 'The June festival of EEEP Alfredo Nunes de Melo arrives with the theme Cordel, Culture and Tradition, celebrating Northeastern identity, the strength of the school community, and solidarity in action.',
  heroBtn1: 'Buy my ticket',
  heroBtn2: 'See schedule',

  aboutSpan: 'About the event',
  aboutTitle: 'A celebration made by everyone and for everyone',
  aboutH3: 'What is the Solidarity São João?',
  aboutP1: 'The 14th Solidarity São João of EEEP Alfredo Nunes de Melo is an event that brings together joy, tradition, popular culture, and social commitment. With the theme Cordel, Culture and Tradition, the celebration values cordel literature, music, quadrilhas, traditional foods, and artistic expressions that are part of Northeastern identity.',
  aboutP2: 'Entry will be through the purchase of a ticket or the donation of 1 kg of non-perishable food. The collected food will be organized into basic food baskets and donated to families in the community.',
  whyH3: 'Why participate?',
  whyP: 'By buying your ticket or donating 1 kg of non-perishable food, you help strengthen a collective action that moves the school, values regional culture, encourages student protagonism, and contributes to basic food baskets for the community.',

  infoSpan: 'Main information',
  infoTitle: 'Get your straw hat ready',
  dataH3: 'Date',
  dataP: '06/30/2026',
  localH3: 'Place',
  localP: 'EEEP Alfredo Nunes de Melo',
  horarioH3: 'Time',
  horarioP: '6 PM to 10 PM',
  entradaH3: 'Entry',
  entradaP: 'R$ 10 ticket or 1 kg of food',

  countdownSpan: 'Countdown',
  countdownTitle: 'Our Solidarity São João is almost here',
  countdownDays: 'Days',
  countdownHours: 'Hours',
  countdownMinutes: 'Minutes',
  countdownSeconds: 'Seconds',

  enredoTag: '✨ Updates coming soon',
  enredoTitle: 'A new story is coming...',
  enredoP1: 'The 14th Solidarity São João still holds surprises that will be announced in the coming days.',
  enredoP2: 'The elders say that a promise made before the bonfire can never be broken. And when the accordion starts playing, destinies will be challenged, paths of no return will be crossed, and hearts will get lost between love, sin, and tradition.',
  enredoP3: 'Some will cross different realms, meet mysterious figures, and turn the impossible into a spectacle.',
  enredoBox: '“In the middle of the festival path, between the bonfire and the cordel, someone will descend into the shadows to find the light.”',
  enredoFinal: 'The night is ours, just the way sin likes it.',

  destaquesSpan: 'Coming soon',
  destaquesTitle: 'The characters who shine in our São João',
  destaqueReisTitle: 'Kings of the Night',
  destaqueReisText: 'Representing the tradition, elegance, and brightness of our festival.',
  destaqueNoivosTitle: 'Bride and Groom',
  destaqueNoivosText: 'The June love that leads the celebration through promise, dance, and emotion.',
  destaqueMarcadorTitle: 'Caller',
  destaqueMarcadorText: 'The voice that guides the quadrilha and brings the show to life in the festival yard.',

  progSpan: 'Schedule',
  progTitle: 'Cordel, quadrilha, music, and solidarity',
  t1Time: 'Welcome',
  t1H3: 'Audience reception',
  t1P: 'Opening moment to welcome the school community, organize the solidarity entry, and begin the celebration.',
  t2Time: '6 PM to 8 PM',
  t2H3: 'Course quadrilhas',
  t2P: 'June dance presentations by the courses, valuing Cordel, Culture and Tradition through dance, music, and popular performance.',
  t3Time: 'Breaks',
  t3H3: 'Musical performances',
  t3P: 'During the breaks, the audience will enjoy musical performances to make the festival even livelier.',
  t4Time: '8 PM to 10 PM',
  t4H3: 'Solidarity bingo',
  t4P: 'Bingo with tickets, prizes, and public participation, closing the night with joy and solidarity.',

  urgenciaTag: '🔥 ATTENTION! LIMITED TICKETS',
  urgenciaTitle: 'Guarantee your participation in the 14th Solidarity São João now',
  urgenciaP1: 'The São João festival of EEEP Alfredo Nunes de Melo is coming, and tickets are selling fast!',
  urgenciaP2: 'Guarantee your chance to join the prize draws, support the event, and enjoy an unforgettable night of culture, tradition, and celebration.',
  urgenciaAlerta: '⏳ When tickets run out, no new units will be available.',
  urgenciaP3: 'Do not leave it for later. Buying early helps you participate calmly and avoid missing out! 🎟️✨',
  urgenciaBtn: 'Buy ticket now',

  galeriaSpan: 'June tradition',
  galeriaTitle: 'A night of culture, joy, and solidarity',
  g1: 'Cordel on stage',
  g2: 'Course quadrilhas',
  g3: 'Northeastern culture',
  g4: 'Solidarity bingo',
  g5: 'Food donation',
  g6: 'June tradition',

  videoSpan: 'Support us online',
  videoTitle: 'Watch our official 14th Solidarity São João video on Instagram',
  videoTag: '🎬 Official video',
  videoH3: 'Every like strengthens our São João',
  videoP1: 'The 14th Solidarity São João of EEEP Alfredo Nunes de Melo is built collectively by students, teachers, and the entire school community.',
  videoP2: 'Watch our official video, like, comment, and share to help us spread this great night of cordel, culture, tradition, and solidarity.',
  videoBtn1: 'Watch on Instagram',
  videoBtn2: 'Share video',

  patrocinadorTag: '✨ Become our sponsor',
  patrocinadorTitle: 'Support the 14th Solidarity São João and strengthen culture, education, and solidarity',
  patrocinadorP1: 'The 14th Solidarity São João of EEEP Alfredo Nunes de Melo is built collectively by students, teachers, and the entire school community.',
  patrocinadorP2: 'By becoming a sponsor, your brand supports cultural, social, and student actions that directly impact the community.',
  beneficio1: 'Promotion during the event',
  beneficio2: 'Exposure on social media',
  beneficio3: 'Support for Northeastern culture',
  patrocinadorBtn: 'Talk about sponsorship',

  cartelaTag: 'Guarantee your participation',
  cartelaTitle: 'Buy your ticket from the Systems Development course',
  cartelaText: 'Entry to the event can be made by purchasing a ticket for R$ 10.00 or donating 1 kg of non-perishable food. Tickets allow participation in the solidarity bingo, with a main prize of R$ 1,000.00. The collected food will be organized into basic food baskets for donation to the community. Buy your ticket from the Systems Development course.',
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

  redesSpan: 'Social media',
  redesTitle: 'Follow us and show your support',
  redesP: 'Follow the 14th Solidarity São João on the school social media and strengthen this action by liking, commenting, sharing, and supporting the official event post. Every interaction helps promote the festival and expand the solidarity chain for the community.',
  insta: 'Follow on Instagram',
  apoiar: 'Support official post',

  footer1: '<strong>14th Solidarity São João</strong> | EEEP Alfredo Nunes de Melo',
  footer2: 'Cordel, culture, tradition, and student protagonism in celebration.',
  footer3: "Developed by Amanda Félix Veras - All rights reserved. © 2026"
},

'pt-pt': {
  ...baseTranslations,

  navInicio: 'Início',
  navSobre: 'Sobre',
  navInfo: 'Informações',
  navEnredo: 'Enredo',
  navDestaques: 'Destaques',
  navProgramacao: 'Programação',
  navVideo: 'Vídeo',
  navPatrocinador: 'Patrocínio',
  navCartela: 'Cartela',
  navRedes: 'Redes',

  heroTag: 'Cordel, Cultura e Tradição',
  heroTitle: 'XIV São João Solidário',
  heroText: 'A grande festa junina da EEEP Alfredo Nunes de Melo chega com o tema Cordel, Cultura e Tradição, celebrando a identidade nordestina, a força da comunidade escolar e a solidariedade em forma de ação.',
  heroBtn1: 'Comprar a minha cartela',
  heroBtn2: 'Ver programação',

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
  localP: 'EEEP Alfredo Nunes de Melo',
  horarioH3: 'Horário',
  horarioP: '18h às 22h',
  entradaH3: 'Entrada',
  entradaP: 'Cartela R$ 10,00 ou 1 kg de alimento',

  countdownSpan: 'Contagem decrescente',
  countdownTitle: 'Falta pouco para o nosso São João Solidário',
  countdownDays: 'Dias',
  countdownHours: 'Horas',
  countdownMinutes: 'Minutos',
  countdownSeconds: 'Segundos',

  enredoTag: '✨ Atualizações em breve',
  enredoTitle: 'Vem enredo por aí...',
  enredoP1: 'O XIV São João Solidário ainda guarda surpresas que serão anunciadas nos próximos dias.',
  enredoP2: 'Os antigos dizem que uma promessa feita diante da fogueira jamais poderá ser quebrada. E, quando a sanfona tocar, destinos serão desafiados, caminhos sem volta serão cruzados e corações irão perder-se entre amor, pecado e tradição.',
  enredoP3: 'Haverá quem atravesse diferentes reinos, encontre figuras misteriosas e transforme o impossível em espetáculo.',
  enredoBox: '“No meio do caminho da festa, entre a fogueira e o cordel, haverá quem desça às sombras para encontrar a luz.”',
  enredoFinal: 'A noite é nossa, do jeito que o pecado gosta.',

  destaquesSpan: 'Em breve',
  destaquesTitle: 'Os personagens que brilham no nosso São João',
  destaqueReisTitle: 'Reis da Noite',
  destaqueReisText: 'Representando a tradição, a elegância e o brilho do nosso arraial.',
  destaqueNoivosTitle: 'Noivos',
  destaqueNoivosText: 'O amor junino que conduz a festa entre promessa, dança e emoção.',
  destaqueMarcadorTitle: 'Marcador',
  destaqueMarcadorText: 'A voz que guia a quadrilha e dá vida ao espetáculo no terreiro.',

  progSpan: 'Programação',
  progTitle: 'Cordel, quadrilha, música e solidariedade',
  t1Time: 'Acolhimento',
  t1H3: 'Receção do público',
  t1P: 'Momento inicial de acolhimento da comunidade escolar, organização da entrada solidária e abertura da festa.',
  t2Time: '18h às 20h',
  t2H3: 'Quadrilhas dos cursos',
  t2P: 'Apresentações juninas dos cursos, valorizando o tema Cordel, Cultura e Tradição através da dança, da música e da encenação popular.',
  t3Time: 'Intervalos',
  t3H3: 'Apresentações musicais',
  t3P: 'Nos intervalos da programação, o público poderá acompanhar apresentações musicais para animar ainda mais o arraial.',
  t4Time: '20h às 22h',
  t4H3: 'Bingo solidário',
  t4P: 'Realização do bingo com as cartelas, sorteios e participação do público, encerrando a noite com alegria e solidariedade.',

  urgenciaTag: '🔥 ATENÇÃO! CARTELAS LIMITADAS',
  urgenciaTitle: 'Garanta já a sua participação no XIV São João Solidário',
  urgenciaP1: 'O XIV São João da EEEP Alfredo Nunes de Melo está a chegar, e as cartelas estão a acabar rapidamente!',
  urgenciaP2: 'Garanta agora a sua oportunidade de participar nos sorteios, apoiar o evento e viver uma noite inesquecível de cultura, tradição e muita animação.',
  urgenciaAlerta: '⏳ Quando as cartelas acabarem, não haverá novas unidades disponíveis.',
  urgenciaP3: 'Não deixe para depois, quem compra antes participa com mais tranquilidade e evita ficar de fora! 🎟️✨',
  urgenciaBtn: 'Comprar cartela agora',

  galeriaSpan: 'Tradição junina',
  galeriaTitle: 'Uma noite de cultura, alegria e solidariedade',
  g1: 'Cordel em cena',
  g2: 'Quadrilhas dos cursos',
  g3: 'Cultura nordestina',
  g4: 'Bingo solidário',
  g5: 'Doação de alimentos',
  g6: 'Tradição junina',

  videoSpan: 'Apoie-nos nas redes',
  videoTitle: 'Veja o nosso vídeo oficial do XIV São João Solidário no Instagram',
  videoTag: '🎬 Vídeo oficial',
  videoH3: 'Cada gosto fortalece o nosso São João',
  videoP1: 'O XIV São João Solidário da EEEP Alfredo Nunes de Melo é construído coletivamente por alunos, professores e toda a comunidade escolar.',
  videoP2: 'Veja o nosso vídeo oficial, goste, comente e partilhe para nos ajudar a divulgar esta grande noite de cordel, cultura, tradição e solidariedade.',
  videoBtn1: 'Ver no Instagram',
  videoBtn2: 'Partilhar vídeo',

  patrocinadorTag: '✨ Seja nosso patrocinador',
  patrocinadorTitle: 'Apoie o XIV São João Solidário e fortaleça a cultura, a educação e a solidariedade',
  patrocinadorP1: 'O XIV São João Solidário da EEEP Alfredo Nunes de Melo é construído coletivamente por alunos, professores e toda a comunidade escolar.',
  patrocinadorP2: 'Ao tornar-se patrocinador, a sua marca passa a apoiar ações culturais, sociais e estudantis que impactam diretamente a comunidade.',
  beneficio1: 'Divulgação durante o evento',
  beneficio2: 'Exposição nas redes sociais',
  beneficio3: 'Apoio à cultura nordestina',
  patrocinadorBtn: 'Falar sobre patrocínio',

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

  redesSpan: 'Redes sociais',
  redesTitle: 'Acompanhe-nos e preste o seu apoio',
  redesP: 'Acompanhe o XIV São João Solidário nas redes sociais da escola e fortaleça esta ação ao gostar, comentar, partilhar e prestar o seu apoio na publicação oficial do evento.',
  insta: 'Acompanhar no Instagram',
  apoiar: 'Apoiar publicação oficial',

  footer1: '<strong>XIV São João Solidário</strong> | EEEP Alfredo Nunes de Melo',
  footer2: 'Cordel, cultura, tradição e protagonismo estudantil em festa.',
  footer3: "Desenvolvido por Amanda Félix Veras - Todos os direitos reservados. © 2026"
},

'es': {
  ...baseTranslations,

  navInicio: 'Inicio',
  navSobre: 'Sobre',
  navInfo: 'Información',
  navEnredo: 'Historia',
  navDestaques: 'Destacados',
  navProgramacao: 'Programación',
  navVideo: 'Vídeo',
  navPatrocinador: 'Patrocinio',
  navCartela: 'Cartón',
  navRedes: 'Redes',

  heroTag: 'Cordel, Cultura y Tradición',
  heroTitle: 'XIV São João Solidario',
  heroText: 'La gran fiesta junina de la EEEP Alfredo Nunes de Melo llega con el tema Cordel, Cultura y Tradición, celebrando la identidad nordestina, la fuerza de la comunidad escolar y la solidaridad en acción.',
  heroBtn1: 'Comprar mi cartón',
  heroBtn2: 'Ver programación',

  aboutSpan: 'Sobre el evento',
  aboutTitle: 'Una fiesta hecha por todos y para todos',
  aboutH3: '¿Qué es el São João Solidario?',
  aboutP1: 'El XIV São João Solidario de la EEEP Alfredo Nunes de Melo es un evento que une alegría, tradición, cultura popular y compromiso social. Con el tema Cordel, Cultura y Tradición, la fiesta valora la literatura de cordel, la música, las cuadrillas, las comidas típicas y las expresiones artísticas que forman parte de la identidad nordestina.',
  aboutP2: 'La entrada será mediante la compra de un cartón o la donación de 1 kg de alimento no perecedero. Los alimentos recaudados serán organizados en canastas básicas y donados a familias de la comunidad.',
  whyH3: '¿Por qué participar?',
  whyP: 'Al comprar tu cartón o donar 1 kg de alimento no perecedero, ayudas a fortalecer una acción colectiva que mueve la escuela, valora la cultura regional, incentiva el protagonismo estudiantil y contribuye a formar canastas básicas para la comunidad.',

  infoSpan: 'Información principal',
  infoTitle: 'Prepara tu sombrero de paja',
  dataH3: 'Fecha',
  dataP: '30/06/2026',
  localH3: 'Lugar',
  localP: 'EEEP Alfredo Nunes de Melo',
  horarioH3: 'Horario',
  horarioP: '18h a 22h',
  entradaH3: 'Entrada',
  entradaP: 'Cartón R$ 10,00 o 1 kg de alimento',

  countdownSpan: 'Cuenta regresiva',
  countdownTitle: 'Falta poco para nuestro São João Solidario',
  countdownDays: 'Días',
  countdownHours: 'Horas',
  countdownMinutes: 'Minutos',
  countdownSeconds: 'Segundos',

  enredoTag: '✨ Actualizaciones próximamente',
  enredoTitle: 'Se acerca una nueva historia...',
  enredoP1: 'El XIV São João Solidario aún guarda sorpresas que serán anunciadas en los próximos días.',
  enredoP2: 'Los antiguos dicen que una promesa hecha frente a la hoguera jamás podrá romperse. Y, cuando suene el acordeón, los destinos serán desafiados, caminos sin retorno serán cruzados y los corazones se perderán entre amor, pecado y tradición.',
  enredoP3: 'Habrá quienes atraviesen diferentes reinos, encuentren figuras misteriosas y transformen lo imposible en espectáculo.',
  enredoBox: '“En medio del camino de la fiesta, entre la hoguera y el cordel, habrá quien descienda a las sombras para encontrar la luz.”',
  enredoFinal: 'La noche es nuestra, como le gusta al pecado.',

  destaquesSpan: 'Muy pronto',
  destaquesTitle: 'Los personajes que brillan en nuestro São João',
  destaqueReisTitle: 'Reyes de la Noche',
  destaqueReisText: 'Representando la tradición, la elegancia y el brillo de nuestro arraial.',
  destaqueNoivosTitle: 'Novios',
  destaqueNoivosText: 'El amor junino que conduce la fiesta entre promesa, danza y emoción.',
  destaqueMarcadorTitle: 'Marcador',
  destaqueMarcadorText: 'La voz que guía la cuadrilla y da vida al espectáculo en el patio.',

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
  urgenciaP1: '¡El XIV São João de la EEEP Alfredo Nunes de Melo se acerca y los cartones se están agotando rápidamente!',
  urgenciaP2: 'Garantiza ahora tu oportunidad de participar en los sorteos, apoyar nuestro evento y vivir una noche inolvidable de cultura, tradición y mucha animación.',
  urgenciaAlerta: '⏳ Cuando los cartones se agoten, no habrá nuevas unidades disponibles.',
  urgenciaP3: 'No lo dejes para después. ¡Quien compra antes participa con más tranquilidad y evita quedarse fuera! 🎟️✨',
  urgenciaBtn: 'Comprar cartón ahora',

  galeriaSpan: 'Tradición junina',
  galeriaTitle: 'Una noche de cultura, alegría y solidaridad',
  g1: 'Cordel en escena',
  g2: 'Cuadrillas de los cursos',
  g3: 'Cultura nordestina',
  g4: 'Bingo solidario',
  g5: 'Donación de alimentos',
  g6: 'Tradición junina',

  videoSpan: 'Apóyanos en redes',
  videoTitle: 'Mira nuestro video oficial del XIV São João Solidario en Instagram',
  videoTag: '🎬 Video oficial',
  videoH3: 'Cada me gusta fortalece nuestro São João',
  videoP1: 'El XIV São João Solidario de la EEEP Alfredo Nunes de Melo es construido colectivamente por alumnos, profesores y toda la comunidad escolar.',
  videoP2: 'Mira nuestro video oficial, dale me gusta, comenta y comparte para ayudarnos a divulgar esta gran noche de cordel, cultura, tradición y solidaridad.',
  videoBtn1: 'Ver en Instagram',
  videoBtn2: 'Compartir vídeo',

  patrocinadorTag: '✨ Sé nuestro patrocinador',
  patrocinadorTitle: 'Apoya el XIV São João Solidario y fortalece la cultura, la educación y la solidaridad',
  patrocinadorP1: 'El XIV São João Solidario de la EEEP Alfredo Nunes de Melo es construido colectivamente por alumnos, profesores y toda la comunidad escolar.',
  patrocinadorP2: 'Al convertirte en patrocinador, tu marca pasa a apoyar acciones culturales, sociales y estudiantiles que impactan directamente a la comunidad.',
  beneficio1: 'Divulgación durante el evento',
  beneficio2: 'Exposición en redes sociales',
  beneficio3: 'Apoyo a la cultura nordestina',
  patrocinadorBtn: 'Hablar sobre patrocinio',

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

  redesSpan: 'Redes sociales',
  redesTitle: 'Síguenos y brinda tu apoyo',
  redesP: 'Acompaña el XIV São João Solidario en las redes sociales de la escuela y fortalece esta acción dando me gusta, comentando, compartiendo y apoyando la publicación oficial del evento.',
  insta: 'Seguir en Instagram',
  apoiar: 'Apoyar publicación oficial',

  footer1: '<strong>XIV São João Solidario</strong> | EEEP Alfredo Nunes de Melo',
  footer2: 'Cordel, cultura, tradición y protagonismo estudiantil en fiesta.',
  footer3: "Desarrollado por Amanda Félix Veras - Todos los derechos reservados. © 2026"
  }
};

function setLanguage(lang) {
  const fallback = translations['pt-br'];
  const t = translations[lang] || fallback;

  currentLanguage =
    translations[lang]
      ? lang
      : 'pt-br';

  document.documentElement.lang =
    currentLanguage === 'pt-br'
      ? 'pt-BR'
      : currentLanguage;

  localStorage.setItem(
    'language',
    currentLanguage
  );

  document
    .querySelectorAll('[data-i18n]')
    .forEach((el) => {

      const key =
        el.dataset.i18n;

      el.textContent =
        t[key] ||
        fallback[key] ||
        el.textContent;

    });

  document
    .querySelectorAll('[data-i18n-html]')
    .forEach((el) => {

      const key =
        el.dataset.i18nHtml;

      el.innerHTML =
        t[key] ||
        fallback[key] ||
        el.innerHTML;

    });

  const select =
    document.getElementById('language');

  if (select) {
    select.value = currentLanguage;
  }

  document.title = DEFAULT_TITLE;
}

function updateThemeButton() {

  const button =
    document.getElementById('themeButton');

  if (!button) return;

  button.textContent =
    document.body.classList.contains('dark-mode')
      ? '☀️'
      : '🌙';
}

function toggleDarkMode() {

  document.body.classList.toggle(
    'dark-mode'
  );

  localStorage.setItem(
    'theme',

    document.body.classList.contains(
      'dark-mode'
    )
      ? 'dark'
      : 'light'
  );

  updateThemeButton();
}

function setupMobileMenu() {

  const toggle =
    document.getElementById(
      'menuToggle'
    );

  const menu =
    document.getElementById(
      'mainMenu'
    );

  if (!toggle || !menu) return;

  toggle.addEventListener(
    'click',
    () => {

      const isOpen =
        menu.classList.toggle(
          'is-open'
        );

      toggle.classList.toggle(
        'is-open',
        isOpen
      );

      toggle.setAttribute(
        'aria-expanded',
        String(isOpen)
      );

    }
  );

  menu
    .querySelectorAll('a')
    .forEach((link) => {

      link.addEventListener(
        'click',
        () => {

          menu.classList.remove(
            'is-open'
          );

          toggle.classList.remove(
            'is-open'
          );

          toggle.setAttribute(
            'aria-expanded',
            'false'
          );

        }
      );

    });

}

function setupSmartHeader() {

  const navbar =
    document.getElementById('navbar');

  if (!navbar) return;

  let lastScroll =
    window.scrollY;

  let ticking = false;

  function updateNavbar() {

    const currentScroll =
      window.scrollY;

    if (currentScroll <= 20) {

      navbar.classList.remove(
        'nav-hidden'
      );

    }

    else if (
      currentScroll > lastScroll
    ) {

      navbar.classList.add(
        'nav-hidden'
      );

    }

    else {

      navbar.classList.remove(
        'nav-hidden'
      );

    }

    lastScroll =
      currentScroll <= 0
        ? 0
        : currentScroll;

  }

  window.addEventListener(
    'scroll',

    () => {

      if (!ticking) {

        window.requestAnimationFrame(
          () => {

            updateNavbar();

            ticking = false;

          }
        );

        ticking = true;

      }

    },

    { passive: true }

  );

  document.addEventListener(
    'mousemove',

    (event) => {

      if (event.clientY <= 80) {

        navbar.classList.remove(
          'nav-hidden'
        );

      }

    }

  );

}

function setupRevealAnimations() {

  const reveals =
    document.querySelectorAll(
      '.reveal'
    );

  if (!reveals.length) return;

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                'is-visible'
              );

            }

          }
        );

      },

      {
        threshold: 0.12
      }

    );

  reveals.forEach((el) => {

    observer.observe(el);

  });

}

function updateCountdown() {

  const targetDate =
    new Date(
      '2026-06-30T18:00:00-03:00'
    ).getTime();

  const now =
    Date.now();

  const distance =
    targetDate - now;

  const days =
    document.getElementById(
      'days'
    );

  const hours =
    document.getElementById(
      'hours'
    );

  const minutes =
    document.getElementById(
      'minutes'
    );

  const seconds =
    document.getElementById(
      'seconds'
    );

  if (
    !days ||
    !hours ||
    !minutes ||
    !seconds
  ) return;

  if (distance <= 0) {

    days.textContent = '00';
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';

    return;
  }

  const d =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );

  const h =
    Math.floor(
      (
        distance /
        (1000 * 60 * 60)
      ) % 24
    );

  const m =
    Math.floor(
      (
        distance /
        (1000 * 60)
      ) % 60
    );

  const s =
    Math.floor(
      (
        distance / 1000
      ) % 60
    );

  days.textContent =
    String(d).padStart(2, '0');

  hours.textContent =
    String(h).padStart(2, '0');

  minutes.textContent =
    String(m).padStart(2, '0');

  seconds.textContent =
    String(s).padStart(2, '0');

}

document.addEventListener(
  'DOMContentLoaded',

  () => {

    if (
      localStorage.getItem(
        'theme'
      ) === 'dark'
    ) {

      document.body.classList.add(
        'dark-mode'
      );

    }

    setupMobileMenu();

    setupSmartHeader();

    setupRevealAnimations();

    updateCountdown();

    setInterval(
      updateCountdown,
      1000
    );

    document
      .getElementById(
        'language'
      )
      ?.addEventListener(
        'change',

        (event) => {

          setLanguage(
            event.target.value
          );

        }
      );

    document
      .getElementById(
        'themeButton'
      )
      ?.addEventListener(
        'click',
        toggleDarkMode
      );

    setLanguage(
      currentLanguage
    );

    updateThemeButton();

  }
);