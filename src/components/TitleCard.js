import React, { Component } from "react";
import "../styles.scss";

class TitleCard extends Component{
    constructor(){
        super()
        this.state = {
            isVisible: 1
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
      }

    handleScroll = () => {
        if(window.pageYOffset < 200){
            this.setState({isVisible: 1})
        }
        else{
            this.setState({isVisible: 0})
        }
    }

    render(){
        return(
            <div className={`title-card ${this.state.isVisible ? '' : 'hidden'}`}>
                <div className="hello">
                    <div class="error mx-auto" data-text="Welcome.">Welcome.</div>
                </div>
            </div>
        )
    }
}

export default TitleCard;