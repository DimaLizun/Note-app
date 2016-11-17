import React from 'react';

import InputArea from './InputArea.jsx'
import NotesBlock from './NotesBlock.jsx'


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
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "green"
                },
                {
                    id: 2,
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    "which is sadly very common, especially in the U.K." +
                    " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "green"
                },
                {
                    id: 3,
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    "which is sadly very common, especially in the U.K." +
                    " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "green"
                },
                {
                    id: 4,
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    "which is sadly very common, especially in the U.K." +
                    " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "green"
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
                    text: "I don't know how much listening there is in this conversation," +
                    " which is sadly very common, especially in the U.K. We're becoming desensitized. " +
                    "which is sadly very common, especially in the U.K." +
                    " We're becoming desensitizewhich is sadly very common," +
                    " especially in the U.K. We're becoming desensitizedd",
                    color: "green"
                },
            ]
        }

    }

     render() {
         return (
             <div>
                 <InputArea />
                 <NotesBlock notes={this.state.notes} />
                 <div>NotesApp</div>
             </div>

         )
     }
}