import React from 'react';
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
        let onNoteDelete = this.props.onNoteDelete;
        return (
            <div className="notes-Block" ref="grid">
                {
                    this.props.notes.map(function (note) {
                        return <Note key={note.id}
                                     color={note.color}
                                     onDelete={onNoteDelete.bind(null, note)}
                        >{note.text} </Note>
                    })
                }
            </div>
        )
    }
}