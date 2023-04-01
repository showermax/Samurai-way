import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/state'


function rerenderEntireTree () {
    ReactDOM.render(
        <App state={store._state} addMessage={store.addMessage.bind(store)} addPost={store.addPost.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)