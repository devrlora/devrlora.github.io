import React, { Component } from 'react'
import '../styling/About.css';

export class About extends Component {
    render() {
        return (
            <div className = 'statement-container'>
                <h1>Mission Statement Goes here:</h1>
                <p>This app is meant to be a search tool for users to 
                find available site in NYC for dropping off their food scraps.</p>
            </div>
        )
    }
}

export default About
