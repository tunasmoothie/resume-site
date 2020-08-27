import React, { Component } from 'react';

import '../styles.scss';

class IntroSection extends Component{
    constructor(){
        super()
        this.state = {
            isVisible: false
        }
    }



    render(){
        const intersectObserver = new IntersectionObserver(this.intersectHandler, {threshold: 0.1});
    
        window.onload = function(){
            intersectObserver.observe(document.querySelector('#intro-section'));
        }
        return(
          <div id='intro-section' className={`intro-section ${this.state.isVisible ? '' : 'hidden'}`}>
            <p className='test'>sesfd</p>
          </div>
        );
    }

}

export default IntroSection;