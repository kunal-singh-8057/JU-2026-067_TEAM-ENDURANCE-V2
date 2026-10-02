import React from 'react'
import Section1 from '../Components/Section 1/Section1'
import { Box } from '@chakra-ui/react'
import Section2 from '../Components/Section 2/Section2'
import Navbar from '../Components/Navbar/Navbar'

function Services() {
  return (
    
    <>
    
    <Navbar/>
    
    <Box
    marginTop={'5rem'}
    >
      
      <Section1 />
      <Section2 />
    </Box>

    </>
  )
}

export default Services
