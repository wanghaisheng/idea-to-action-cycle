import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

async function captureWebpageSlides(url,repositoryName) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  // Set the viewport size to the desired slide dimensions
  const page = await context.newPage({ viewport: { width: 1280, height: 720 } });

  const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 5000));

  const pageLoadPromise = new Promise(async (resolve, reject) => {
    try {
      const response = await Promise.race([
        page.goto(url),
        new Promise((resolve) => context.route('**/*', resolve)),
      ]);

      if (response && response.request().failure()) {
        throw new Error('Request failed');
      }

      resolve();
    } catch (error) {
      reject(error);
    }
  });

  try {
    await Promise.race([timeoutPromise, pageLoadPromise]);
  } catch (error) {
    console.log('Timeout occurred. Switching to proxy...');
    context.addInitScript({
      content: `
        if (typeof window.__socksProxyEnabled === 'undefined') {
          window.__socksProxyEnabled = true;
          window.__originalFetch = window.fetch;
          window.fetch = async (input, init) => {
            const proxyUrl = 'socks5://127.0.0.1:1080';
            const proxyRequest = new Request(input, init);
            proxyRequest.headers.set('Proxy-Authorization', 'Basic ' + btoa('proxy_username:proxy_password'));
            return window.__originalFetch(proxyUrl, { method: 'POST', body: proxyRequest });
          };
        }
      `,
    });
  }

  // await page.waitForLoadState('networkidle');

  const pageHeight = await page.evaluate(() => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  });

  const numSlides = Math.ceil(pageHeight / 720);

  for (let i = 0; i < numSlides; i++) {
    const scrollOffset = i * 720;
    await page.evaluate((offset) => {
      window.scrollTo(0, offset);
    }, scrollOffset);

    const slideScreenshotPath = `../src/content/toolkits/_images/${repositoryName}/repositoryName_${i + 1}.png`;

// Directory path
const directoryPath = path.join(__dirname, '..', 'src', 'content', 'toolkits', '_images', repositoryName);

// Create directory if it doesn't exist
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}
    await page.screenshot({ path: slideScreenshotPath });
    console.log(`${repositoryName} ${i + 1} captured and saved to ${slideScreenshotPath}`);
  }

  await browser.close();
}

// Usage: Pass the URL of the webpage you want to capture as an argument to the function
let url = "https://github.com/wanghaisheng/auto-submit-urls-to-SEO"
let parts = url.split("/");

// The repository name is usually the last part of the URL
let repositoryName = parts[parts.length - 1];
if(!repositoryName){
  repositoryName="default"

}

captureWebpageSlides(url,repositoryName)
