import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'

const nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <Route path="/" exact render={Home} />
            <Route path="/about" render={About} />
            <Route path="/contact" render={Contact} />
        </div>
    )
}

export default nav;