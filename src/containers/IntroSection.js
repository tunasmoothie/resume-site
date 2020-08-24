import React, { Component } from 'react';

import '../styles.scss';


const introTitle = document.getElementById("target");

function intersectHandler(entries, observer){
    console.log("interstct");
}

let intersectObserver = new IntersectionObserver(intersectHandler);
window.onload = function(){
    //intersectObserver.observe(document.getElementById('target'));
    console.log("interstct");
}

class IntroSection extends Component{

    render(){

        return(
            <div className='intro-section'>
                <div id='target'></div>
                <p>Your mom is gay.</p>
            </div>
        );
    }
}

export default IntroSection;