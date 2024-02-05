import React from "react";
import Button from "../Widgets/Button";
import classes from "./competitions.module.css";
import CreateCompetitions from "./CreateCompetitions";
import CompetitionData from "../../Data/CompetitionData"
import { useSelector } from "react-redux";

const Competitions = (props) => {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let CompetitionList = CompetitionData.competitionList;

    return (
        <React.Fragment>
            <h1 style={{color:nonThemeColor}}>Competitions</h1>
            
            <div className={classes.competitionCard}>
                {CompetitionList.map((item, index) => {
                    return (
                        <CreateCompetitions key={index} item={item}/>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Competitions;
