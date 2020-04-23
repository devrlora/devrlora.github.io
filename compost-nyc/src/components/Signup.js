import React, { Component } from 'react';
import '../styling/SignUp.css';
import SignUpText from './SignUpText';

// import {Route} from 'react-router-dom';


class SignUp extends Component {
    render() {
        return (
            <div className = 'sign-container'>
                <SignUpText />
                    <button className ='sign-btn'>
                        <a className ='sign-anchor' href={`https://www1.nyc.gov/assets/dsny/site/contact/organics-collection-application`}>Send Me There!</a>
                    </button>
            </div>
        );
    }
}

export default SignUp;