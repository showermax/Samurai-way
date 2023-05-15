import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Main/Profile/Profile";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {AllActionType, ForDialogsType, ForProfileType, StateType} from "./redux/state";
import {DialogsContainer} from "./components/Main/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Main/Users/UsersContainer";
import {ProfileContainer} from "./components/Main/Profile/ProfileContainer";


// type AppPropsType = {
//     state: any
//     dispatch: (action: AllActionType) => void
// }

function App() {
    // const state=props.state.getState()
    // const {state,dispatch} = props
    // const state = props.state
    // const dispatch = props.dispatch

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Routes>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/users/*' element={<UsersContainer />}/>
                        {/*<Route path='/profile'*/}
                        {/*       element={<Profile postsList={state.forProfile.postsList} dispatch={dispatch}/>}/>*/}
                        {/*<Route path='/dialogs/*' element={<Dialogs chatMessages={state.forDialogs.chatMessages}*/}
                        {/*                                           dialogsList={state.forDialogs.dialogsList}*/}
                        {/*                                           dispatch={dispatch}/>}/>*/}
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
