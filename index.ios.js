/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
} = React;

var MapReference = React.createClass({
  getInitialState: function() {
    return {
      region: {
        latitude: '37.33072',
        longitude: '-122.029674',
        latitudeDelta: '1',
        longitudeDelta: '1'
      },
      showUser: true
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={this.state.showUser}
          region={this.state.region}
          minDelta={this.state.region.latitudeDelta}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  map: {
    height: 500,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

AppRegistry.registerComponent('MapReference', () => MapReference);
