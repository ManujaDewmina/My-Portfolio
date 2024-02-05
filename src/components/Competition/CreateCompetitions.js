import React from "react";
import { useSelector } from "react-redux";
import Button from "../Widgets/Button";
import classes from "./createCompetitions.module.css"
import Huwaie  from "../../asset/huawei.jpg";
import Orel from "../../asset/orel.jpg";
import ThemeData from "../../Data/ThemeData";

const CreateCompetition = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    const activeMode=useSelector(state=>state.mode);
    let certBgColor;
    if(activeMode==='light'){
        certBgColor=ThemeData.certBgLight;
    }
    else{
        certBgColor=ThemeData.certBgDark;
    }
    let compImg;
    if (props.item.orgernizer === 'Huwaie') {
        compImg = Huwaie ;
    }
    if (props.item.orgernizer === 'Orel') {
        compImg = Orel;
    }
    return (
        <div className={classes.competition} style={{borderColor:uiColor}}>
            <div className={classes.Overlay}>
                <div className={classes.overlayLink}>
                    <a href={props.item.link} id='overlay-text' target="_blank noreferrer">
                        <Button> View Competition</Button>
                    </a>
                </div>
            </div>
            <div className={classes.compBody}>
                <div className={classes.compImage} style={{ color: nonThemeColor,backgroundColor:certBgColor}}>
                    <img
                        src={compImg}
                        alt="competition"
                        style={{ width: '100%', height: '100%', borderRadius: '6px'}}
                    />
                </div>
                <div className={classes.compInfo}>
                    <h1 style={{color:nonThemeColor}}>{props.item.title}</h1>
                    <h2 style={{color:uiColor}}>{props.item.place}</h2>
                </div>
            </div>
        </div>
    )
}
export default CreateCompetition;
