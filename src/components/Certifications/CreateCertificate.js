import React from "react";
import { useSelector } from "react-redux";
import Button from "../Widgets/Button";
import classes from "./createCertificate.module.css"
import Cousera  from "../../asset/cousera.png";
import Hackerrank from "../../asset/hackerrank.jpg";
import Orel from "../../asset/orel.jpg";
import ThemeData from "../../Data/ThemeData";

const CreateCertificate = (props) => {
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
    let certImage;
    if (props.item.platform === 'Coursera') {
        certImage = Cousera ;
    }
    if (props.item.platform === 'HackerRank') {
        certImage = Hackerrank;
    }
    if (props.item.platform === 'Orel') {
        certImage = Orel;
    }
    return (
        <div className={classes.certificate} style={{borderColor:uiColor}}>
            <div className={classes.Overlay}>
                <div className={classes.overlayLink}>
                    <a href={props.item.link} id='overlay-text' target="_blank noreferrer">
                        <Button> View Certificate</Button>
                    </a>
                </div>
            </div>
            <div className={classes.certBody}>
                <div className={classes.certImage} style={{ color: nonThemeColor,backgroundColor:certBgColor}}>
                    <img
                        src={certImage}
                        alt="certificate"
                        style={{ width: '100%', height: '100%', borderRadius: '6px'}}
                    />
                </div>
                <div className={classes.certInfo}>
                    <h1 style={{color:nonThemeColor}}>{props.item.title}</h1>
                    <h2 style={{color:uiColor}}>{props.item.instructor}</h2>
                </div>
            </div>
        </div>
    )
}
export default CreateCertificate;
