import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/dashboard/VideoList'
import VideoDetail from './components/dashboard/VideoDetail';
import NavBar from './components/layout/NavBar';
import SearchBar from './components/dashboard/SearchBar'

const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('smosh')
  }

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, (data) => {
      this.setState({ 
        videos: data,
        selectedVideo: data[0] 
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBar onSearchTermChange={ (searchTerm) => this.videoSearch(searchTerm) }/>
          <VideoDetail video={ this.state.selectedVideo }/>
          <VideoList 
            onVideoSelect={ (userSelected) => this.setState({ selectedVideo: userSelected }) }
            videos={ this.state.videos } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
