import {CSSReset, ThemeProvider} from '@chakra-ui/core';
import {Global} from '@emotion/core';
import React from 'react';

import {theme} from '../utils/theme';

const ChakraProvider = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Global
        styles={{
          body: {
            minHeight: '100vh',
            background: theme.colors.background,
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default ChakraProvider;
