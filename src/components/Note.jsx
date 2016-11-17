import React from 'react';



export default class Note extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="note">{this.props.children}</div>
        )
    }
}