import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import Feature from '@/components/Feature'
import Contributors from '@/components/Contributors'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Contributors/>
      <Faq/>
      <Footer/>
    </div>
  )
}
