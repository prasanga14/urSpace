import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/apiurl';

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState('');

  const navigate = useNavigate();

  let showButtons = localStorage.getItem('id') ? false : true;

  const handleLogin = () => {
    if (localStorage.getItem('id')) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const loggedUserId = localStorage.getItem('id');

  useEffect(() => {
    try {
      if (loggedUserId === null) return;
      const getLoggedUser = async () => {
        const { data } = await axios.get(
          `${BASE_URL}/api/user/${loggedUserId}`
        );
        const requiredData = { ...data.requiredUser };
        setLoggedUser(requiredData);
      };
      getLoggedUser();
    } catch (error) {
      console.log(error.message);
    }
  }, [loggedUserId]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleProfile = () => {};

  return (
    <nav className="flex text-primary h-20 items-center">
      <div className="logo font-bold text-2xl mx-2 cursor-pointer">urSpace</div>
      <ul className="flex mx-12 justify-center items-center">
        <li className="mx-5 hover:underline">
          <a href="/">Home</a>
        </li>
        <li className="mx-5 hover:underline">
          <a href="/">Create Room</a>
        </li>
        <li className="mx-5 hover:underline">
          <a href="/">Github</a>
        </li>
        <li className="mx-5 hover:underline">
          <a href="/ide">IDE</a>
        </li>
        {showButtons ? (
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
        ) : (
          <div className="buttons fixed top-0 right-0 flex items-center justify-center p-4">
            <>
              <img
                className="w-11 px-1 rounded"
                src={loggedUser.profilePicture}
                alt="userImage"
              />
              <button onClick={handleProfile}>{loggedUser.username}</button>
            </>
            <div className="px-5 cursor-pointer" onClick={handleLogout}>
              logout
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
