import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
