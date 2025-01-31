import { useNavigate } from "react-router-dom"
import gifJoker from '../assets/gifjoker.gif'
import gifKing from '../assets/king.gif'
import SignUpbutton from "../Components/signup"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl, localUrl } from "../helpers/baseUrl"
import Toastify from "toastify-js"

export default function HomeLogin(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleLogin(e) {
    try {
      e.preventDefault();
      const { data } = await axios.post(`${baseUrl}/login`, { username, password });
      console.log(username, password);
      const token = data.access_token
      localStorage.access_token = token
      localStorage.username = data.username
      nav("/")
    } catch (error) {
        console.log(error);
        // console.log(error.response.data.message)
        Toastify({
          text: error.response.data.message,
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
    }
  }

  useEffect(() => {
    SignUpbutton()
  },[])
  return (
    <>
      {/* component */}
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
                  <h1 id="h1" className="text-black">Sign In</h1>
                  <div className="social-container">
                    <a href="#" className="social">
                      <img src="data:image/png;base64,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"/>
                    </a>
                    <a href="#" className="social">
                    <img src="data:image/png;base64,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"/>
               
                    </a>
                    <a href="#" className="social">
                    <img src="data:image/jpeg;base64,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"/>
                  
                    </a>
                  </div>
                  <p id="p">or use your account </p>
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
                  <a onClick={() => nav("/register")} className="cursor-pointer">Dont Have Account ?</a>
                  <button id="button1" onClick={handleLogin}>Sign in</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-left" style={{backgroundImage:`url(${gifJoker})`}}>
                    <button id="signIn" > Sign In</button>
                  </div>
                  <div className="overlay-right" style={{backgroundImage: `url(${gifKing})`}}>
                    <button id="signUp" onClick={() => nav("/register")}> Sign Up</button>
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
  )
}