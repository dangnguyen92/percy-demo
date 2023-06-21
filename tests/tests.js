const { chromium } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com.vn/', { waitUntil: 'domcontentloaded' });
  await percySnapshot(page, 'Example Page 1');

  await page.goto('https://www.bing.com/', { waitUntil: 'domcontentloaded' });
  await percySnapshot(page, 'Example Page 2');

  await browser.close();
})();