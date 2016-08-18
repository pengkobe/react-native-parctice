'use strict';

var React = require('react-native');
var { StyleSheet, Text, View, TouchableOpacity, Dimensions, Animated, } = React;
var deviceWidth = Dimensions.get('window').width;
var { Icon,} = require('react-native-icons');

var styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
    width: 95,
    borderRightWidth: 1,
    borderColor: 'rgba(99,99,99,0.5)',
    textAlign: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    backgroundColor: '#333',
  },

  tabs: {
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'rgba(99,99,99,0.5)',
    backgroundColor: '#333',
  },
  icon: {
    flex: 1,
    alignSelf: 'center',
    width: 22,
  },
});

var ScrollingTabBar = React.createClass({
  selectedTabIcons: [],
  unselectedTabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  getInitialState() {
    return { value: new Animated.Value(0) };
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
    var color = this.state.value.interpolate({inputRange: [page-1, page],
                                             outputRange: ['rgba(87,87,87,1)', 'rgba(136,203,255,1)'],
                                             extrapolate: 'clamp'});

    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[styles.tab]}>
        <View><Icon name={'fontawesome|eye'} size={28} color='#ffffff' style={styles.icon} /></View>
        <Animated.Text style={{color}}>{name}</Animated.Text>
      </TouchableOpacity>
    );
  },

  setAnimationValue(value) {
    var currentPage = this.props.activeTab;
    this.state.value.setValue(value);
  },

  render() {
    var translateX = this.state.value.interpolate({inputRange: [0, 1], outputRange: [0, -95]});
    //, {transform: [{translateX}]} 可以去掉动画
    return (
      <Animated.View style={[styles.tabs]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </Animated.View>
    );
  },
});

module.exports = ScrollingTabBar;