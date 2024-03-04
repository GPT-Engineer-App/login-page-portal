import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // Here you would normally handle the login with a backend service
    toast({
      title: "Login Attempted.",
      description: `We'll pretend you've been logged in with ID: ${id}!`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <Box minWidth="sm" marginTop="20" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4} align="flex-start">
          <Heading size="lg">Login</Heading>
          <FormControl id="id">
            <FormLabel>ID</FormLabel>
            <Input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter your ID" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </FormControl>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" width="full" mt={4} onClick={handleLogin}>
            Sign In
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
