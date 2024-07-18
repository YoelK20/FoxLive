import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { localUrl } from "../helpers/baseUrl";

export default function RegPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleRegister(e) {
    try {
      e.preventDefault();
      const { data } = await axios.post(`${localUrl}/register`, { username , password });
      nav("/login")
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://i2.pickpik.com/photos/948/699/787/playing-cards-poker-bridge-game-preview.jpg')] bg-cover blur-sm"></div>
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-700">
              Register
            </h1>
            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="text-base label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full input input-bordered"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <div>
                <button 
                className="btn-neutral btn btn-block"
                onClick={handleRegister}
                >Register</button>
              </div>
              <p className="text-xs flex justify-center">Already have account ?</p>
              <a
                onClick={() => nav("/login")}
                className="text-xs text-gray-600 hover:underline hover:text-blue-600 flex justify-center"
              >
                <p> Login </p>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
