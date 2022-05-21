import { Container, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import userService from '../services/user.service';

function Events() {
  const [content, setContent] = useState("");

  useEffect(() => {
    userService.getPublicContent()
      .then(response => {
        setContent(response.data);
      },
        (error) => {
          const _content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          setContent(_content);
        }
      );
  }, []);

  return (
    <Container
      zIndex={2}
      position="relative"
      maxW="container.page"
      py={{ base: 20, md: 28 }}>
      <Text>Events</Text>
      <Text>{content}</Text>
    </Container>
  )
}

export default Events