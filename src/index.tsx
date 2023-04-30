import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore'
import {Provider} from "react-redux";



    ReactDOM.render(
        <Provider store={store}>
            <App />
            {/*<App state={state} dispatch={store.dispatch.bind(store)}/>*/}
        </Provider>,
        document.getElementById('root')
    );



// function rerenderEntireTree(state: any) {
//     ReactDOM.render(
//         <Provider store={store}>
//             <App />
//             {/*<App state={state} dispatch={store.dispatch.bind(store)}/>*/}
//         </Provider>,
//         document.getElementById('root')
//     );
// }
//
// rerenderEntireTree(store.getState())
//
// store.subscribe(() => rerenderEntireTree(store.getState()))