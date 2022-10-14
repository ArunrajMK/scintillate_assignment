import React from 'react'
import {
    Heading,
    Avatar,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    Box,
    Grid,
    GridItem,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';


function Favourite() {

    let data = JSON.parse(localStorage.getItem("favourite"))||[]


  return (
    <>
    <NavBar count={data.length}/>
  
  
     <Grid marginLeft={"20px"} marginRight={"20px"} templateColumns='repeat(4, 1fr)' gap={6}>
    {data.map((item)=>(
 
    <GridItem
      maxW={'320px'}
      w={'full'}
    //   bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
      <Avatar
        size={'xl'}
        src={
          'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'
        }
        alt={'Avatar Alt'}
        mb={4}
        pos={'relative'}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: 'green.300',
          border: '2px solid white',
          rounded: 'full',
          pos: 'absolute',
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'}>
       Name: {item.name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
      Gender: {item.gender}
      </Text>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
      Skin Color: {item.skin_color}
      </Text>
     
      <Text fontWeight={600} color={'gray.500'} mb={4}>
    
      </Text>
      <Text
        textAlign={'center'}
        // color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
         Hair Color: {item.hair_color}
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
      <Text
              px={2}
              py={1}
            //   bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              Weight {item.mass}kg
            </Text>
            <Text
              px={2}
              py={1}
            //   bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              Height {item.height}cm
            </Text>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4}>
       
        
      </Stack>
    </GridItem>
  
  ))}
  </Grid>
  <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }} >
         <Link to="/">Back to home Page</Link>
        </Button>
  </>
);
}

export default Favourite