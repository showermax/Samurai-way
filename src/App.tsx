import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Main/Profile/Profile";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {AllActionType, StateType} from "./redux/state";


type AppPropsType ={
    state: StateType
    dispatch:(action: AllActionType) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Routes>
                            <Route path='/profile' element={<Profile postsList={props.state.forProfile.postsList} dispatch={props.dispatch}/>} />
                            <Route path='/dialogs/*' element={<Dialogs chatMessages = {props.state.forDialogs.chatMessages} dialogsList={props.state.forDialogs.dialogsList} dispatch={props.dispatch}/>} />
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
