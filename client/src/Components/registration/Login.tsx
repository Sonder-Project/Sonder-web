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
  Spinner
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { clearMessage } from "../../actions/message";


interface IUser {
  username: String;
  password: String;
}

export default function Login(props: any) {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const { message } = useSelector((state: any) => state.message);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const color1 = useColorModeValue('gray.50', 'gray.800');
  const color2 = useColorModeValue('white', 'gray.700');

  const inputRef = useRef<any>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IUser>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUser> = data => {
    setLoading(true);

    dispatch(login(data))
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        setLoading(false);
        console.log("error in login dispatch");
      });
  }

  useEffect(() => {
    //focus the input element 
    inputRef.current?.focus();
    dispatch(clearMessage());
  }, [])

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
          <form onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel ref={inputRef}>Username</FormLabel>
                <Input type="username" {...register('username')} />
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
                  {loading ?
                    <Spinner />
                    :
                    <span>Sign in</span>
                  }
                </Button>
                {message && ( // if there is an error message, display it
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}