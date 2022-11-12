import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function LinkSample() {
  const router = useRouter()

  const onSubmit = () => {
    router.push('/ssr')
  }

  const onClickReload = () => {
    router.reload()
  }

  const onClickBack = () => {
    router.back()
  }

  useEffect(() => {
    router.events.on('routeChangeStart', (url, { shallow }) => {
      console.log('routeChangeStart', url)
    })

    router.events.on('routeChangeComplete', (url, { shallow }) => {
      console.log('routeChangeComplete', url)
    })
  }, [])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
      <Link href="/ssg">Go TO SSG</Link>
      <Link href="/ssg?keyword=next">
        GO TO SSG with keyword &quotnext&quot
      </Link>
      <Link
        href={{
          pathname: '/ssg',
          query: { keyword: 'hello' },
        }}
      >
        GO TO SSG with keyword &quothello&quot
      </Link>
      <Link href="/ssg">
        <button>Jump to SSG page</button>
      </Link>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onClickReload}>Reload</button>
      <button onClick={onClickBack}>Back</button>
    </div>
  )
}

export default LinkSample
