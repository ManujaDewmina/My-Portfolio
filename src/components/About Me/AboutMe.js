import React, { Fragment } from "react";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { useSelector } from "react-redux";
import classes from "./aboutMe.module.css";
import PersonalData from "../../Data/PersonalData";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../Widgets/Button";
import profileAvatar from "../../asset/official.png";
import { autoTypeData } from "../../Data/PersonalData";

const AboutMe = () => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);
  function handleTyper() {
    let textItems = autoTypeData;
    var autoTyper = document.getElementById("typer");
    new Typewriter(autoTyper, {
      strings: textItems,
      autoStart: true,
      pauseFor: 1000,
      loop: true,
    });
  }
  useEffect(handleTyper, []);
  return (
    <Fragment>
      <div className={classes.contactMe} id="aboutme">
        <div className={classes.avatar}>
          <h1 className={classes.greeting}>Hi There !</h1>
          <h2>
            I'm &nbsp;
            <span id="name" style={{ color: uiColor }}>
              {PersonalData.firstName}&nbsp;{PersonalData.lastName}
            </span>
          </h2>
          <img
            src={profileAvatar}
            alt="Profile"
            style={{ borderColor: uiColor }}
          />
          <div className={classes.autoText}>
            I am a &nbsp; <span id="typer" style={{ color: uiColor }}></span>
          </div>
        </div>

        <div className={classes.contactCard}>
          <div>{PersonalData.aboutMe}</div>
          <div className={classes.contactLinks}>
            <SocialLinks className={classes.links} />
          </div>
          <a href={PersonalData.resumeLink} target="_blank noreferrer">
            <Button className={classes.resumeBtn}>See My Resume</Button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;
