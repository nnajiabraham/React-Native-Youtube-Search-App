import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#333' }}>
        <Header
          centerComponent={{ text: 'React Native Youtube Search App', style: { color: 'white' } }}
          outerContainerStyles={{ backgroundColor: '#E91431' }}
        />
        {/**/}
        {/**/}
      </View>
    );
  }
}
