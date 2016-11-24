import React from 'react';

import './InputArea.css'

import './NotesApp.jsx'

import './ChangeColor.css'

import ChangeColor from  './ChangeColor.jsx'

export default class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            color: 'white'

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleChoseColor = this.handleChoseColor.bind(this);

    }

    handleChange(event) {
        this.setState({text: event.target.value });
    }



    handleChoseColor(){
        this.setState({vc: 'green'});
    }


    handleNoteAdd() {
        const newNotes = {
            text: this.state.text,
            color: this.state.vc,
            id: Date.now()
        };

        this.props.addText(newNotes);
        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="input-area">
                <textarea type="text"
                       className="input"
                       rows = "6"
                       value={this.state.text}
                       onChange={this.handleChange}
                />
                <ul className="change-color" >
                    <div className="circle" onClick={this.handleChoseColor} value={this.state.green}></div>
                    <div className="circle" ></div>
                    <div className="circle" ></div>
                    <div className="circle" ></div>
                    <div className="circle" ></div>
                </ul>
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>


        )
    }
}