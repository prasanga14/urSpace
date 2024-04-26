import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex text-primary h-20 items-center">
      <div className="logo font-bold text-2xl mx-2 cursor-pointer">urSpace</div>
      <ul className="flex mx-12 justify-center items-center">
        <li className="mx-5">
          <a href="/">Home</a>
        </li>
        <li className="mx-5">
          <a href="/">Create Room</a>
        </li>
        <li className="mx-5">
          <a href="/">Github</a>
        </li>
        <li className="mx-5">
          <a href="/">IDE</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
