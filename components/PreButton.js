'use strict';
var React = require('react-native');
var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} = React;



class PreButton extends React.Component {
    render() {
        var displayName = this.props.displayName;
        var ee = this.props.clickEle;
        return (
                <TouchableOpacity onPress={() => ee.onPress() }>
                <View style={styles.customLabel}>
                <Image
                   source={require('image!pre')}
                   style={styles.customButton}
                />
                <Text style={styles.customText}>{displayName}</Text>
                </View>
                </TouchableOpacity>
                );
    }
}

var styles = StyleSheet.create({
     customLabel:{
        flexDirection:'row',
     },
     customButton: {
        width: 24,
        height: 24,
        top: 30,
        left:10
     },
     customText: {
        top: 35,
        left:5
     }
});

module.exports = PreButton;