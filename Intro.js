'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;


var Carousel = require('react-native-carousel');

var Intro = React.createClass({
  render: function() {
    return (
      <Carousel width={375}>
        <View style={styles.container}>
          <Text>安全</Text>
        </View>
        <View style={styles.container}>
          <Text>经济</Text>
        </View>
        <View style={styles.container}>
          <Text>可控</Text>
        </View>
      </Carousel>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});


module.exports = Intro;
