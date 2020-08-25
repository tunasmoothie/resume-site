import React, { Component, useState } from 'react';

import '../styles.scss';

class IntroSection extends Component{
    constructor(){
        super()
        this.state = {
            isVisible: false
        }
    }

    isVisible = false;

    intersectHandler = (entries, options) =>{
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                console.log(this.isVisible);
                this.isVisible = !this.isVisible;
                this.setState({isVisible: this.isVisible}); 
            } else {}
        });
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