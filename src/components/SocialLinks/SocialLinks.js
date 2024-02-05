import React from "react";
import { useSelector } from "react-redux";

import classes from "./socialLinks.module.css";
import SocialData from "../../Data/SocialData";

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialLinks = (props) => {
    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    return (
        <div className={`${classes.socialLinks} ${props.className}`} style={{color:nonThemeColor}}>
            <a href={SocialData.githubLink} target="_blank" rel="noreferrer" ><GitHubIcon fontSize="large" /></a>
            <a href={SocialData.linkedInLink} target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" /></a>
            <a href={SocialData.twitterLink} target="_blank" rel="noreferrer"><TwitterIcon fontSize="large" /></a>
            <a href={SocialData.instaLink} target="_blank" rel="noreferrer"><InstagramIcon fontSize="large" /></a>
            <a href={SocialData.emailLink} target="_blank" rel="noreferrer"><EmailIcon fontSize="large" /></a>
        </div>
    )
};
export default SocialLinks;
