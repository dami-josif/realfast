import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function JobCard() {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.titleBlock}>
          <h3 className={styles.jobTtitle}>JavaScript/React Developer</h3>
          <p className={styles.location}>Abuja</p>
        </div>
        
        <div className={styles.companyBlock}>
          <Image src="/realfast_logo.png" width={36} height={36} alt="company logo"/>
          <p className={styles.companyName}>Meta Soft Corporation</p>
        </div>
      </div>
      
      <div className={styles.body}>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, 
          consequatur? Inventore voluptate aspernatur consectetur, debitis dolor orem ipsum dolor sit amet consectetur adipisicing elit. Magni, 
          consequatur? Inventore voluptate aspernatur consectetur, debitis doloorem ipsum dolor sit amet consectetur adipisicing elit. Magni, 
          consequatur? Inventore voluptate aspernatur consectetur, debitis doloquia velit, fuga sint voluptas rem impedit culpa id odio dolores, sapiente illum ad?
        </p>

        <div className={styles.metaBlock}>
          <div className={styles.wageBlock}>
            <p className={styles.metaText}>NGN450,000/monthly</p>
            <p className={styles.metaText}>Full Time</p>
          </div>

          <Link href="#" className={styles.apply}>View and Apply</Link>
        </div>
      </div>
    </div>
  )
}

const styles={
  card:'border border-gray-200 rounded-md p-3',
  head:'flex flex-col md:flex-row justify-between',
  titleBlock:'',
  jobTtitle:'text-3xl font-reading',
  location:'text-lg text-indigo-600',
  companyBlock:'h-[40px] flex flex-row gap-2 items-center',
  companyName:'text-lg ',
  body:'border-t border-gray-300',
  description:'text-gray-800',
  metaBlock:'flex flex-row justify-between mt-4',
  wageBlock:'flex flex-row gap-3',
  metaText:'text-lg font-bold',
  apply:'h-[52px] bg-indigo-800 flex justify-center items-center text-white font-bold px-3 rounded-md cursor-pointer'
}