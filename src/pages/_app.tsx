import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { BooKeeTheme } from '@/theme'
import GlobalStyles from '@/theme/globalStyles'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={openSans.className}>
    <ThemeProvider theme={BooKeeTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
}
