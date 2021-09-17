import Head from 'next/head'
import { Home } from '../components/Home'

export default function App() {
  return (
    <>
      <Head>
        <title>Home | Exotic Cars</title>
      </Head>

      <Home />
    </>
  )
}
