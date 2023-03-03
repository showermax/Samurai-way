import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {Main} from "./Main";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Main/>
        </div>
    );
}

export default App;
