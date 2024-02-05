import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './navbar.css';
import { themeActions } from "../../theme/theme";
import Routes from "./Routes";

const Navbar = () => {

    const menuRef = useRef();
    // const dispatch = useDispatch();
    const activeNavRoute = useLocation();   
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    // const mode = useSelector(state => state.mode);
    const bgColor = useSelector(state => state.theme.backgroundColor);
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    // function handleModeChange() {
    //     const lightModeBtn = document.getElementById("lightModeBtn")
    //     const darkModeBtn = document.getElementById("darkModeBtn")
    //     if (mode === 'light') {
    //         lightModeBtn.style.display = "none";
    //         darkModeBtn.style.display = "block";
    //         darkModeBtn.style.color = "black";
    //     }
    //     else {
    //         lightModeBtn.style.display = "block";
    //         darkModeBtn.style.display = "none";
    //         lightModeBtn.style.color = "white";
    //     }
    //     dispatch(themeActions.toggleMode());
    // }

    function handleDropDown() {
        setIsDropDownVisible((prevState) => !prevState);
    }
    
    let systemTheme='light';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        systemTheme='dark';
    }

    // useEffect(() => {
    //     if (systemTheme==='dark') {
    //         handleModeChange();
    //     }
    // }, [systemTheme]);

    useEffect(() => {
        handleDropDown();
        menuRef.current.checked = false;
    }, [activeNavRoute])

    return (
        <div className="main">
            <div className="navbar" style={{ backgroundColor: bgColor }}>
                <div className="navsContainer" style={{ color: nonThemeColor }}>
                    <Routes />
                </div>
                <div className="selectTheme">
                    {/* <div className="selectMode" onClick={handleModeChange}>
                        <div id="lightModeBtn" style={{ color: "white" }}><LightModeIcon /></div>
                        <div id="darkModeBtn" style={{ display: "none" }}><DarkModeIcon /></div>
                    </div> */}

                    <input type="checkbox" onClick={handleDropDown} ref={menuRef} id="burger-toggle" />
                    <label htmlFor="burger-toggle" className="burger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                </div>
            </div>
            {isDropDownVisible && <div className="mob-nav" style={{ color: 'white' }}>
                <Routes />
            </div>}
        </div>
    )
}

export default Navbar;
