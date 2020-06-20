import React, { useContext } from 'react';
import { Heading, InputGroup, InputLeftElement, Icon, Input, Flex, Box } from "@chakra-ui/core";
import { ActiveCompany } from 'src/context/ActiveCompanyContext';


const Header = () => {
  const {setStockName} = useContext(ActiveCompany);
  return (
    <Box display="flex" bg="#aabbcc" w="100%" p={4} color="white">
      <Heading width="33%">FlashStock</Heading>
      <InputGroup>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input color="black" type="search" placeholder="Search For Stock" onChange={(event) => {
          if (event.target.value) {
            setStockName(event.target.value)
          }
          
        }}/>  
      </InputGroup>
    </Box>
  );
};

export default Header;