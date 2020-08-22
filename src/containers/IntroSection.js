import React, { Component } from 'react';

import '../styles.scss';

class IntroSection extends Component{

    introTitle = document.getElementById("introTitle");

    render(){
        return(
            <div className='intro-section'>
                <p>Your mom is gay.</p>
            </div>
        );
    }
}

export default IntroSection;