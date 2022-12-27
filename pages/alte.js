import Head from 'next/head'
import Albums from '../components/albums'
import playlist from '../public/sh_reloaded.json'

export default function Neue() {
  return (
    <>
      <Head>
        <title>Sherlock Holmes on Spotify</title>
      </Head>
      <Albums albums={playlist} />
    </>
  )
}
