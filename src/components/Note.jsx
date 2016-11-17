import React from 'react';

import './Note.css'

export default class Note extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        var style  = { backgroundColor: this.props.color}
        return (
            <div className="note" style={style}>{this.props.children}</div>
        )
    }
}