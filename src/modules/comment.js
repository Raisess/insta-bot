module.exports = async (page, comment, delay) => {
  const navigationPromise = page.waitForNavigation({ timeout: parseInt(delay) * 60000 });

  console.log('comentario:', 1);

  // clicar no campo de comentario
  await page.waitForSelector('textarea[class="Ypffh"]');
  await page.click('textarea[class="Ypffh"]');

  // escrever comentario
  console.log('escrevendo...');
  await page.keyboard.type(comment);

  // clicar em publicar
  await page.waitForSelector('button[type="submit"]');
  await page.click('button[type="submit"]');

  await navigationPromise;

  console.log('esperando o delay...');

  let i = 2;

  setInterval(async () => {
    console.log('comentario:', i);

    // clicar no campo de comentario
    await page.waitForSelector('textarea[class="Ypffh"]');
    await page.click('textarea[class="Ypffh"]');

    // escrever comentario
    console.log('escrevendo...');
    await page.keyboard.type(comment);

    // clicar em publicar
    await page.waitForSelector('button[type="submit"]');
    await page.click('button[type="submit"]');

    await navigationPromise;

    console.log('esperando o delay...');

    i++;
  }, parseFloat(delay) * 60000);
}
