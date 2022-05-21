import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../actions/auth";



interface IUser {
  email: String;
  password: String;
}

export default function Login(props: any) {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const { message } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const color1 = useColorModeValue('gray.50', 'gray.800');
  const color2 = useColorModeValue('white', 'gray.700');

  const form = useRef();
  const checkBtn = useRef();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IUser>();

  const headers: Readonly<Record<string, string | boolean>> = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
    "X-Requested-With": "XMLHttpRequest",
  };

  const onSubmit: SubmitHandler<IUser> = data => {
    setLoading(true);
    dispatch(login(data))
      .then(() => {
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
        console.log("error in login dispatch");
      });

    /*
    axios.post('http://localhost:8080/login', data, headers)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
      */
  }
  if (isLoggedIn) {
    return <Navigate to="/profile" />
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={color1}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={color2}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register('email')} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register('password')} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}