module.exports = async (page, draw_url) => {
  const navigationPromise = page.waitForNavigation();

  // ir para url do sorteio
  await page.goto(draw_url);

  await navigationPromise;
}