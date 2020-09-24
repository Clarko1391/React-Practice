import React from 'react'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home'
import Services from './Components/pages/Services'
import Products from './Components/pages/Products'
import SignUp from './Components/pages/SignUp'

export default function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' exact component={Services} />
                <Route path='/products' exact component={Products} />
                <Route path='/sign-up' exact component={SignUp} />
            </Switch>
        </Router>
           
        </>
    )
}
