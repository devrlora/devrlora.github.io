import React from 'react'
import Route from ''

export default function Signup() {
    return (
        <div>
        
        <Route path='/sign-up' component={() => { 
     window.location.href = 'https://www1.nyc.gov/assets/dsny/site/contact/organics-collection-application'; 
     return null;
}}/>
        </div>
    )
}
