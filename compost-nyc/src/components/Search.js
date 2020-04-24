import React from 'react'
import axios from 'axios';


const API_URL = 'https://data.cityofnewyork.us/resource/if26-z6xq.json';

class Search extends React.Component {
    state = {
        query: '',
        results:[]
    }

    handleChange =() =>{
        this.setState({
            query: this.search.value})
    }
    
    getInfo = () => {
        axios.get(`${API_URL}?borough=${this.state.query}`)
        // axios.get(`${API_URL}`)
          .then(({ data }) => {
            this.setState({
              query: data.borough                           
            })
            
          })
      }

    render() {
        return (
            <div>
                <form >
                    <label>
                        Borough Name:
                        <input type = 'text' placeholder= "Search..."
                        onChange={this.handleInputChange}/>
                    </label>
                        <button type='submit'>Search</button>
                        <p>results go here: {this.state.query}</p>
                 </form>
            </div>
        )
    }
}

export default Search;
