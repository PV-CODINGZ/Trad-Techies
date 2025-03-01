import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Features from "../Features"
import EventsPage from '../EventsPage'
import EventsHeader from '../EventsHeader'

function Home() {
  return (
   <>
   <div className="home w-full min-h-screen">
    <Navbar/>
    <Hero/>
    <Features/>
    <EventsHeader/>
    <EventsPage/>
    
    
   </div>
   </>
  )
}

export default Home