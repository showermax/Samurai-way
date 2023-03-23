import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './redux/state'
import {rerenderEntireTree} from "./render";

rerenderEntireTree (state)