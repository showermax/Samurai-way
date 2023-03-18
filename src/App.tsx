import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Main/Profile/Profile";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppPropsType} from "./types";
import {StateType} from "./redux/state";
import {state} from './redux/state'


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Route path='/profile'><Profile postsList={state.postsList}/></Route>
                    <Route path='/dialogs'><Dialogs chatMessages = {state.forDialogs.chatMessages} dialogsList={state.forDialogs.dialogsList}/></Route>
                    <Route path='/news' component={Profile} />
                    <Route path='/music' component={Dialogs} />
                    <Route path='/settings' component={Dialogs} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
