
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
    Heading,
    Avatar,
    Center,
    Text,
    Stack,
    Badge,
    Box,
    Grid,
    GridItem,
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AvatarWith from './AvatarWith';
import NavBar from './Navbar';
import Pagination from './Pagination';



export default function Characters() {
 
    let favv = JSON.parse(localStorage.getItem("favourite"))||[]

   
        const [data, setData] = useState([])
        const [isLoading, setIsLoading] = useState(false)
        const [isError, setIsError] = useState(false)
        const [detail, setDetail] = useState("")
        const [page, setPage] = useState(1)
        const [favourite, setFavourite] = useState("")
        const navigate = useNavigate()
        // favv.push(favourite)
        // localStorage.setItem("favourite",JSON.stringify(favv));
       
        const getData = ()=>{
       
        setIsLoading(true)
        setIsError(false)
        
            axios({
                method:"GET",
                url:`https://swapi.dev/api/people/?page=${page}`
            })
            .then((res)=>{
                setData(res.data.results)
                setIsLoading(false)
                setIsError(false)
            })
            .then((error)=>{
        
                setIsLoading(false)
                setIsError(true)
            })
        }
        
        
        useEffect(()=>{
            if(page){
                getData()
            }
  
        },[page])
        
        useEffect(()=>{
         if(detail){
         localStorage.setItem("characters",JSON.stringify(detail));
         }
        },[detail])
    


useEffect(()=>{
if(favourite){
    
    favv.push(favourite)
    localStorage.setItem("favourite",JSON.stringify(favv));
    setFavourite("")

}
},[favourite,favv])






    



    return (
        <>
        <NavBar count={favv.length}/>
        {/* <Box height={"10px"}></Box> */}
        <Pagination currentPage={page} lastPage={9} onPageChange={setPage} />
        <Box marginTop={"10px"} marginBottom="20px">
        <Button onClick={()=>setPage(page-1)} bg={"blue.100"} >Prev</Button> <Button bg={"blue.100"} onClick={()=>setPage(page+1)}>Next</Button>
        </Box>
       
         <Grid marginLeft={"50px"}  templateColumns='repeat(3, 1fr)' gap={6}>
        {data.map((item)=>(
     
        <GridItem
          maxW={'320px'}
          w={'full'}
        //   bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          {/* <Avatar
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
          /> */}
          
          <AvatarWith />
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
            {/* <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }} >
               Add to favourites
            </Button> */}
{/* ------------------------------------------------------- */}

        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              rightIcon={<ChevronDownIcon />}
              colorScheme="green"
              onClick={()=>setFavourite(item)}
              w="fit-content">
              Add to favourites
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">Added to favorate List</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="green">
                <TabList>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="xs"
                    fontWeight="bold"
                    onClick={()=>navigate("/favourite")}
                    w="50%">
                    Go to favorates
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="xs"
                    fontWeight="bold"
                    onClick={()=>navigate("/")}
                    w="50%">
                    Home
                  </Tab>
                </TabList>
               
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
  



            <Button
              flex={1}
              fontSize={'sm'}
              w="fit-content"
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
              }} onClick={()=>localStorage.setItem("characters",JSON.stringify(item.url))}>
             <Link to="/detail">Details </Link>
            </Button>
          </Stack>
        </GridItem>
      
      ))}
      </Grid>
      </>
    );
   
  }































// function Characters() {


//     const [data, setData] = useState([])
//     const [isLoading, setIsLoading] = useState(false)
//     const [isError, setIsError] = useState(false)
    
    
    
//     const getData = ()=>{
    
//     setIsLoading(true)
//     setIsError(false)
    
//         axios({
//             method:"GET",
//             url:"https://swapi.dev/api/people/"
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
    

// console.log("data",data)

//   return (
//     <Box>
      
//     </Box>
//   )
// }

// export default Characters