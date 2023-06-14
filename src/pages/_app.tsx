import type { AppProps } from 'next/app'

import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <SkeletonTheme>
      <Component {...pageProps} />
      <ToastContainer />
    </SkeletonTheme>
  )
}
