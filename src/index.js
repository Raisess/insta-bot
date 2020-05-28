const puppeteer = require('puppeteer');
const {
  question
} = require('readline-sync');

// modulo de login
const login = require('./modules/login.js');
// modulo de redirecionamento para sorteio
const goToDraw = require('./modules/goToDraw.js');
// modulo para comentar
const comment = require('./modules/comment');

// url do sorteio
const draw_url = question('> informe a url do sorteio: ');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--window-size=770,720']
  });
  const page = await browser.newPage();

  // fazer o login
  await login(page);
  // ir para pagina do sorteio
  await goToDraw(page, draw_url);
  // começar a comentar
  await comment(page);

  // await browser.close();
})();