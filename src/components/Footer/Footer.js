import React from "react";
import GetInTouch from "../Get In Touch/GetInTouch";
import PersonalData from "../../Data/PersonalData";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.module.css";
import { useSelector } from "react-redux";

function Footer(){
    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    let currentYear=new Date().getFullYear();
    return(
        <div id="getInTouch">
            <GetInTouch/>
        <footer className="centered" style={{color:nonThemeColor}}>
            <CopyrightIcon/>
            &nbsp;{currentYear}
            &nbsp;Coded By&nbsp;<span style={{fontWeight:"600"}}> {PersonalData.firstName}&nbsp;{PersonalData.lastName}</span>
        </footer>
        </div>
    )
}
export default Footer;
