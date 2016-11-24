import React from 'react';

import './ChangeColor.css'

export default class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        }

        this.changeColor = this.changeColor.bind(this);
        this.print = this.print.bind(this);
    }

    changeColor(){
        this.setState({color: event.target.value});
    }

    print(){

        console.log(this.state.color)
    }


    render() {
        return (

            <div>
                <div className="change-color" onChange={this.changeColor}>
                    <div className="circle" value="red" ></div>
                    <div className="circle" color="blue"></div>
                    <div className="circle" color="orange"></div>
                    <div className="circle" color="green"></div>
                    <div className="circle" color="white"></div>
                    <button onClick={this.print}>ok</button>
                </div>
            </div>


        )
    }
}