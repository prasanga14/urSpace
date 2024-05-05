import React from 'react';

const ShowRepo = ({ repo, githubUsername }) => {
  return (
    <div className="container flex flex-col bg-tartiary text-white h-64 w-72 m-10 p-2">
      <div>
        <img src={repo.owner.avatar_url} alt="" className=" w-12" />
        <h1>Owner: {repo.owner.login}</h1>
        <p>Repo Name: {repo.name}</p>
        <a href={repo.clone_url} target="_blank">
          URL: <span>{repo.clone_url}</span>
        </a>
      </div>
    </div>
  );
};

export default ShowRepo;
