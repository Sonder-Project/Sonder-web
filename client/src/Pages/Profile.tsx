import { Container } from '@chakra-ui/react';
import React from 'react'

import ProfileCard from '../Components/profile/ProfileCard';

function Profile() {
  return (
    <>
      <Container
        py={["0px", "0px", "100px"]}
      >
        <ProfileCard />
      </Container>

    </>
  )
}

export default Profile;