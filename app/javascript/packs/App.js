import React from 'react';
import {Router} from '@reach/router';
import {Box} from '@chakra-ui/core';

import ChakraProvider from '../components/ThemeProvider';
import NavBar from '../components/NavBar';

import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Box px="8" pt="6">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
