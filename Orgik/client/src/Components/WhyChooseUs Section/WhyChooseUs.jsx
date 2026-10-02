import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import bgImage from '../../assets/Why Choose Us Image.png'
import fresh from '../../assets/Fresh.png'
import organic from '../../assets/Organic.png'
import chemicalFree from '../../assets/ChemicalFree.png'
import WhyChooseUsDetails from './WhyChooseUsDetails'


function WhyChooseUs() {
  return (
    <Box
    width={'100%'}
    min-height={'100vh'}
    marginTop={'5rem'}
    >

      {/* Why Choose Us Details */}
      <VStack 
      width={'100%'}
      height={'100%'}
      >

      {/* Heading Container */}
      <VStack>

        {/* Heading */}
        <Text 
        fontSize={["20px" , "30px" , "30px" , "40px"]}
        fontWeight={"600"}
        letterSpacing={"2px"}
        >
          Why Choose Us 
        </Text>

        {/* Sub Heading */}
        <Text
        fontSize={["15px" , "20px" , "20px" , "20px"]}
        width={['85%' , '85%' , '85%' , '75%' , '50%']}
        textAlign={"center"}
        marginTop={"0.8rem"}
        >
        Arcu non odio euismod lacinia sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

      </VStack>

      <HStack
      width={'100%'}
      height={'100%'}
      justifyContent={'center'}
      display={['grid' , 'grid' , 'grid' , 'flex']}
      gridAutoRows={['auto' , 'auto' , 'auto' , 'auto' , 'auto']}
      gridAutoColumns={['auto' , 'auto' , 'auto' , 'auto' , 'auto']}
      placeItems={'center'}
      marginTop={['50px' , '50px' , '50px' , '50px']}
      gap={['50px' , '50px' , '50px' , '0px']}
      >
      {/* Image */}
      <VStack
      width={['50%' , '50%' , '30%' , '30%' ,  '30%']}
      height={'100%'}
      
      >

      <Image  width={'100%'} height={'100%'} objectFit={"cover"} src={bgImage} />

      </VStack>
      
      <VStack
      width={['100%' , '100%' , '100%' , '100%' ,  '60%']}
      height={'100%'}
      gap={'40px'}
      marginTop={['20px' , '20px' , '20px'  , '0px']}
      >

         <WhyChooseUsDetails detailsImage={fresh} DetailsTitle={"Smart Pest Detection"} DetailsText={"Our AI/ML-powered system identifies potential pest threats early, helping farmers take timely action."} />

        <WhyChooseUsDetails detailsImage={organic} DetailsTitle={"Advanced AI & Technology"} DetailsText={"We combine AI/ML, sensors, and autonomous rover technology to deliver smarter agricultural solutions."} />

        <WhyChooseUsDetails detailsImage={chemicalFree} DetailsTitle={"Reliable Technical Support"} DetailsText={"Our system is designed for easy operation, reliable performance, and continuous technical assistance."} />

      </VStack>

      </HStack>

      </VStack>

    </Box>
  )
}

export default WhyChooseUs
