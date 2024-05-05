import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios, { all } from 'axios';
import toast from 'react-hot-toast';
import ShowRepo from '../components/ShowRepo';

const Github = () => {
  const [githubUsername, setGitubUsername] = useState('');
  const [allRepos, setAllRepos] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (githubUsername === '') toast.error('Username Required');
    setGitubUsername('');

    async function getGithubUser(githubUsername) {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${githubUsername}/repos`
        );
        setAllRepos(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getGithubUser(githubUsername);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-2/3 w-2/3 flex-col items-center">
        <form className=" border-4 p-8">
          <input
            className=" p-5"
            type="text"
            placeholder="Enter github username"
            value={githubUsername}
            onChange={(e) => setGitubUsername(e.target.value)}
          />
          <button
            className=" w-24 rounded-xl hover:text-white ml-8 bg-tartiary"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>

        <div className="showAllRepos flex m-5 flex-wrap justify-center items-center w-full h-full">
          {allRepos.map((repo) => (
            <ShowRepo
              repo={repo}
              key={repo.id}
              githubUsername={githubUsername}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Github;
