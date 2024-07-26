import React from 'react'
import Hero from '../components/home/hero'
import TopUniversities from '../components/home/topUniversities'

const Home = () => {
  return (
    <div className='h-96 bg-sky-100'>
      <Hero />
      <TopUniversities/>
      
    </div>
  )
}

export default Home