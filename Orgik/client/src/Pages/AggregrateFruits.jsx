import React from 'react'
import OrganicFruitsSection from '../Components/Organic Fruits Section/OrganicFruitsSection'
import OrganicFruitsHero from '../Components/Organic Fruits Section/OrganicFruitsHero'
import Navbar from '../Components/Navbar/Navbar'

function AggregrateFruits() {
  return (
    <div>
      <Navbar/>
      <OrganicFruitsHero HeroTitle={"Aggregrate Fruits"} />
       <OrganicFruitsSection  /> 
    </div>
  )
}

export default AggregrateFruits
