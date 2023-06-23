import { NextApiRequest, NextApiResponse } from 'next'
// import * as fs from 'node:fs'
import { unlinkSync } from 'node:fs'
import puppeteer from 'puppeteer'
import { v4 as uuidv4 } from 'uuid'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
    })

    const page = await browser.newPage()

    const websiteUrl = 'https://criar.matheusdamatag.com.br/finalizado'

    await page.goto(websiteUrl, { waitUntil: 'networkidle0' })

    await page.emulateMediaType('screen')

    const nameUID = uuidv4()

    await page.pdf({
      path: `./public/temp/${nameUID}.pdf`,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      printBackground: false,
      format: 'A4',
    })

    await browser.close()

    setTimeout(() => {
      unlinkSync(`./public/temp/${nameUID}.pdf`)

      console.log(`Successfully deleted ${nameUID}.pdf`)
    }, 60000) // 2 minutos

    return res.status(200).json({
      name: nameUID,
    })
  } catch (error) {
    return res.status(404).json({ error })
  }
}
