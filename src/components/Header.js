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

                </ul>
            </header>
        </Headroom>
    );
}

export default Header;