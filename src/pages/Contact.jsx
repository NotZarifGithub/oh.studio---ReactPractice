import React from 'react'
import Hero from '../components/common/Hero'
import { heroCTA } from '../constant'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'

const Contact = () => {
  return (
    <div className='h-[89vh]'>
      <div className='h-[79vh]'>
        <Hero 
        section={heroCTA}
        index={0}/>
      </div>
      <Footer />
    </div>
  )
}

export default Contact