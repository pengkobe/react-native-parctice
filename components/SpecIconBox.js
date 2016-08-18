'use strict';

var React = require('react-native');
var { Icon,} = require('react-native-icons');
var {
	StyleSheet,
	Image,
	Text,
	View,
} = React;


var SpecIconBox = React.createClass({
	//	<Image style={styles.icon} source={this.props.icon} />
	render: function() {
		return (
			<View style={styles.container}>
				<Icon name={this.props.icon} size={18} color='#21aa67' style={styles.icon} />
				<Text style={styles.value}>{this.props.value}</Text>
				<Text style={styles.label}>{this.props.label}</Text>
			</View>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRightWidth: 1,
		justifyContent: 'center',
		paddingBottom: 0
	},

	icon: {
		flex: 1,
		alignSelf: 'center',
		//height: 32,
		width: 22,
	},

	value: {
		flex: 1,
		marginTop:4,
		fontSize: 16,
		fontWeight: '200',
		color: '#21aa67',
		textAlign: 'center'
	},

	label: {
		flex: 1,
		fontSize: 10,
		marginTop:4,
		color: '#21aa67',
		textAlign: 'center'
	},
});

module.exports = SpecIconBox;
