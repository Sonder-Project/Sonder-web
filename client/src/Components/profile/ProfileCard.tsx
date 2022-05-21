import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function ProfileCard() {
  const { user: currentUser } = useSelector((state: any) => state.auth);
  console.log("current!!!!", currentUser);

  const color1 = useColorModeValue('white', 'gray.900');
  const color2 = useColorModeValue('gray.700', 'gray.400');
  const color3 = useColorModeValue('gray.50', 'gray.800');


  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={color1}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            ''
          }
          /*alt={'Avatar Alt'}*/
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
          J L
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @JL14
        </Text>
        <Text
          textAlign={'center'}
          color={color2}
          px={3}>
          Hello, I'm JL. I'm building something.
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={color3}
            fontWeight={'400'}>
            #VC
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={color3}
            fontWeight={'400'}>
            #CS
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={color3}
            fontWeight={'400'}>
            #EA
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
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
            }}>
            Follow
          </Button>
          <div className="container">
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role: any, index: any) => <li key={index}>{role}</li>)}
            </ul>
          </div>
        </Stack>
      </Box>
    </Center>
  );
}