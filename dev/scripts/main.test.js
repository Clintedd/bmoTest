const puppeteer = require('puppeteer');

test('should click around', async (done) => {
  const browser = await puppeteer.launch({
    headless: false, 
    slowMo: 80,
    args: ['--window-size=1920, 1080']
  })
  const page = await browser.newPage();
  await page.goto(
    'file:///Users/Clint/Documents/HackerYou/bmoTest/index.html'
  );
  await page.click('#mySearch');
  await page.type('#mySearch', 'toronto');
  await page.click('#mySubmit');
  done();
})