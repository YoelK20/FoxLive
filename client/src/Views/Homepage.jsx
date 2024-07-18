import React, { useContext } from "react";
import imageCard1 from "../assets/card1.png";
import imageCard2 from "../assets/card2.png";
import imageCard3 from "../assets/card3.png";
import imageCard4 from "../assets/card4.png";
import imageCard5 from "../assets/card5.png";
import imageCard6 from "../assets/card6.png";
import imageCard7 from "../assets/card7.png";
import imageCard8 from "../assets/card8.png";
import imageCard9 from "../assets/card9.png";
import imageCard10 from "../assets/card10.png";
import imageCard11 from "../assets/card11.png";
import gacor from "../assets/gacorgacor.gif";
import { useNavigate } from "react-router-dom";
import { theme } from "../context/ThemeContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { currentTheme } = useContext(theme);
  console.log(currentTheme);

  return (
    <>
      <div
        className="h-screen overflow flex-cols justify-center items-center"
        data-theme={currentTheme}
      >
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
        </a>
        <div className="flex justify-center gap-4 ml-4 pt-10 pl-0">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered-white w-24 md:w-auto h-10 bg-slate-600"
          />
          <button className="w-20 text-white rounded-lg bg-slate-900 border border-2 border-slate-100 hover:bg-slate-600 text-black border border-2 border-slate-100">
            Search
          </button>
        </div>
        <div className="mt-10">
          <h1 id="h1" style={{ color: ["white"] }}>
            {" "}
            Our Cards Game
          </h1>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard1}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard2}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard3}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard4}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard5}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard6}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("//watch");
                }}
                className="rounded"
                src={imageCard7}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard8}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard9}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard10}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard11}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                onClick={() => {
                  navigate("/CardGame");
                }}
                className="rounded"
                src={imageCard1}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard2}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard3}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard4}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard5}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard6}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard7}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard8}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard9}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard10}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard11}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="slide-track1">
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard1}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard2}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard3}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard4}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard5}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard6}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("//watch");
                }}
                className="rounded"
                src={imageCard7}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard8}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard9}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard10}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard11}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                onClick={() => {
                  navigate("/CardGame");
                }}
                className="rounded"
                src={imageCard1}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard2}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard3}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard4}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard5}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard6}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard7}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard8}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard9}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard10}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                onClick={() => {
                  navigate("/watch");
                }}
                className="rounded"
                src={imageCard11}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-[50px]"></div>
        <img id="gacor" src={gacor} />
      </div>
    </>
  );
}
