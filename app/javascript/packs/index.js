import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

require('@rails/ujs').start();
require('@rails/activestorage').start();
require('channels');

const componentRequireContext = require.context('components', true);
const ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  );
});
