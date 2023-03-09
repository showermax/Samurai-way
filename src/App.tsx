import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Main/Profile/Profile";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Route path='/profile'><Profile /></Route>
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/news' component={Profile} />
                    <Route path='/music' component={Dialogs} />
                    <Route path='/settings' component={Dialogs} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
