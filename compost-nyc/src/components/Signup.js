import React, { Component } from 'react';
import '../styling/Signup.css';

// import {Route} from 'react-router-dom';


class Signup extends Component {
    render() {
        return (
            <div className = 'sign-container'>
                <button className ='sign-btn'>
                <a className ='sign-anchor' href={`https://www1.nyc.gov/assets/dsny/site/contact/organics-collection-application`}>Send Me there!</a>

                </button>
              
            </div>
        );
    }
}

export default Signup;