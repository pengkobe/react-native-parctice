'use strict';
var React = require('react-native');
var {
    StyleSheet, View, Text, Image, TouchableOpacity,
} = React;

class NextButton extends React.Component {
    render() {
        var displayName = this.props.displayName;
        return ( <TouchableOpacity onPress={ () =>alert('next')
        } > <View style = {
            styles.customLabel
        } > <Text style = {
            styles.customText
        } > {
            displayName
        } < /Text>
             <Image
             source={require('image!next')}
             style={styles.customButton}
             / > </View>
             </TouchableOpacity > );
    }
}

var styles = StyleSheet.create({
    customLabel: {
        flexDirection: 'row',
    },
    customButton: {
        width: 18,
        height: 24,
        top: 30,
        right: 10
    },
    customText: {
        top: 35,
        right: 10
    }
});

module.exports = NextButton;