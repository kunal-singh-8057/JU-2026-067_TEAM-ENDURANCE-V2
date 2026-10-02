import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

function FaqDrawer() {
  return (
    <Accordion allowToggle width={'100%'} gap={'1rem'} display={'flex'} flexDirection={'column'} marginTop={'4rem'} >
  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          What does the agricultural rover do?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     The agricultural rover is designed to autonomously move through crop fields, continuously monitor plant health, detect potential pests, and collect important field data to help farmers make faster and smarter decisions.
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          How does the rover detect pests?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    The rover uses cameras, environmental sensors, and AI/ML-based image analysis to identify visible signs of pests or crop damage and alert farmers before the problem can spread across a larger area.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
          Can the rover work in different types of fields?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       Yes, the rover can be adapted for different agricultural environments, crop types, and field conditions, making it suitable for a wide range of farming applications with appropriate sensor and software configurations.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
         Does the rover work autonomously?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       Yes, the rover is designed to navigate agricultural fields with minimal human intervention while performing tasks such as crop monitoring, data collection, and identifying areas that require further attention.
    </AccordionPanel>
  </AccordionItem>
 
  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
       How does AI/ML help farmers?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   AI/ML processes the images and sensor data collected by the rover to identify potential crop problems, detect patterns, and provide useful insights that can help farmers take timely and informed actions.
    </AccordionPanel>
  </AccordionItem>
 

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
        Can farmers monitor the rover remotely?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   Yes, the system can be connected to a remote monitoring platform where farmers can view field information, receive alerts, track rover activity, and monitor potential crop or pest-related issues from a distance.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  
  >
    <h2>
      <AccordionButton
      
      bg={'#5DA88A'}
      height={'4rem'}
      color={'white'}
      _hover={{bg: '#5DA88A'}}
      >
        <Box as="span" flex='1' textAlign='left' fontSize={['14px' , '14px' , '14px' , '14px' , '20px']}>
        How does the rover improve crop protection?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    By regularly scanning the field and identifying early signs of pests or crop problems, the rover helps farmers respond at the right time, potentially reducing crop damage and supporting more efficient use of agricultural resources.
    </AccordionPanel>
  </AccordionItem>

</Accordion>
  )
}

export default FaqDrawer
