import React, { Component } from 'react'

export class Locations extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    
   async componentDidMount(){
    const url = 'https://data.cityofnewyork.us/resource/if26-z6xq.json?borough=Manhattan';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
        location: data[0].food_scrap_drop_off_site,
        open: data[0].hours_to,
        close: data[0].hours_from
    })
    
    // console.log(data[0]);

        }
    render() {
        return (
            <div>
                <h1>{this.state.location} </h1>
                <h1>Open from : {this.state.open} to {this.state.close}</h1>
          
            </div>
        )
    }
}

export default Locations
