import React from "react";
import classes from "./exp.module.css";
import ExperienceData from "../../Data/ExperienceData";
import ExpItem from "./ExpItem";
import { useSelector } from "react-redux";

function Exp(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    let ExperienceList = ExperienceData.ExperienceList;
    return (
        <div>
        <h1 style={{ color: nonThemeColor, fontSize: "2.5rem", marginTop: "3rem" }}>
            Experience
        </h1>

        <div id="experiences">
            <div className={classes.experienceList}>
            {ExperienceList.map((item, index) => {
                return <ExpItem key={index} ExperienceData={item} />;
            })}
            </div>
        </div>
        </div>
    );
}

export default Exp;
