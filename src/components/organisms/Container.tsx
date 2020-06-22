import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/core';

const containerStyles = {
  width: ['100vw', '100vw', '100vw', '80vw'],
  margin: '0 auto',
  display: 'flex',
};

const Container: FC = ({ children }) => {
  return (
    <Flex direction="column" {...containerStyles}>
      {children}
    </Flex>
  );
};

export default Container;
