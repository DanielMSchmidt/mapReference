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

var region = {
  latitude: 37.33072,
  longitude: -122.029674,
  latitudeDelta: 0.001,
  longitudeDelta: 0.001
}, generateRandomPins = function(region, count) {
  var count = count || 5,
      arr = [],
      pin;

  for (var i = count - 1; i >= 0; i--) {
    pin = {
      title: 'Pin number ' + i,
      latitude: region.latitude + (region.latitudeDelta * Math.random() * 2 - region.latitudeDelta),
      longitude: region.longitude + (region.longitudeDelta * Math.random() * 2 - region.longitudeDelta)
    };

    arr.push(pin);
  };
  return arr;
};

var MapReference = React.createClass({
  getInitialState: function() {
    return {
      region,
      showUser: true,
      pins: generateRandomPins(region)
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={this.state.showUser}
          region={this.state.region}
          pins={this.state.pins}
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
