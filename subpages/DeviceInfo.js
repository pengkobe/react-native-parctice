/** 
* edit by pengyi at 2015-11-12
 */
'use strict';

var React = require('react-native');

var {
  ScrollView,
  View,
} = React;



module.exports =  React.createClass({
    getInitialState() {
        
    },

    render() {
        return (
            <View style={{flex : 1}}>
                <ScrollView stickyHeaderIndices={[0]} >
                   
                  <DeviceDetail />
                   
                  
                </ScrollView>  
            </View>
        );
    }
});

