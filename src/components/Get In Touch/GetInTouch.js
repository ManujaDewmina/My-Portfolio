import React from "react";
import { useSelector } from "react-redux";
import classes from "./getInTouch.module.css";
import PersonalData from "../../Data/PersonalData";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';

const data = [PersonalData.address,PersonalData.email, PersonalData.mobNo];

const GetInTouch = (props) => {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    const Icons=[<LocationOnIcon fontSize="small"/>,<SendIcon fontSize="small"/>,<CallIcon fontSize="small"/>];

    const contactDetails = data.map((item, index) =>
        <div className={classes.contactCard} style={{color:nonThemeColor}} key={index}>
            <div className={classes.contactIcon} style={{backgroundColor:uiColor}}>{Icons[index]}</div>
            <div className={classes.contactValue}>{item}</div>
        </div>
    );

    return (
        <div className={classes.getInTouch} style={{borderColor:uiColor}}>
            <div className={classes.getInTouchCard}>
                <h1 style={{color:nonThemeColor}}>Get In Touch</h1>
                <p>I would love to hear from you, so whether you need a quote, have a question or just want to say hello, please feel free to drop me a line.</p>
                <div>
                    {contactDetails}
                </div>
            </div>        </div>
    )
};
export default GetInTouch;