import React from 'react';
import { Box, Button, Heading, Text, VStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import viteLogo from '/vite.svg';

const ErrorPage = () => {

  //error page undefined routes
  return (
    <Box 
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.100"
      padding={4}
    >
          <img src={viteLogo} alt="" />
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl" color="red.500">
          Oops! Page Not Found
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We can't find the page you're looking for.
        </Text>
        <Link to="/">
          <Button colorScheme="teal" size="lg" mt={4}>
            Go Back to Home
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
