import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
  state = { term: '' };

  render() {
    const { containerStyle, searchTextStyle, buttonStyle } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={searchTextStyle}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
        />
        <Button
          raised
          buttonStyle={buttonStyle}
          icon={{ name: 'search' }}
          title={this.props.loading ? 'Loading...' : 'Search'}
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    marginBottom: 20,
    flexDirection: 'column'
  },
  searchTextStyle: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 2,
    height: 100,
    marginBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#E62117',
    height: 50
    //marginBottom: 8
  }
};

export default SearchBar;
