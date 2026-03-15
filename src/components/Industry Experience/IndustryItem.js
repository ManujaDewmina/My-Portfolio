import React from "react";
import { useSelector } from "react-redux";
import Card from "../Widgets/Card";
import classes from "./industryItem.module.css";

const IndustryItem = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);
    const data = props.IndustryData;

    return (
        <Card className={classes.IndustryItem}>
            <div className={classes.column}>
            <div className={classes.logo}>
                <img src={data.Logo} alt={data.companyName} />
            </div>
            <div>
                <div className={classes.industryInfo}>
                    <h3 style={{ color: uiColor }}>{data.StartYear} - {data.EndYear}</h3>
                    <h1>{data.companyName}</h1>
                    {data.description && (
                        <p className={classes.description} style={{color: nonThemeColor}}>{data.description}</p>
                    )}
                    {data.positions ? (
                        data.positions.map((pos, idx) => (
                            <div key={idx} className={classes.positionBlock}>
                                <h2 style={{ color: uiColor }}>{pos.title}</h2>
                                <h3 style={{ color: uiColor }}>{pos.StartYear} - {pos.EndYear}</h3>
                                <ul className={classes.details} style={{color: nonThemeColor}}>
                                    {pos.details.map((item, index) =>
                                        <li key={index}>{item}</li>
                                    )}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <>
                            <h2 style={{ color: uiColor }}>{data.Position}</h2>
                            <ul className={classes.details} style={{color: nonThemeColor}}>
                                {data.details.map((item, index) =>
                                    <li key={index}>{item}</li>
                                )}
                            </ul>
                        </>
                    )}
                </div>
            </div>
            </div>
        </Card>
    )
}

export default IndustryItem;
