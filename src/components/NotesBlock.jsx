import React from 'react';
import NotesApp from './NotesApp.jsx'
import Note from './Note.jsx';

import './NotesBlock.css'

export default class NotesBlock extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 150,
            gutter: 10,
            isFitWidth: true
        });
    }

    componentDidUpdate(prevProps){
        if(this.props.notes.length !== prevProps.notes.length){
            this.msnry.reloadItems();
            this.msnry.layout();
        }

    }

    render() {
        return (
            <div className="notes-Block" ref="grid">
                {
                    this.props.notes.map(function (note) {
                        return <Note key={note.id}  color={note.color}>{note.text} </Note>
                    })
                }
            </div>
        )
    }
}