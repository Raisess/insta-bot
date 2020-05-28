module.exports = async page => {
  const navigationPromise = page.waitForNavigation();

  // clicar no campo de comentario
  await page.waitForSelector('span[class="_15y0l"]');
  await page.click('span[class="_15y0l"]');

  // escrever comentario
  console.log('escrevendo...');
  await page.keyboard.type('teste');
}