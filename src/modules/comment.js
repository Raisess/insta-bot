module.exports = async (page, comment) => {
  const navigationPromise = page.waitForNavigation();

  for (let i = 0; i < 30; i++) {
    console.log(i);
    // clicar no campo de comentario
    await page.waitForSelector('span[class="_15y0l"]');
    await page.click('span[class="_15y0l"]');

    // escrever comentario
    console.log('escrevendo...');
    await page.keyboard.type(comment);

    // clicar em publicar
    await page.waitForSelector('button[class="sqdOP yWX7d    y3zKF     "]');
    await page.click('button[class="sqdOP yWX7d    y3zKF     "]');

    await navigationPromise;

    await page.reload({
      waitUntil: ["networkidle0", "domcontentloaded"]
    });
  }
}