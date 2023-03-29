import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, state, StateType} from './redux/state'


function rerenderEntireTree (state: StateType) {
    ReactDOM.render(
        <App state = {state} addMessage={addMessage}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree (state)