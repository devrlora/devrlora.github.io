import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Locations from './Locations';
import Signup from './Signup';
import About from './About';


export class Navbar extends Component {
    render() {
        return (
            <div className ='Menu'>
                <nav className = 'Nav-bar'>
                    {/*  add Navlink styling to showcase each active link */}
                    <NavLink activeClassName = 'active-tab' to = '/locations'>locations</NavLink>
                    <NavLink activeClassName = 'active-tab' to = '/signup'>Sign Up</NavLink>
                    <NavLink activeClassName = 'active-tab' to = '/about'>About</NavLink>
                    </nav>
                <Switch>
                    {/* use 'exact' to prevent multiple pages loading */}
                    <Route exact path ='/locations' component={Locations} />
                    <Route exact path ='/signup' component={Signup} />
                    <Route exact path ='/about' component={About} />
                </Switch> 
            </div>
        )
    }
}

export default Navbar
