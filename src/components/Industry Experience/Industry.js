import React from "react";
import classes from "./industry.module.css";
import IndustryData from "../../Data/IndustryData";
import IndustryItem from "./IndustryItem";
import { useSelector } from "react-redux";

function Industry(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    let IndustryList = IndustryData.IndustryList;
    const uiColor=useSelector(state=>state.uiColor);
    return (
        <div style={{marginTop:"2rem"}}>
            <h1><span style={{ color: nonThemeColor, fontSize:"2.5rem"}}>Industry </span><span style={{ color: uiColor, fontSize:"2.5rem" }}>Experience</span></h1>
            
            <div id="industries">
                <div className={classes.industryList}>
                {IndustryList.map((item, index) => {
                    return <IndustryItem key={index} IndustryData={item} />;
                })}
                </div>
            </div>
        </div>
    );
}

export default Industry;
