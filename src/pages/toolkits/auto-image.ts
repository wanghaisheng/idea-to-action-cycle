const { chromium } = require('playwright')

async function captureWebpageSlides(url) {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        // Set the viewport size to the desired slide dimensions
        await page.setViewportSize({ width: 1280, height: 720 })

        await page.goto(url)
        await page.waitForLoadState('networkidle')

        const pageHeight = await page.evaluate(() => {
                return Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.offsetHeight,
                        document.body.clientHeight,
                        document.documentElement.clientHeight
                )
        })

        const numSlides = Math.ceil(pageHeight / 720)

        for (let i = 0; i < numSlides; i++) {
                const scrollOffset = i * 720
                await page.evaluate((offset) => {
                        window.scrollTo(0, offset)
                }, scrollOffset)

                const slideScreenshotPath = `slide_${i + 1}.png`
                await page.screenshot({ path: slideScreenshotPath })
                console.log(`Slide ${i + 1} captured and saved to ${slideScreenshotPath}`)
        }

        await browser.close()
}

// Usage: Pass the URL of the webpage you want to capture as an argument to the function
captureWebpageSlides('https://github.com/wanghaisheng/auto-submit-urls-to-SEO')
