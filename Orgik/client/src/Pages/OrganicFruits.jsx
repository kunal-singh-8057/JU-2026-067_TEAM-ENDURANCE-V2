import React from 'react'
import OrganicFruitsSection from '../Components/Organic Fruits Section/OrganicFruitsSection'
import OrganicFruitsHero from '../Components/Organic Fruits Section/OrganicFruitsHero'
import Navbar from '../Components/Navbar/Navbar'

function OrganicFruits() {
  return (
    <>
    <Navbar/>
    <OrganicFruitsHero HeroTitle={"Organic Fruits"} />
     <OrganicFruitsSection /> 
    </>
  )
}

export default OrganicFruits
