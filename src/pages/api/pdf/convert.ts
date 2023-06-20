import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const browser = await puppeteer.launch({
    headless: 'new',
  })

  const page = await browser.newPage()

  const websiteUrl = 'http://localhost:3000/selecione'

  await page.goto(websiteUrl, { waitUntil: 'networkidle0' })

  await page.emulateMediaType('screen')

  const pdf = await page.pdf({
    path: './public/result.pdf',
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    printBackground: true,
    format: 'A4',
  })
  console.log(pdf)

  await browser.close()

  return res.status(200)
}
