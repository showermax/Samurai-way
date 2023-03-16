import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Main/Profile/Profile";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Messages} from "./components/Main/Dialogs/Messages";


export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
    author: string
}

function App() {

    const dialogsList: Array<DialogsType> = [
        {id: 1, name: 'Danik'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Denis'},
        {id: 5, name: 'Andrei'},
        {id: 6, name: 'Demiyan'},
        {id: 7, name: 'Arsenyi'}
    ]
    const messages = [
        {id: 1, text: 'hey', author: 'friend'},
        {id: 1, text: 'how\'s it going', author: 'me'},
        {id: 1, text: 'home?', author: 'me'},
        {id: 1, text: 'yeah, chilling .. you?', author: 'friend'}
    ]

    return (
<BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Messages messageList={messages} />
            <div className='main'>
                <Routes>
                    {/*<Route path='/profile'><Profile/></Route>*/}
                    {/*<Route path={'/dialogs'} element={<Dialogs messageList={messages} dialogList={dialogsList}/>} />*/}
                    <Route path={'/dialogs'} element={<Dialogs messageList={messages} dialogList={dialogsList}/>} />
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
