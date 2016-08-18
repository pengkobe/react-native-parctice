'use strict';

var React = require('react-native');
var window = require('../utils/window')
var { width, height } = window.get()
var { Icon, } = require('react-native-icons');
var {
  StyleSheet,Text,View,ScrollView
} = React;

var TimeLine = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    var nowDate = new Date();
    nowDate = nowDate.getFullYear() +'-'+ (nowDate.getMonth()+1) +'-'+ nowDate.getDate();
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerTitle}>
           <View><Text style={styles.titleText}>{nowDate}</Text></View>
        </View>
        <View style={styles.containerView}>
           <View style={styles.containerList}>
               <View style={styles.containerViewRow}>
                  <View style={styles.row_time}><Text style={styles.text}>10:22</Text></View>
                  <View style={styles.row_event}><Text style={styles.eventText}>到场</Text></View>
               </View>
               <View style={styles.containerViewRow}>
                  <View style={styles.row_time}><Text style={styles.text}>14:43</Text></View>
                  <View style={styles.row_event}><Text style={styles.eventText}>报警确认</Text></View>
               </View>
                <View style={styles.containerViewRow}>
                  <View style={styles.row_time}><Text style={styles.text}>15:43</Text></View>
                  <View style={styles.row_event}><Text style={styles.eventText}>到场（1＃变压器）</Text></View>
               </View>
          </View>
         <View style={styles.line}></View>
         <Icon name={'fontawesome|dot-circle-o'}  top={10} size={20} color='#63D029' style={styles.icon} />
         <Icon name={'fontawesome|dot-circle-o'} top={50} size={20} color='#63D029' style={styles.icon} />
         <Icon name={'fontawesome|dot-circle-o'} top={90} size={20} color='#63D029' style={styles.icon} />
        </View>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#393c47',
        },
        containerTitle:{
          flex: 1,
          flexDirection: 'row',
          padding:8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#393c47',
        },
        titleText:{
          fontSize: 22,
          color:'#58A6FB',
        },
        containerView:{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#393c47',
        },
        containerList:{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#393c47',
        },
        containerViewRow:{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#393c47',
          borderColor: 'black',
          height:40,
        },
        row_time:{
          flex:1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          width:width/2,
          marginRight:15,
          backgroundColor: '#393c47',
          alignSelf: 'stretch'
        },
        row_event:{
          flex:1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          width:width/2,
          marginLeft:15,
          backgroundColor: '#393c47',
          alignSelf: 'stretch'
        },
        icon:{
          position: 'absolute',
          left: width/2 -12,
          width:24,
          height:24,
          backgroundColor: '#393c47',
        },
        text:{
          color:'white',
          textAlign:'center',
          fontSize:18
        },
        eventText:{
          color:'white',
          textAlign:'center',
          fontSize:16
        },
        line:{
          position: 'absolute',
          left: width/2 -1,
          width:2,
          height:440,
          backgroundColor: '#58A6FB',
        }
});

module.exports = TimeLine;