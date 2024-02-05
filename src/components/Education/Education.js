import React, { Fragment } from "react";
import Certifications from "../Certifications/Certifications";
import College from "../College/College";

function Education(props) {
    return (
        <Fragment>
            <div id="education">
                <College />
                <div style={{ height: "40px" }}></div>
                <Certifications />
            </div>
        </Fragment>
    )
}
export default Education;
