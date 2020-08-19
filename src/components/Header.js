import React from "react";
import Headroom from "react-headroom";
import HomeButton from "./HomeButton";
import "../styles.css";

function Header(){
    return(
        <Headroom>
            <header class="header-box">
                <HomeButton />
                <ul class="header-ul">
                    <li> <a href='#'>Education</a> </li>
                    <li> <a href='#'>Skills</a> </li>
                    <li> <a href='#'>Experience</a> </li>
                </ul>
            </header>
        </Headroom>
    );
}

export default Header;