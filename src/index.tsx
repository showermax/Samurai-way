import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, state, StateType, subscribe} from './redux/state'


function rerenderEntireTree () {
    ReactDOM.render(
        <App state={state} addMessage={addMessage} addPost={addPost}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

subscribe(rerenderEntireTree)