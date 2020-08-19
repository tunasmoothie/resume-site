import React, { Component } from "react";
import { render } from "react-dom";
import "../styles.css";

class MainBG extends Component{
    constructor(){
        super()
        this.state = {
            isBlurred: 0
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
      }

    handleScroll = () => {
        if(window.pageYOffset < 1){
            this.setState({isBlurred: 0})
        }
        else{
            this.setState({isBlurred: 1})
        }
    }

    render(){
        return(
            <div className={`main-bg ${this.state.isBlurred ? 'blurred' : ''}`}>
            </div>
        )
    }
}

export default MainBG;