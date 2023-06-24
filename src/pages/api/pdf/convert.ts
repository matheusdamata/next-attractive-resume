import { NextApiRequest, NextApiResponse } from 'next'
import { unlinkSync } from 'node:fs'
import { screenPage } from '../_lib/screenPage'

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

  const findScreenPage = await screenPage()

  setTimeout(() => {
    unlinkSync(`./public/temp/${findScreenPage}.pdf`)

    console.log(`Successfully deleted ${findScreenPage}.pdf`)
  }, 60000) // 2 minutos

  return res.status(200).json({
    name: findScreenPage,
  })
  // } catch (error) {
  //   return res.status(404).json({ error })
  // }
}
