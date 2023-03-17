import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChatMessagesType, DialogsType} from "./types";

const chatMessages: Array<ChatMessagesType> = [
    {
        friend_id: 1,
        friend: 'Danik',
        chat: [
            {id: 1, text: 'wanna go for a walk?', author: true},
            {id: 2, text: 'so tired sitting at home', author: false},
            {id: 3, text: 'yeah, great', author: false},
            {id: 4, text: 'I\'ll be ready in 15 minutes', author: true}
                ]
    },
    {
        friend_id: 2,
        friend: 'Kirill',
        chat: [
            {id: 1, text: 'hey', author: true},
            {id: 2, text: 'how\'s it going', author: false},
            {id: 3, text: 'home?', author: false},
            {id: 4, text: 'yeah, chilling ... u?', author: true}
        ]
    }
]
const dialogsList: Array<DialogsType> = [
    {id: 1, name: 'Danik'},
    {id: 2, name: 'Kirill'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Denis'},
    {id: 5, name: 'Andrei'},
    {id: 6, name: 'Demiyan'},
    {id: 7, name: 'Arsenyi'}
]

ReactDOM.render(
    <App dialog={chatMessages}/>,
    document.getElementById('root')
);