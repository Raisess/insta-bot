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

  await page.goto(login_url);
}