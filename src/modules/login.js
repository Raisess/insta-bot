const {
  login_url
} = require('../uri_s.json');

let yourUser, yourPass;

if (require('../credencials.json')) {
  const {
    user,
    password
  } = require('../credencials.json');

  yourUser = user;
  yourPass = password;
} else {
  const {
    user,
    password
  } = require('../credencials.template.json');

  yourUser = user;
  yourPass = password;
}

module.exports = async page => {
  const navigationPromise = page.waitForNavigation();

  // ir para url de login
  await page.goto(login_url);

  await navigationPromise;

  // clicar no campo de usuario
  await page.waitForSelector('input[name="username"]');
  await page.click('input[name="username"]');

  await navigationPromise;

  // escrever nome de usuario
  await page.type('input[name="username"]', yourUser);

  // clicar no campo de senha
  await page.waitForSelector('input[name="password"]');
  await page.click('input[name="password"]');

  await navigationPromise;

  // escrever a senha
  await page.type('input[name="password"]', yourPass);

  // clicar em "Entrar"
  await page.waitForSelector('button[class="sqdOP  L3NKy   y3zKF     "]');
  await page.click('button[class="sqdOP  L3NKy   y3zKF     "]');

  await navigationPromise;

  // fechar popup de notificação
  await page.waitForSelector('button[class="aOOlW   HoLwm "]');
  await page.click('button[class="aOOlW   HoLwm "]');
}