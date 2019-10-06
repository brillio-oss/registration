import {Link} from '@reach/router';
import React from 'react';

const Home = () => (
  <div>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    Hello!
  </div>
);

export default Home;
