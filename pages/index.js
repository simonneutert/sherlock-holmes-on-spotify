import Head from 'next/head'
import Albums from '../components/albums'

import neue from '../public/sh_neue.json'
import reloaded from '../public/sh_reloaded.json'

import { useEffect, useState } from 'react'

export default function Home() {
  const shuffle = {
    items: [
      neue.items[Math.floor(Math.random() * neue.items.length)],
      reloaded.items[Math.floor(Math.random() * reloaded.items.length)]
    ]
  }

  const [albums, setAlbums] = useState([])
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setAlbums(shuffle), [])

  return (
    <>
      <Head>
        <title>Sherlock Holmes on Spotify</title>
        <meta name="description" content="Browse Sherlock Holmes Hörspiele auf Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container' style={{ minHeight: '100vh' }}>
        <h2>Finde immer das passende Hörspiel von Sherlock Holmes auf Spotify</h2>
        <div className='my-4'>
          <h4>Zufälliges Album</h4>
          <Albums albums={albums} />
        </div>
      </div>
    </>
  )
}
