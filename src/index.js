import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense, lazy } from 'react';
import App from './App';
import FirebaseContext from './context/firebase';
import {firebase,FieldValue} from './lib/firebase';
import './styles/app.css';

ReactDOM.render( 
<FirebaseContext.Provider value={{firebase,FieldValue}}>
<App />
</FirebaseContext.Provider>
, document.getElementById('root'));

//time stamp 1:35:00 27/12/2021