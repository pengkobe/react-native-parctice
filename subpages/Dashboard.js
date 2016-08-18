/**
 * Created by pengyi on 9/24/15.
*/
'use strict';

var React = require('react-native');
var { Icon, } = require('react-native-icons');
var window = require('../utils/window')
var SpecIconBox = require('../components/SpecIconBox')
var { width, height } = window.get()

var {
    StyleSheet,
    Component,
    TouchableOpacity,
    Text,
    View,
    ScrollView,
    Navigator
} = React;

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    GoAlarmList(){
      this.props.router.toAlarmList({});
    }


    componentDidMount() {
         
    }

    render() {
     return (
      <ScrollView style={styles.scrollcontainer}>
        <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.item}>
               <TouchableOpacity underlayColor={'#777'} activeOpacity={0.9} onPress={this.GoAlarmList.bind(this)}>
                  <View style={[styles.circleinfo,{borderColor:'red'}]}>
                    <View><Text style={styles.instructions}>今日报警</Text></View>
                    <View><Text style={[styles.alarmCount]}>3</Text></View>
                  </View>
               </TouchableOpacity>
             <View style={styles.iconContainer_bottom}>
                  <SpecIconBox value={4} label={'到场'} icon={'fontawesome|dot-circle-o'} />
                  <SpecIconBox value={2}  label={'故障'} icon={'fontawesome|exclamation-circle'} />
                  <SpecIconBox value={20} label={'完成'} icon={'fontawesome|flag'} />
                  <SpecIconBox value={4} label={'确认'} icon={'fontawesome|eye'} />
              </View>
            </View>
            
            <View style={styles.item}>
              <TouchableOpacity underlayColor={'#777'} activeOpacity={0.9} onPress={this.GoAlarmList.bind(this)}>
                <View style={[styles.circleinfo]}>
                  <View><Text style={styles.instructions}>未维修</Text></View>
                  <View><Text style={[styles.numinfo]}>4</Text></View>
                 </View>
               </TouchableOpacity>
               <View style={styles.iconContainer_bottom}>
                  <SpecIconBox value={4} label={'确认'} icon={'fontawesome|eye'} />
                  <SpecIconBox value={4} label={'维修中'} icon={'fontawesome|dot-circle-o'} />
                  <SpecIconBox value={20}  label={'完成'} icon={'fontawesome|flag'} />
               </View>
            </View>
        </View>
        
        <View style={styles.row}>
          <View style={styles.item,styles.item}>
          <TouchableOpacity underlayColor={'#777'} activeOpacity={0.9} onPress={this.GoAlarmList.bind(this)}>
              <View style={[styles.circleinfo]}>
                <View><Text style={styles.instructions}> 未巡检</Text></View>
                <View><Text style={[styles.numinfo]}>1</Text></View>
            </View>
             </TouchableOpacity>
            <View style={styles.iconContainer_bottom}>
                  <SpecIconBox value={4} label={'巡检中'} icon={'fontawesome|dot-circle-o'} />
                  <SpecIconBox value={20}  label={'完成'} icon={'fontawesome|flag'} />
              </View>
           </View>
          <View style={styles.item,styles.item}>
          <TouchableOpacity underlayColor={'#777'} activeOpacity={0.9} onPress={this.GoAlarmList.bind(this)}>
              <View style={[styles.circleinfo]}>
                <View><Text style={styles.instructions}> 未保养</Text></View>
                <View><Text style={[styles.numinfo]}>0</Text></View>
             </View>
              </TouchableOpacity>
              <View style={styles.iconContainer_bottom}>
                  <SpecIconBox value={4} label={'保养中'} icon={'fontawesome|dot-circle-o'} />
                  <SpecIconBox value={20}  label={'完成'} icon={'fontawesome|flag'} />
              </View>
          </View>
        </View>
        </View>
         </ScrollView>
     );
    }
}

var styles = StyleSheet.create({
        scrollcontainer: {
          flex: 1,
          backgroundColor: '#333',
          alignSelf: 'stretch',
        },
        container: {
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            fontFamily: 'AvenirNext-DemiBold',
        },
        row:{
            flex:1,
            flexDirection: 'column',
            width:width/2,
            height:height-110,
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch'
        },
        item:{
            flex:1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            borderColor: 'black',
            borderTopWidth: 1,
             borderLeftWidth: 1,
            //paddingVertical: 78,
            backgroundColor: '#333',

        },
        instructions: {
            flex: 1,
            textAlign: 'center',
            color: 'white',
            marginBottom: 5,
        },
        numinfo: {
            flex: 1,
            fontSize: 20,
            fontWeight: '200',
            color: '#7FFF00',
            textAlign: 'center',
        },
        circleinfo: {
            borderColor: '#7FFF00',
            borderWidth: 2,
            flex: 1,
            borderRadius: 80,
            marginTop: 10,
            marginBottom: 15,
            width: 100,
            height: 100,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
        },
        alarmCount:{
             fontSize: 28,
             color:'red'
       },
     iconContainer_top: {
           flex: 1,
           //position: 'absolute',
           //top: 0,
           //left: 0,
           width:width/2,
           //height: 70,
           flexDirection: 'row'
       },
       iconContainer_bottom: {
        flex: 1,
           //position: 'absolute',
           //bottom: 0,
           //left: 0,
           width:width/2,
           //height: 70,
           flexDirection: 'row'
       },
  });

module.exports = Dashboard;