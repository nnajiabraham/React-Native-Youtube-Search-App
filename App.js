import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import AppHeader from './components/Header';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyDYQa2SclhYcGI55z8iEUxEydh0bPJB-5M';

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  };

  onPressSearch = term => {
    this.searchYT(term);
  };

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        loading: false,
        videos
      });
    });
  };

  render() {
    const { loading, videos } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="React-Native YouTube Search" />
        <SearchBar loading={loading} onPressSearch={this.onPressSearch} />
        <VideoList videos={videos} />
      </View>
    );
  }
}
