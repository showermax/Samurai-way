import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore'


function rerenderEntireTree () {
    ReactDOM.render(
        <App state={store} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(()=> rerenderEntireTree())