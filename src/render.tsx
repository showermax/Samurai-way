import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addMessage, StateType} from "./redux/state";

export function rerenderEntireTree (state: StateType) {
    ReactDOM.render(
        <App state = {state} addMessage={addMessage}/>,
        document.getElementById('root')
    );
}