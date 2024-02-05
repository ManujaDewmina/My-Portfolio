import React from "react";
import { useSelector } from "react-redux";
import Card from "../Widgets/Card";
import classes from "./industryItem.module.css";

const IndustryItem = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    return (
        <Card className={classes.IndustryItem}>
            <div className={classes.column}>
            <div className={classes.logo}>
                <img src={props.IndustryData.Logo} alt={props.IndustryData.CompanyName} />
            </div>
            <div>
                <div className={classes.industryInfo}>
                    <h3 style={{ color: uiColor }}>{props.IndustryData.StartYear} - {props.IndustryData.EndYear}</h3>
                    <h1>{props.IndustryData.companyName}</h1>
                    <h2 style={{ color: uiColor }}>{props.IndustryData.Position}</h2>
                </div>
                <ul className={classes.details} style={{color: nonThemeColor}}>
                    {props.IndustryData.details.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
            </div>
        </Card>
    )
}

export default IndustryItem;
