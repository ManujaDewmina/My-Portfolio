import React from "react";
import { useSelector } from "react-redux";
import Card from "../Widgets/Card";
import classes from "./collegeItem.module.css";

const CollegeItem = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    return (
        <Card className={classes.CollegeItem}>
            <div className={classes.degreeInfo}>
                <h3 style={{ color: uiColor }}>{props.EducationData.couseStartYear} - {props.EducationData.courseEndYear}</h3>
                <h1>{props.EducationData.collegeName}</h1>
                <h2 style={{ color: uiColor }}>{props.EducationData.courseName}</h2>
            </div>
            <ul className={classes.details} style={{color: nonThemeColor}}>
                {props.EducationData.details.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </Card>
    )
}

export default CollegeItem;
