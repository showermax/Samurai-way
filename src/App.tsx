import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Main/Profile/Profile";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import {StateType} from "./redux/state";


type AppPropsType ={
    state: StateType
    addMessage: (s: string)=> void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Route path='/profile'><Profile postsList={props.state.forProfile.postsList}/></Route>
                    <Route path='/dialogs'><Dialogs chatMessages = {props.state.forDialogs.chatMessages} dialogsList={props.state.forDialogs.dialogsList} addMessage={props.addMessage}/></Route>
                    <Route path='/news' component={Profile} />
                    <Route path='/music' component={Dialogs} />
                    <Route path='/settings' component={Dialogs} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
