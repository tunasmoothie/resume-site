import React, { Component } from 'react';

import Block from '../components/Block';
import '../styles.scss';

class IntroSection extends Component{
    render(){
        return(
            <div className='intro-section'>
                <Block />
            </div>
        );
    }
}

export default IntroSection;