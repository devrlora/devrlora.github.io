import React, { Component } from 'react'


const API_URL = 'https://data.cityofnewyork.us/resource/if26-z6xq.json';

class Search extends Component {
    state = {
        query: '',
        results:[]
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

export default Search
