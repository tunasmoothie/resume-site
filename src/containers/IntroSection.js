import React, { Component, useState } from 'react';

import '../styles.scss';

class IntroSection extends Component{
    constructor(){
        super()
        this.state = {
            isVisible: true
        }
    }

    isVisible = false;

    intersectHandler = () =>{
        this.setState({isVisible: this.isVisible}); 
        this.isVisible = !this.isVisible;
    }

    render(){
        const intersectObserver = new IntersectionObserver(this.intersectHandler, {threshold: 0.1});
    
        window.onload = function(){
            intersectObserver.observe(document.querySelector('#targeto'));
        }
        return(
          <div id='targeto' className={`intro-section ${this.state.isVisible ? '' : 'hidden'}`}>
            <p>sesfd</p>
          </div>
        );
    }

}

export default IntroSection;