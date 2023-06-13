import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <SkeletonTheme>
        <Component {...pageProps} />
        <ToastContainer />
      </SkeletonTheme>
    </SessionProvider>
  )
}
