import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";

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
