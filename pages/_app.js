import NProgress from 'nprogress'
import Router from 'next/router'
import { SnackbarProvider } from 'notistack'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import '../styles/globals.css'
import '../styles/grid.css'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <SnackbarProvider maxSnack={3}>
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
