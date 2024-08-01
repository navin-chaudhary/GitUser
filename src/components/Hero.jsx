import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Profile from "./Profile";
import Spinner from './Spiner'


function Hero() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [error, setError] = useState(null);
  const [loading,setloading]=useState(false)

  const handlesubmit = async (e) => {
    e.preventDefault();
   setloading(true)
   setError(null);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setProfile(response.data);
      document.title = `${username}'s Profile | GithubUser`;
      setShowProfile(true);
      setUsername("");
    } catch (error) {
      setloading(false)
      setError("Invalid username ");
    }
  };

  return (
    <div className=" w-full h-[90vh] flex justify-center items-center">
      {showProfile ? (
        <Profile profile={profile} />
      ) : (
        <form onSubmit={handlesubmit}>
          <div className="containers bg-white h-12  rounded-lg pl-3">
            <button type="submit">
              <img src={"search.png"} alt="" className="h-8  opacity-[0.5]" />
            </button>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="h-12 rounded-lg "
              type="text"
              placeholder="Enter Github Username"
            />
          </div>
          <div className="flex  justify-center">
           {error && <h1 style={{ color: 'red' }}>{error}</h1>}
           </div>
          <div className="flex  justify-center">
           {loading && <Spinner/>}
           </div>
        </form>
      )}
    </div>
  );
}

export default Hero;
