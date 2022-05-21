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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Box position="relative">
          <Nav />
        </Box>
        <Routes>
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
