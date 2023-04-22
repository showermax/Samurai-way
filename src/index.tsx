import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore'


function rerenderEntireTree (state:any) {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(()=> rerenderEntireTree(store.getState()))