import React from 'react';
import { Heading, InputGroup, InputLeftElement, Icon, Input, Flex, Box } from "@chakra-ui/core";

const Header = () => {
  return (
    <Box display="flex" bg="#aabbcc" w="100%" p={4} color="white">
      <Heading width="33%">FlashStock</Heading>
      <InputGroup>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input type="search" placeholder="Search For Stock" />
      </InputGroup>
    </Box>
  );
};

export default Header;