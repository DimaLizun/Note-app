import React from 'react';

import InputArea from './InputArea.jsx'
import NotesBlock from './NotesBlock.jsx'

import './NotesApp.css'

export default class NotesApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: []
        }

        this.addText= this.addText.bind(this);
        this.updateNotes= this.updateNotes.bind(this);
        this.handleDeleteNote= this.handleDeleteNote.bind(this);
    }


    componentDidMount(){
        let localStore = JSON.parse(localStorage.getItem('notes'));
        if (localStore){
            this.setState({notes: localStore});
        }
    }

    componentDidUpdate(){
        this.updateNotes();
    }

    addText(newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

    handleDeleteNote(note) {
        let noteId = note.id;
        let newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    }

     render() {
         return (
             <div className="main-app">
                <div className="notes-app" >
                   <InputArea addText={this.addText} />
                   <NotesBlock notes={this.state.notes} onNoteDelete={this.handleDeleteNote} />
                </div>
             </div>

         )
     }


     updateNotes(){
         let notes = JSON.stringify(this.state.notes);
         localStorage.setItem('notes',notes);
     }
}