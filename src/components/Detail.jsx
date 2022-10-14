import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from './Navbar';


export default function Detail() {


    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    let favv = JSON.parse(localStorage.getItem("favourite"))||[]
    var url = JSON.parse(localStorage.getItem("characters"))
    
    
    const getData = ()=>{
    
    setIsLoading(true)
    setIsError(false)
    
        axios({
            method:"GET",
            url:`${url}`
        })
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
            setIsError(false)
        })
        .then((error)=>{
    
            setIsLoading(false)
            setIsError(true)
        })
    }
    
    
    useEffect(()=>{
    getData()
    },[])
    
    console.log("data detail",data)


    return (
        <>
      <NavBar count={favv.length}/>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Name: {data.name}
              </Heading>
              <Text
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Gender: {data.gender}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                //   borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
              
              
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                //   color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                 speciality
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Eye Color</ListItem>
                    <ListItem>Hair Color</ListItem>{' '}
                    <ListItem>Skin Color</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{data.eye_color}</ListItem>
                    <ListItem>{data.hair_color}</ListItem>
                    <ListItem>{data.skin_color}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                //   color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Other Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Height:
                    </Text>{' '}
                    {data.height} cm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Weight:
                    </Text>{' '}
                   {data.mass} Kg
                  </ListItem>
                  <ListItem>
                 
                  </ListItem>
                 
                
                </List>
              </Box>
            </Stack>
  
            
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
            
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box  marginTop="30px">
      <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              bg={"black"}
              color={"white"}
              py={'7'}
             marginBottom="20px"
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }} >
             <Link to="/" >Back to Home Page</Link>
            </Button>
      </Box>
    
      </>
    );
  }










































// function Detail() {

//     const [data, setData] = useState([])
//     const [isLoading, setIsLoading] = useState(false)
//     const [isError, setIsError] = useState(false)
    
//     var url = JSON.parse(localStorage.getItem("characters"))
//     console.log("cha check",url)
    
//     const getData = ()=>{
    
//     setIsLoading(true)
//     setIsError(false)
    
//         axios({
//             method:"GET",
//             url:`${url}`
//         })
//         .then((res)=>{
//             setData(res.data)
//             setIsLoading(false)
//             setIsError(false)
//         })
//         .then((error)=>{
    
//             setIsLoading(false)
//             setIsError(true)
//         })
//     }
    
    
//     useEffect(()=>{
//     getData()
//     },[])
    
//     console.log("data detail",data)
    




//   return (
//     <Box>

//     </Box>
//   )
// }

// export default Detail