import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

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
        <div className="buttons fixed top-0 right-0 flex items-center justify-center p-4">
          <button
            className="mx-3 bg-primary  text-white py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="mx-3 bg-primary  text-white  py-2 px-4 rounded"
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
