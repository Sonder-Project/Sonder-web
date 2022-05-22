import {
  Box,
  Container,
  Flex,
  Text,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import React, { useCallback, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { LandingMenu } from "./LandingMenu";


export const Nav: React.FC<{}> = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isScrolled, setIsScrolled] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -5) {
        setIsScrolled(true);
      } else if (currPos.y >= -5) {
        setIsScrolled(false);
      }
    },
    [isMobile],
    undefined,
    false,
    33,
  );

  const user = JSON.parse(localStorage.getItem("user") || "{}");  // todo - useEffect


  return (
    <>
      <Box
        transition="all 100ms ease"
        position="fixed"
        top={0}
        left={0}
        w="100%"
        zIndex="overlay"
        as="header"
        boxShadow={isScrolled ? "md" : undefined}
        bg={isScrolled ? "white" : "transparent"}
      >
        <Container
          as={Flex}
          py={4}
          maxW="7xl"
          justify="space-between"
          align="center"
          flexDir="row"
        >
          <Link to="/">
            <Text fontSize="3xl" color="black" fontWeight="bold">Sonder</Text>
          </Link>
          <Stack
            display={["none", "none", "flex"]}
            direction="row"
            alignItems="center"
            color="#262A36"
            fontWeight="bold"
            spacing={10}
            as="nav"
          >
            <Link to="/chat"><Text fontSize="xl">Chat</Text></Link>
            <Link to="/tokenomics"><Text fontSize="xl">Tokenomics</Text></Link>
            <Link to="/events"><Text fontSize="xl">Events</Text></Link>
            {JSON.stringify(user) !== '{}' && user.accessToken ?
              <Link to="/profile"><Text fontSize="xl">Profile</Text></Link> :
              <Link to="/login"><Text fontSize="xl">Login</Text></Link>
            }
            <Flex
              display={{ base: "none", lg: "flex" }}
              direction="row"
              align="center"
            >

            </Flex>
          </Stack>
          {isMobile ? <LandingMenu /> : null}
        </Container>
      </Box>
      <Box h="35px" w="100%" display={["block", "block", "none"]} />
    </>
  );
};