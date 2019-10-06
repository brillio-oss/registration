import {Router} from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';

require('@rails/ujs').start();
require('@rails/activestorage').start();
require('channels');

const componentRequireContext = require.context('components', true);
const ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Contact path="/contact" />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  );
});
