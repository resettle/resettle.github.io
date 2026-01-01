import { ApiReferenceReact } from '@scalar/api-reference-react'

import Metadata from '~/components/Metadata'

export default function Documentation() {
  return (
    <>
      <Metadata
        title="Resettle Intelligence API Reference"
        description="The collection of all Resettle Intelligence API references"
        keywords={[
          'resettle intelligence',
          'api reference',
          'api documentation',
          'swagger',
          'openapi spec',
        ]}
      />
      <ApiReferenceReact
        configuration={{
          sources: [
            'place',
            'occupation',
            'skill',
            'university-ranking',
            'exchange-rate',
          ].map(s => ({
            slug: s,
            url: `${import.meta.env.VITE_ASSETS_URL}/openapi/${s}.json`,
          })),
          documentDownloadType: 'none',
          darkMode: false,
          hideClientButton: true,
          hideTestRequestButton: true,
          hiddenClients: {
            c: ['libcurl'],
            clojure: ['clj_http'],
            csharp: ['httpclient', 'restsharp'],
            dart: ['http'],
            fsharp: ['httpclient'],
            go: ['native'],
            java: ['asynchttp', 'nethttp', 'okhttp', 'unirest'],
            js: ['axios', 'fetch', 'jquery', 'ofetch', 'xhr'],
            kotlin: ['okhttp'],
            node: ['axios', 'fetch', 'ofetch', 'undici'],
            objc: ['nsurlsession'],
            ocaml: ['cohttp'],
            php: ['curl', 'guzzle'],
            python: ['httpx_async', 'httpx_sync', 'python3', 'requests'],
            r: ['httr'],
            ruby: ['native'],
            rust: ['reqwest'],
            swift: ['nsurlsession'],
          },
          isLoading: true,
          showDeveloperTools: 'never',
          telemetry: false,
        }}
      />
    </>
  )
}
