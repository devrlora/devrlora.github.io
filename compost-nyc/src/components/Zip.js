import React, { Component } from 'react'

export class Zip extends Component {
    constructor(props){
        super(props);
        this.state={
            zip: '',
           }
    }

    async componentDidMount(){
        const url = 'https://data.cityofnewyork.us/resource/if26-z6xq.json?zip_code=10001';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            zip: data[3].zip_code,
        })
        
    
            }
        render() {
            return (
                <div>
                    <h1>
                    {this.state.zip}
                    </h1>
                </div>
            )
        }
    }
    
    export default Zip;