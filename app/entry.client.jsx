// entry.client.tsx
import React, { useState } from 'react'
import { hydrate } from 'react-dom'
import { CacheProvider } from '@emotion/react'
import { RemixBrowser } from '@remix-run/react'
import { ClientStyleContext } from './store/chakraContext'
import createEmotionCache from './utils/chakra/createEmotionCache'





function ClientCacheProvider({ children }) {
  const [cache, setCache] = useState(createEmotionCache())

  function reset() {
    setCache(createEmotionCache())
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document,
)