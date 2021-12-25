import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() =>import ('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback = {<p>Loading...</p>}>
     <Login />
    </Suspense>

    </Router>
  );
}

export default App;
