import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'

// user will land on this Homepage after logged in 
const HomePage = () => {
  return <main>
    <Hero />
    <FeaturedProducts />
    <Services />
    <Contact />
  </main>
}

export default HomePage
