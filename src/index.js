const puppeteer = require('puppeteer');

// modulo de login
const login = require('./modules/login.js');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--window-size=250,720']
  });
  const page = await browser.newPage();

  // fazer o login
  await login(page);

  // await browser.close();
})();