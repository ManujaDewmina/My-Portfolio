import React from "react";
import classes from "./college.module.css";
import EducationData from "../../Data/EducationData";
import CollegeItem from "./CollegeItem";
import { useSelector } from "react-redux";

function College(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    let EducationList = EducationData.EducationList;
    return (
        <div>
        <h1 style={{ color: nonThemeColor, fontSize: "2.5rem", marginTop: "3rem" }}>
            My Education
        </h1>

        <div id="colleges">
            <div className={classes.collegeList}>
            {EducationList.map((item, index) => {
                return <CollegeItem key={index} EducationData={item} />;
            })}
            </div>
        </div>
        </div>
    );
}

export default College;
