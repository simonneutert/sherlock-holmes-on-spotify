import playlist from '../public/sh_neue.json'
import Head from 'next/head'
import Albums from '../components/albums'

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
