import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import gifJoker from '../assets/gifjoker.gif'
import gifKing from '../assets/king.gif'
import SignUpbutton from "../Components/signup"
import { baseUrl, localUrl } from "../helpers/baseUrl";

export default function RegPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleRegister(e) {
    try {
      e.preventDefault();
      const { data } = await axios.post(`${baseUrl}/register`, { username , password });
      nav("/login")
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
    <div className="h-screen bg-[url('https://i2.pickpik.com/photos/948/699/787/playing-cards-poker-bridge-game-preview.jpg')] bg-cover blur-sm">
    </div>
      <div className="mx-5 flex items-center justify-center absolute top-[120px] w-[90%] overflow-hidden ml-[60px]">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center justify-center bg-transparent rounded min-h-[100%] m-[10%]">
            <div className="container" id="main">
              <div className="sign-up">
                <form action="#">
                  <h1 id="h1" className="text-black">Create Account</h1>
                  <div className="social-container">
                    <a href="#" className="social">
                    <img src=""/>
                    </a>
                    <a href="#" className="social">
                    <img src=""/>
                    </a>
                    <a href="#" className="social">
                    <img src=""/>
                    </a>
                  </div>
                  <p>or use your email for registration </p>
                  <input type="text" name="txt" placeholder="Name" required="" />
                  <input type="email" name="email" placeholder="Email" required="" />
                  <input
                    type="password"
                    name="paswword"
                    placeholder="Password"
                    required=""
                  />
                  <button>Sign Up</button>
                </form>
              </div>
              <div className="sign-in">
                <form action="#">
                  <h1 id="h1" className="text-black">Register</h1><br />
                  <input type="text"
                  placeholder="Username"
                  className="bg-slate-200 mb-3 h-10 p-4"
                  onChange={(e) => setUsername(e.target.value)}/>
                  <input
                    type="password"
                    placeholder="Password"
                    required=""
                     className="bg-slate-200 mb-3 h-10 p-4"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <a href="#">Forget Your Password ?</a>
                  <button id="button1" onClick={handleRegister}>Sign Up</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-left" style={{backgroundImage:`url(${gifKing})`}}>
                    <button id="signIn" > Sign Up</button>
                  </div>
                  <div className="overlay-right" style={{backgroundImage: `url(${gifJoker})`}}>
                    <button id="signUp" onClick={() => nav("/login")}> Sign In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script>
        </script>
      </div>
    </>
  );
}
