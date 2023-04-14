import React from 'react'
import MainNav from './MainNav';
import Footer from './Footer';

export default function Layouts({children}) {
  return (
    <div>
        <MainNav/>
            {children}
        <Footer/>
    </div>
  )
}
