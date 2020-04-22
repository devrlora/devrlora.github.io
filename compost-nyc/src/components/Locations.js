import React, { Component } from 'react'

export class Locations extends Component {
    constructor(props){
        super(props);
        this.state={
            site: '',
            location:'',
            open: '',
            close: ''}
    }


   async componentDidMount(){
    const url = 'https://data.cityofnewyork.us/resource/if26-z6xq.json?borough=Manhattan';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
        site: data[1].food_scrap_drop_off_site,
        location:data[1].location,
        open: data[1].hours_to,
        close: data[1].hours_from
    })
    
    // console.log(data[0]);

        }
    render() {
        return (
            <div>
                <h1>{this.state.site} - {this.state.location} Open from : {this.state.open} to {this.state.close}</h1>
                <h1>{this.state.site} - {this.state.location} Open from : {this.state.open} to {this.state.close}</h1>
                <h1>{this.state.site} - {this.state.location} Open from : {this.state.open} to {this.state.close}</h1>
          
            </div>
        )
    }
}

export default Locations;
