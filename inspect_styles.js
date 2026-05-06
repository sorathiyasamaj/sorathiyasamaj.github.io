import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000/index-live.html');
  const styles = await page.evaluate(() => {
    const el = document.querySelector('img[alt="ગોકુળિયો રાસ"]');
    if (!el) return "Element not found";
    return {
      classes: Array.from(el.classList),
      width: el.getBoundingClientRect().width,
      height: el.getBoundingClientRect().height,
      parentWidth: el.parentElement.getBoundingClientRect().width
    };
  });
  console.log(JSON.stringify(styles, null, 2));
  await browser.close();
})();
