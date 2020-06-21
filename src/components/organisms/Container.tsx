import React, { FC } from 'react';
import { Box } from '@chakra-ui/core';

const containerStyles = {
  border: '1px solid green',
  width: ['100vw', '100vw', '100vw', '80vw'],
  margin: '0 auto',
  display: 'flex',
}

const Container: FC = ({children}) => {
  return (
    <Box
      {...containerStyles}
    >
      {children}
    </Box>
  );
};

export default Container;