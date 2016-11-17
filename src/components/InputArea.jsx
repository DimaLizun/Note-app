import React from 'react';

import './InputArea.css'

import './NotesApp.jsx'


export default class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value });
    }

    handleNoteAdd() {
        const newNotes = {
            text: this.state.text,
            color: 'blue',
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
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        )
    }
}