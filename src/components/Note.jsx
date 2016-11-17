import React from 'react';

import './Note.css'

export default class Note extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        let style  = { backgroundColor: this.props.color}
        return (
            <div className="note" style={style}>
                <span className="delete-app" onClick={this.props.deleteNote}> × </span>
                {this.props.children}
            </div>
        )
    }
}