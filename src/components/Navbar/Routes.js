import React from "react";

function Routes(props) {

    const toggleActive=(index)=>{
        const navs=document.getElementsByClassName("navs");
        console.log(navs.length);
        for(let i=0;i<navs.length;i++){
            navs[i].classList.remove("active");
        };
        navs[index].classList.add("active");
    }
    return (
        <>
            <a href="#aboutme">
                <div className="navs active" onClick={()=>toggleActive(0)}>Home</div>
            </a>
            <a href="#education">
                <div className="navs" onClick={()=>toggleActive(1)}>Education</div>
            </a>
            <a href="#projects">
                <div className="navs" onClick={()=>toggleActive(2)}>Projects</div>
            </a>
            <a href="#getInTouch">
                <div className="navs" onClick={()=>toggleActive(3)}>Get In Touch</div>
            </a>
        </>
    )
}
export default Routes;
