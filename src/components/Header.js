import React from "react";
import Headroom from "react-headroom";
import "../styles.scss";

function Header(){
    return(
        <Headroom>
            <div class="header button">
                Button
            </div>
        </Headroom>
    );
}

export default Header;