import {
  Button,
} from '@chakra-ui/react';

import { logoutAction } from '../actions/auth'
import { useDispatch } from 'react-redux';


function Logout() {
  const dispatch = useDispatch();

  const signout = () => {
    dispatch(logoutAction() as any);
  };

  return (
    <Button onClick={signout}>Logout</Button>
  )
}

export default Logout