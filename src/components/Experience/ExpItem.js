import React from "react";
import { useSelector } from "react-redux";
import Card from "../Widgets/Card";
import classes from "./expItem.module.css";

const ExpItem = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    return (
        <Card className={classes.ExpItem}>
            <div className={classes.expInfo}>
                <h3 style={{ color: uiColor }}>{props.ExperienceData.StartYear} - {props.ExperienceData.EndYear}</h3>
                <h1>{props.ExperienceData.Name}</h1>
                <h2 style={{ color: uiColor }}>{props.ExperienceData.Position}</h2>
            </div>
        </Card>
    )
}

export default ExpItem;
