import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div id = 'navbar'>
    <nav>
    <Link to = '/home'>Home</Link>
    <Link to = '/valentine'>Generate a random card!</Link>
    </nav>
  </div>

);

export default Navbar;
