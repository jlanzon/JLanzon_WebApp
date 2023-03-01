import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { ThemeProvider } from 'next-themes';

import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'




function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <Layout
      title="ai-chatgpt"
      path="solutions/ai-chatgpt"
      description="ai-chatgpt"
    >
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}

export default App
