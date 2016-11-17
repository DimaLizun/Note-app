import React from 'react';

import InputArea from './InputArea.jsx'
import NotesBlock from './NotesBlock.jsx'

import './NotesApp.css'

export default class NotesApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: [
                {
                    id: 1,
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    "which is sadly very common, especially in the U.K." +
                    " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd" +
                    "which is sadly very common, especially in the U.K." +
                        " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "green"
                },
                {
                    id: 2,
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    "which is sadly very common, especially in the U.K." ,
                    color: "red"
                },
                {
                    id: 3,
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    "which is sadly very common, especially in the U.K." +
                    " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "blue"
                },
                {
                    id: 4,
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "orange"
                },
                {
                    id: 5,
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    "which is sadly very common, especially in the U.K." +
                    " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "green"
                },
                {
                    id: 6,
                    text:
                    " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "red"
                },
            ]
        }

        this.addText= this.addText.bind(this);
    }

    addText(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

     render() {
         return (
             <div className="main-app">
                <div className="notes-app" >
                   <InputArea addText={this.addText} />
                   <NotesBlock notes={this.state.notes} />
                </div>
             </div>

         )
     }
}