import { useNavigate } from "react-router-dom"


export default function HomeLogin() {
  const navigate = useNavigate()

  return (
    <>
      {/* component */}
      <div className="h-screen bg-[url('https://i2.pickpik.com/photos/948/699/787/playing-cards-poker-bridge-game-preview.jpg')] bg-cover blur-sm">
      </div>
      <div className="mx-5 flex items-center justify-center absolute top-[200px] w-[90%] overflow-hidden ml-[60px]">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center justify-center bg-transparent rounded min-h-[100%] m-[10%]">
            <div className="container" id="main">
              <div className="sign-up">
                <form action="#">
                  <h1 id="h1" className="text-black">Create Account</h1>
                  <div className="social-container">
                    <a href="#" className="social">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="social">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="social">
                      <i className="fab fa-facebook-f" />
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
                      <img src="" />
                    </a>
                    <a href="#" className="social">
                    <img src="" />
                    </a>
                    <a href="#" className="social">
                    <img src="" />
                    </a>
                  </div>
                  <p>or use your account </p>
                  <input type="email" name="email" placeholder="Email" required=""/>
                  <input
                    type="password"
                    name="paswword"
                    placeholder="Password"
                    required=""
                  />
                  <a href="#">Forget Your Password ?</a>
                  <button id="button1">Sign in</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-left">
                    <h1 id="h1" className="text-black">Welcome Back</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button id="signIn"> Sign In</button>
                  </div>
                  <div className="overlay-right">
                    <h1 id="h1" className="text-black">Hello Friend</h1>
                    <p>Come On , start your journey with us</p>
                    <button id="signUp"> Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}