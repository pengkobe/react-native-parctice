'use strict';

var React = require('react-native');

var {
  ActivityIndicatorIOS,
  StyleSheet,
  TextInput,
  View,
} = React;

var SearchBar = React.createClass({
  render: function() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => this.props.onSearchChange(text)}
          placeholder="项目号/姓名 "
          onFocus={this.props.onFocus}
          style={styles.searchBarInput}
        />
        <ActivityIndicatorIOS
          animating={this.props.isLoading}
          style={styles.spinner}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  searchBar: {
    padding: 3,
    backgroundColor: '#777777',
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',

  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    color:'#dddddd',
    height: 30,
  },
  spinner: {
    width: 30,
  }
});

module.exports = SearchBar;