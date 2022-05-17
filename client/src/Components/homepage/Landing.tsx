
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Container maxW={'6xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1,
            }}>
            Platform for deep
          </Text>
          <br />{' '}
          <Text color={'blue.400'} as={'span'}>
            conversations and collaboration
          </Text>{' '}
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} fontSize='2xl'>
          SonderMatch helps you find the people you are looking for and facilitates discussions.
          Built for motivated thinkers looking to share their knowledge, solve problems, and expand
          their worldview
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            size='lg'
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            <Link to="/signup">
              Get started for free in 5 min
            </Link>
          </Button>

        </Stack>
        <Flex w={'full'}>
          {/*<img src={World}></img>*/}
        </Flex>
      </Stack>
    </Container>
  );
}

