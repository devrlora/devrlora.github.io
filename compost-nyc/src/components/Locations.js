import React, { Component } from 'react'
import Borough from './Borough'
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
        site: data[3].food_scrap_drop_off_site,
        location:data[3].location,
        open: data[3].hours_to,
        close: data[3].hours_from
    })
    
    // console.log(data[0]);

        }
    render() {
        return (
            <div>
                {/* <h1>{this.state.site} - {this.state.location} Open from : {this.state.open} to {this.state.close}</h1> */}
          < Borough />
            </div>
        )
    }
}

export default Locations;
