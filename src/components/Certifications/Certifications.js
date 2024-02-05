import React from "react";
import Button from "../Widgets/Button";
import SocialData from "../../Data/SocialData";
import classes from "./certifications.module.css";
import CreateCertificate from "./CreateCertificate";
import CertificatesData from "../../Data/CertificatesData"
import { useSelector } from "react-redux";

const Certifications = (props) => {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let certificationsList = CertificatesData.certificationsList;

    return (
        <React.Fragment>
            <h1 style={{color:nonThemeColor, marginTop:"3rem"}}>Certificates</h1>
            
            <div className={classes.certificateCard}>
                {certificationsList.map((item, index) => {
                    return (
                        <CreateCertificate key={index} item={item}/>
                    )
                })}
            </div>

            <div className={classes.moreCertificate}>
                <a target="_blank" rel="noreferrer" href={`${SocialData.linkedInLink}/details/certifications/`}>
                    <Button className={classes.moreCertificateBtn}>More Certificates</Button>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Certifications;
