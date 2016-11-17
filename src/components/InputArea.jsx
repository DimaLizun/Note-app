import React from 'react';

import './InputArea.css'



export default class InputArea extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="input-area">
                <textarea type="text"
                       onChange={this.handleChange}
                       className="input"
                       rows = "6"
                />
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        )
    }
}