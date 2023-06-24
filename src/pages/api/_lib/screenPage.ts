import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

import { v4 as uuidv4 } from 'uuid'

export async function screenPage() {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: true,
    ignoreHTTPSErrors: true,
  })

  console.log('Browser: ', browser)

  const page = await browser.newPage()

  console.log('Page: ', page)

  const websiteUrl = `${process.env.NEXT_PUBLIC_URL_API}/finalizado`

  console.log('WebsiteUrl: ', websiteUrl)

  await page.goto(websiteUrl, { waitUntil: 'networkidle0' })

  await page.emulateMediaType('screen')

  const nameUID = uuidv4()

  await page.pdf({
    path: `./public/temp/${nameUID}.pdf`,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    printBackground: false,
    format: 'a4',
  })

  await browser.close()

  return nameUID
}
