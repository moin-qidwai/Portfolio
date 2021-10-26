import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hobbies from '../components/home/hobbies';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moin Ahmed Qidwai</title>
        <meta name="description" content="Personal Home Of Moin Ahmed Qidwai On The World Wide Web! Welcome Stranger!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div class="flex justify-center space-x-5 md:space-x-10">
          <div>
            <Image class="z-10" src="/images/pacme.png" height={260} width={215} alt="PacMoin" />
          </div>
          <div>
            <div class="text-white">
              <p class="my-1 px-2 py-2 text-2xl md:text-6xl font-bold bg-gray-800">Hi there,</p>
              <p class="my-1 px-2 py-1 text-lg md:text-3xl font-medium bg-gray-800">My Name Is Moin</p>
              <p class="max-w-max my-1 px-2 py-1 text-lg md:text-2xl font-normal bg-gray-800">I like</p>
              <Hobbies />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
