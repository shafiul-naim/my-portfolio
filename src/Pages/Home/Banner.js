import React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import image from "../../images/naim-bg2.png";
import { saveAs } from "file-saver";

const Banner = () => {
  const [state] = useState({
    title: "Hello There",
    titleTwo: "I'm",
    titleThree: "Shafiul Islam",
  });

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/161bV1aEWin6l1jrAvvr2KaHxZzIFRvo4/view?usp=sharing",
      "Shafiul's resume.pdf"
    );
  };

  return (
    <>
      <div className="home">
        <div className="home-intro">
          <h2>
            <div className="title">{state.title}</div>
            <div className="titleTwo">{state.titleTwo}</div>
            <div className="titleThree">{state.titleThree}</div>
          </h2>
          <div className="text">
            <Typewriter
              options={{
                autostart: true,
                loop: true,
                delay: 80,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("I'm A Web Developer")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm a enthusiast")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm a designer")
                  .start();
              }}
            />
          </div>
          <div className="my-resume">
            <button onClick={saveFile} className="button" download>My resume</button>
          </div>
        </div>
        <div className="home-img">
          <img className="profile-img mask mask-circle" src={image} alt="Profile" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#010a13" fill-opacity="1" d="M0,320L80,272C160,224,320,128,480,128C640,128,800,224,960,261.3C1120,299,1280,277,1360,266.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </>
  );
};

export default Banner;
