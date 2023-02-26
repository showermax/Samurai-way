import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies />
        </div>
    );
}
function Technologies() {
    return (
        <div className="App">
            Hello, samurai! Let's go!
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}
function Header() {
    return (
        <div className="App-header">
            <a> Home </a>
            <a> News feed </a>
            <a> Messages </a>
        </div>
    );
}

export default App;
