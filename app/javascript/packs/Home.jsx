import React from "react";
import { Link } from "@reach/router";

const Home = () => (
  <div>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    Hello!
  </div>
);

export default Home;
