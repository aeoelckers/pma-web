import { useEffect } from 'react'
import { content, locales } from './content/siteData'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'

function App() {
  const locale = 'es'
  const copy = content[locale]

  useEffect(() => {
    document.documentElement.lang = locales[locale].code
    document.title = copy.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', copy.meta.description)
    }

    document.body.dataset.appReady = 'true'

    return () => {
      document.body.dataset.appReady = 'false'
    }
  }, [copy.meta.description, copy.meta.title, locale])

  return (
    <SiteLayout navigation={copy.navigation} footer={copy.footer}>
      <HomePage copy={copy} locales={locales} />
    </SiteLayout>
  )
}

export default App
