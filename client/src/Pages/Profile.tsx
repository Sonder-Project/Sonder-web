import { Container } from '@chakra-ui/react';
import React from 'react'

import ProfileCard from '../Components/profile/ProfileCard';
import Logout from '../helpers/Logout';

function Profile() {
  return (
    <>
      <Container
        py={["0px", "0px", "100px"]}
      >
        <ProfileCard />
        <Logout />
      </Container>

    </>
  )
}

export default Profile;