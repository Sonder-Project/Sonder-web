import React from 'react'

import Landing from '../Components/homepage/Landing';
import Features from '../Components/homepage/Features';
import Waitlist from '../Components/homepage/Waitlist';
import Footer from '../Components/homepage/Footer';

import { Container } from '@chakra-ui/react';


import { AnimatedGradient } from '../Components/homepage/AnimatedGradient';
import { StaticGradient } from '../Components/homepage/StaticGradient';

import FeatureBackgroundColor from "../Components/svgs/Feature-background.svg";
import { HomeBridge } from '../Components/svgs/HomeBridge';

function home() {
  return (
    <div>
      <Container
        zIndex={2}
        position="relative"
        maxW="container.page"
        py={["0px", "0px", "20px"]}
      >
        <StaticGradient
          zIndex={-1}
          position="absolute"
          bottom={0}
          left="50%"
          w="100%"
          transform={`translate(-50%, ${true ? "33%" : "66%"})`}
          hero={true}
        />
        {/*<FeaturesBackground bottom={0}/>*/}
        <Landing />
      </Container>

      <Container position="relative" overflow="hidden" zIndex={3} maxW="container.page" py={["0px", "0px", "75px"]} backgroundImage={FeatureBackgroundColor} >
        <Features />
      </Container>
      <Container maxW="container.page" py={["0px", "0px", "75px"]}>
        <Waitlist />
      </Container>

      <Footer />
    </div>
  )
}

export default home