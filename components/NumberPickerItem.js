'use strict';

var React = require('react-native');
var {
    Animated, TouchableOpacity, StyleSheet, Text, View,
} = React;

var NumberPickerItem = React.createClass({
    getInitialState: function() {
        return {
            rotate: new Animated.Value(0),
        };
    },

    getDefaultProps: function() {
        return {
            onChange: function() {},
            value: '',
            current: 0,
        };
    },

    showAnimation: function(val, time) {
        Animated.timing(this.state.rotate, {
            toValue: val,
            duration: time,
        },).start(endState =>{
            if (endState.finished && this.props.current == 1) {
                if (val === 0) {
                    this.showAnimation(1, 3000);
                } else {
                    this.showAnimation(0, 0);
                }
            } else {
                if (val === 0) {
                    this.showAnimation(1, 3000);
                } else {
                    this.showAnimation(0, 0);
                }
            }
        });
    },

    componentDidMount: function() {
        this.showAnimation(1, 2000);
    },

    render: function() {
        var selectedBox = {};
        var selectedText = {};
        var circleBox = {};

        if (this.props.current == 1) {
            selectedBox.borderColor = '#7FFF00';
            selectedText.color = '#7FFF00';
            selectedText.fontSize = 24;
            selectedBox.width = 60;
            selectedBox.height = 60;
            selectedBox.borderRadius = 30;
            selectedBox.borderWidth = 0;

            circleBox.borderWidth = 3;
            circleBox.borderBottomWidth = 0;
        }

        if (this.props.current == 2) {
            selectedBox.borderColor = '#7FFF00';
            selectedText.color = '#7FFF00';
            selectedText.fontSize = 14;
            selectedBox.width = 40;
            selectedBox.height = 40;
            selectedBox.borderRadius = 20;
            selectedBox.borderWidth = 1;

            circleBox.borderWidth = 0;
        }
        return ( < TouchableOpacity underlayColor = {
            '#ffffff'
        }
        onPress = {
            this.handleChange
        } > <View style = { [styles.container, selectedBox]
        } > <Text style = { [styles.text, selectedText]
        } > {
            this.props.value
        } < /Text>
					<Animated.View style={[styles.circle,circleBox,
                      {transform:[{rotate: this.state.rotate.interpolate({
                  		inputRange: [0, 1],
                  		outputRange: ['0deg', '360deg']
                		})}]}]}>
                     </Animated.View > </View>
			</TouchableOpacity > );
        circleBox
    },

    handleChange: function() {
        if (this.props.current == 2 || this.props.current == 0) {

        } else {
            this.props.onChange(this.props.value);
        }
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        // padding: 20,
        borderColor: '#777',
        borderWidth: 1,
        borderRadius: 20,
        width: 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    circle: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderColor: '#7FFF00',
        borderWidth: 0,
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: 'transparent'
    },
    text: {
        flex: 1,
        fontSize: 14,
        fontWeight: '200',
        color: '#777',
        textAlign: 'center',
    },
});

module.exports = NumberPickerItem;