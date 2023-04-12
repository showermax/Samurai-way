import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Main/Profile/Profile";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {StateType} from "./redux/state";


type AppPropsType ={
    state: StateType
    addMessage: (s: string, id: number, author: boolean)=> void
    addPost: (t: string, c: string)=> void
    dispatch:any
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Routes>
                            <Route path='/profile' element={<Profile postsList={props.state.forProfile.postsList} addPost={props.addPost} dispatch={props.dispatch}/>} />
                            <Route path='/dialogs/*' element={<Dialogs chatMessages = {props.state.forDialogs.chatMessages} dialogsList={props.state.forDialogs.dialogsList} addMessage={props.addMessage}/>} />
                            {/*<Route path='/news' component={Profile} />*/}
                            {/*<Route path='/music' component={Dialogs} />*/}
                             {/*<Route path='/settings' component={Dialogs} />*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
