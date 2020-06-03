module.exports = async (page, draw_url) => {
  const navigationPromise = page.waitForNavigation();

  await navigationPromise;

  // ir para url do sorteio
  await page.goto(draw_url);

  await navigationPromise;

  // clicar em não salvar info de login 
  // await page.waitForSelector('button[class="sqdOP yWX7d    y3zKF   "]');
  // await page.click('button[class="sqdOP yWX7d    y3zKF   "]');
}