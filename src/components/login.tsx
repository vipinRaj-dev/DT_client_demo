import React, { useState } from "react";
import ustIcon from "../assets/UST(Small)Icon.svg";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/infraSummary");
  };

  return (
    <div className="flex h-screen">
      <div
        className="relative flex justify-center items-center bg-gray-300"
        style={{ width: "65vw", background: "#F7F6F6" }}
      >
        <img
          src={ustIcon}
          alt="Icon"
          className="absolute top-4 left-4 w-12 h-12"
        />
        <Player
          src={"/Lottie/LoginPageLottie.json"}
          loop
          autoplay
          className=""
        />

        {/* <img src={leftImage} alt="Centered Image" className="w-1/2 h-auto" /> */}
      </div>

      <div
        className="bg-white flex justify-center items-center"
        style={{ width: "35vw" }}
      >
        <div className="w-3/4">
          <h2
            className="text-2xl mb-6 text-center"
            style={{ color: "#006E74" }}
          >
            <b>UST</b> DiscoveryTool
          </h2>
          <h6
            className="text-sm mb-6 text-center"
            style={{ color: "#006E74", marginTop: "-16px" }}
          >
            Welcome! Please enter your credentials
          </h6>
          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
            <div className="w-full">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="text-white py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: "#2FA1A7", width: "6vw" }}
            >
              Sign in
            </button>
          </form>
          {/* {error && <p className="text-red-500 text-sm mt-4">{error}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Login;
