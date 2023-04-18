import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function PageNotFound() {
    const [screenHeight, setScreenHeight] = useState(0);

  useEffect(()=>{
    setScreenHeight(window.innerHeight - 60);
  },[])
  return (

    <>
        <Head>
        <title>Page Not Found | Real Fast</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/realfast_logo.png" />
      </Head>
      <main className={styles.container} style={{height:`${screenHeight}px`}}>
        <Image width={300} height={300} src='/images/error-404.png'></Image>
        <h3 className={styles.message}>Sorry, the page does not exist</h3>
        <p className={styles.action}>Return to <Link className={styles.link} href='/about-us?keyword=react&jobtype=fulltime'>Home</Link></p>
      </main>
    </>
  )
}

const styles={
    container:'w-full flex flex-col justify-center items-center px-16',
    message:'text-lg font-bold my-3',
    action:'text-md font-bold',
    link:'text-indigo-500 font-bold'
}