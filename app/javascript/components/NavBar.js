import React from 'react';
import {Link as ReachLink} from '@reach/router';
import {Box, Flex, Link, Text} from '@chakra-ui/core';

import {theme} from '../utils/theme';

const NavLink = ({children, ...props}) => (
  <Link px={2} fontSize="xl" color={theme.colors.text} {...props}>
    {children}
  </Link>
);

function NavBar() {
  return (
    <Flex
      bg={theme.colors.dark_primary}
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        {/* Logo comes here */}
        <NavLink as={ReachLink} to="/" fontWeight="700">
          Brillio Hackathon
        </NavLink>
      </Flex>
      <Box>
        <NavLink as={ReachLink} to="/">
          Home
        </NavLink>
        <NavLink as={ReachLink} to="/about">
          About
        </NavLink>
        <NavLink as={ReachLink} to="/contact">
          Contact
        </NavLink>
      </Box>
    </Flex>
  );
}

export default NavBar;
