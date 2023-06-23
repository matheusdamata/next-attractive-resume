import { NextApiRequest, NextApiResponse } from 'next'
import { unlinkSync } from 'node:fs'

import { executablePath } from 'puppeteer'
import puppeteer from 'puppeteer-core'

import { v4 as uuidv4 } from 'uuid'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: 'Method not allowed',
    })
  }

  // try {
  const browser = await puppeteer.launch({
    headless: 'new',
    ignoreHTTPSErrors: true,
    executablePath: executablePath(),
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

  setTimeout(() => {
    unlinkSync(`./public/temp/${nameUID}.pdf`)

    console.log(`Successfully deleted ${nameUID}.pdf`)
  }, 60000) // 2 minutos

  return res.status(200).json({
    name: nameUID,
  })
  // } catch (error) {
  //   return res.status(404).json({ error })
  // }
}
