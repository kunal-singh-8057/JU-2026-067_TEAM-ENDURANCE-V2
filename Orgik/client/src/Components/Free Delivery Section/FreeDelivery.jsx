import { Box, Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import bg from "../../assets/FreeDelivery.png";
import {useNavigate,Outlet, Navigate} from 'react-router-dom' 
import Axios from 'axios';

function FreeDelivery() {

  const[subscribeEmail,setsubscribeEmail] = useState("");

    const subscribe = ()=>{
      Axios.post("http://localhost:4500/api/v1/login",{
        subscribeEmail:subscribeEmail
      }).then(()=>{
        alert("Thanks for Subscribing You Will Receive All Latest Updates From Now")
      }).catch((error)=>{
        console.log(error)
      })
    }


  return (
    <Box
      width={"100%"}
      height={"50vh"}
      marginTop={"5rem"}
      overflow={"hidden"}
      
    >
      <HStack
        width={"85%"}
        margin={"auto"}
        height={"100%"}
        backgroundColor={"#F8F0E5"}
        borderRadius={"50px"}
      >
        <VStack 
        width={"50%"} 
        height={"100%"}
        display={"flex"}
      justifyContent={"center"}
      alignItems={'center'}
        >
          <Image 
          src={bg} 
          />
        </VStack>

        <VStack 
        width={"50%"} 
        height={"100%"}
        gap={"20px"}
        display={"flex"}
      justifyContent={"center"}
      alignItems={'center'}
        >
          <Text 
          fontSize={"20px"} 
          letterSpacing={"1px"} 
          fontWeight={"100"}
          >
            Don’t Miss Out Our Latest Updates
          </Text>

          <Text 
          fontSize={"30px"} 
          fontWeight={"600"} 
          letterSpacing={"2px"}
        >
            Subscribe Us
          </Text>

          <Input
            type="email"
            placeholder="Enter Your Email"
            variant={"filled"}
            width={"70%"}
            bg="#E8E9DC"
            _hover={{ bg: "#E8E9DC" }}
            _focus={{ borderColor: "#5DA88A" }}
            outline={"none"}
            borderRadius={"20px"}
           onChange={(e)=>{setsubscribeEmail(e.target.value)}}  />


          <Button
          
          width={"70%"}
          height={"50px"}
          borderRadius={"30px"}
          backgroundColor={"#5DA88A"}
          color={'white'}
          fontSize={"18px"}
          letterSpacing={"1px"}
          _hover={{ backgroundColor: "#FEE4D7" , color : "#5DA88A"}}
          onClick={subscribe}>
            SUBSCRIBE NOW
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
}

export default FreeDelivery;
