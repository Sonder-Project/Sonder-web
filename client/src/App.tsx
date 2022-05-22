import './App.css';
import { Nav } from './Components/nav/Nav';
import Home from './Pages/Home';
import { Chat } from './Pages/Chat';
import Tokenomics from './Pages/Tokenomics';
import Events from './Pages/Events';
import Profile from './Pages/Profile';

import Signup from './Pages/Signup';
import LoginPage from './Pages/Login';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Box } from '@chakra-ui/react';


import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from './actions/auth';
import { clearMessage } from './actions/message';
import { history } from './helpers/history';
import { useState, useEffect } from 'react';


function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location: any) => {
      dispatch(clearMessage()); // clear message on route change
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logoutAction() as any);
  };


  return (
    <BrowserRouter >
      <div className="App">
        <Box position="relative">
          <Nav />
        </Box>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/tokenomics' element={<Tokenomics />} />
          <Route path='/events' element={<Events />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;
