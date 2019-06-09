import React, { Component } from 'react'
import Input from '@material-ui/core/Input'

export class SearchBar extends Component {    
    constructor(props) {
        super(props)

        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({ term: event.target.value })
        this.props.onSearchTermChange(event.target.value)
    }

    render() {
        return (
            <div className="search-bar">
                <Input value={this.state.term} onChange={ this.onInputChange }
                    placeholder="Search…" style={{width:"25%"}}/>
            </div>
        )
    }
}

export default SearchBar
