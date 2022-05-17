import React, { useState } from "react";
import Header from "../Components/chat/Header";
import Messages from "../Components/chat/Messages";
import Footer from "../Components/chat/Footer";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

export const Chat: React.FC<{}> = () => {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "This is J" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Container
      zIndex={2}
      position="relative"
      maxW="container.page"
      py={{ base: 20, md: 28 }}>
      <Flex w="100%" h="100vh" justify="center" align="center">
        <Flex w="40%" h="90%" flexDir="column">
          <Header />
          <Messages messages={messages} />
          <Footer
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleSendMessage={handleSendMessage}
          />
        </Flex>
      </Flex>


    </Container>

  )
}