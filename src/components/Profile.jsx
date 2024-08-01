import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = ({ profile }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        if (profile && profile.repos_url) {
          const response = await axios.get(profile.repos_url);
          setRepos(response.data);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepos();
  }, [profile]);



  return (
    <>
      {profile && (
        <div className="w-full h-full  ">
          <div class="flex items-center w-full h-[50vh]  justify-center">
            <div className="flex flex-col sm:flex-row gap-2 lg:gap-14 w-[600px ] mt-16 justify-center items-center">
              <div class="w-40 h-40 sm:w-25 sm:h-25 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-blue-500 ">
                <img
                  src={profile.avatar_url}
                  alt={`${profile.login}'s avatar`}
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="ml-4">
                <h2 class="text-[14px]">
                  <span className="text-2xl  font-bold capitalize">
                    {profile.name}
                  </span>
                  {profile.company}
                </h2>
                <p class="text-gray-500">About :{profile.bio}</p>
                <div class="flex space-x-4 mt-2">
                  <span class="text-blue-500">
                    {profile.followers}Followers
                  </span>
                  <span class="text-blue-500">
                    {profile.following}Following
                  </span>
                </div>
                <p class="text-gray-500 mt-2">
                  Joined on :{profile.created_at}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex cursor-pointer">
                    <Link to={profile.blog} className="flex">
                      <img src="link.png" alt="" className="h-6 -rotate-45" />
                      <p>{profile.blog}</p>
                    </Link>
                  </div>
                  <div className="flex cursor-pointer">
                    <Link to={profile.html_url} className="flex">
                      <img
                        src="GitHub.png"
                        alt=""
                        className="h-6 rounded-[50%]"
                      />
                      <p>{profile.login}</p>
                    </Link>
                  </div>
                  <div className="flex">
                    <img src="location.png" alt="" className="h-6" />
                    <p>{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pb-4">
            <div className="w-full flex justify-center text-bold text-2xl">
              <h2>Repositories</h2>
            </div>
            <div className="repo-list mt-6 ">
              {repos.map((repo, index) => (
                <div key={index} className="repo-card  w-80 lg:w-96">
                  <img src="folder.png" alt="" className="repo-icon" />
                  <div className="repo-details">
                    <h3 className="font-bold uppercase">{repo.name}</h3>
                    <p>{repo.description}</p>
                    <span>
                      Created on:{" "}
                      {new Date(repo.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="repo-infos flex">
                    <img src="star.png" alt="" className="info-icon" />
                    {repo.stargazers_count}

                    <img src="forks.svg" alt="" className="info-icon" />
                    {repo.forks}

                     <a href={repo.html_url} className="visit-link">
                      <img src="GitHub.png" alt="" className="info-icon" />
                      <span className="text-blue-600"> Visit</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
