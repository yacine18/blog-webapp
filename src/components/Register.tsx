import React from "react";
import {
  Heading,
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";

const Register = () => {
  return (
    <Box marginTop="20">
      <Heading as="h1" size="lg" textAlign="center">
        Create Account
      </Heading>
      <FormControl width="50%" m="auto" marginTop="10">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="text" />
      </FormControl>
      <FormControl width="50%" m="auto" marginTop="5">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <FormControl width="50%" m="auto" marginTop="5">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
      </FormControl>
        <Button
          isLoading={false}
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
          marginTop="5"
          width="50%"
          ml="25%"
        >
          Submit
        </Button>
    </Box>
  );
};

export default Register;
