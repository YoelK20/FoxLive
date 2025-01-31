import { Link } from "react-router-dom";





export default function WatcherPage(){

    return(
        <>
        <a href="https://codepen.io/uiswarup/full/vYPxywO" target="_blank">
          <header className="top-header"></header>
          {/*dust particel*/}
          <div>
            <div className="starsec" />
            <div className="starthird" />
            <div className="starfourth" />
            <div className="starfifth" />
          </div>
          {/*Dust particle end-*/}
          <div className="lamp__wrap">
            <div className="lamp">
              <div className="cable" />
              <div className="cover" />
              <div className="in-cover">
                <div className="bulb" />
              </div>
              <div className="light" />
            </div>
          </div>
          {/* END Lamp */}
        </a>
        <section className="error">
          <a href="https://codepen.io/uiswarup/full/vYPxywO" target="_blank">
            {/* Content */}
          </a>
          <div className="error__content">
            <a href="https://codepen.io/uiswarup/full/vYPxywO" target="_blank">
              <div className="error__message message">
                <h1 className="message__title" style={{color: ['grey']}}>Game Under Development</h1>
                <p className="message__text" style={{color: ['grey']}}>
                  We're sorry, the game that u wanted to play is under development. Please
                  try again, or take a look at our playable game, you can click the button below
                </p>
              </div>
            </a>
            <div className="error__nav e-nav">
              <a href="https://codepen.io/uiswarup/full/vYPxywO" target="_blank"></a>
              <Link
                to="/"
                className="e-nav__link"
              />
            </div>
          </div>
          {/* END Content */}
        </section>
      </>
      
    )
}