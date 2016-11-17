import React from 'react';

import Note from './Note.jsx';
import NotesApp from './NotesApp.jsx';

export default class NotesBlock extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="notesBlock">
                {
                    this.props.notes.map(function (note) {
                        return <Note key={note.id}  color={note.color}>{note.text} </Note>
                    })
                }
            </div>
        )
    }
}