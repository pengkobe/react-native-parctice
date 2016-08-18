// var React = require('react-native');
// var {
//     StyleSheet,
//     Text,
//     View,
//     TouchableHighlight
// } = React;
// var Camera = require('react-native-camera');

// var cameraApp = React.createClass({
//                                   getInitialState() {
//                                   return {
//                                   cameraType: Camera.constants.Type.back
//                                   }
//                                   },
                                  
//                                   render() {
                                  
//                                   return (
//                                           <Camera
//                                           ref="cam"
//                                           style={styles.container}
//                                           onBarCodeRead={this._onBarCodeRead}
//                                           type={this.state.cameraType}
//                                           >
//                                           <Text style={styles.welcome}>
//                                           Welcome to React Native!
//                                           </Text>
//                                           <Text style={styles.instructions}>
//                                           To get started, edit index.ios.js{'\n'}
//                                           Press Cmd+R to reload
//                                           </Text>
//                                           <TouchableHighlight onPress={this._switchCamera}>
//                                           <Text>The old switcheroo</Text>
//                                           </TouchableHighlight>
//                                           <TouchableHighlight onPress={this._takePicture}>
//                                           <Text>Take Picture</Text>
//                                           </TouchableHighlight>
//                                           </Camera>
//                                           );
//                                   },
//                                   _onBarCodeRead(e) {
//                                   console.log(e);
//                                   },
//                                   _switchCamera() {
//                                   var state = this.state;
//                                   state.cameraType = state.cameraType === Camera.constants.Type.back
//                                   ? Camera.constants.Type.front : Camera.constants.Type.back;
//                                   this.setState(state);
//                                   },
//                                   _takePicture() {
//                                   this.refs.cam.capture(function(err, data) {
//                                                         console.log(err, data);
//                                                         });
//                                   }
//                                   });


// var styles = StyleSheet.create({
//                                container: {
//                                flex: 1,
//                                justifyContent: 'center',
//                                alignItems: 'center',
//                                backgroundColor: 'transparent',
//                                },
//                                welcome: {
//                                fontSize: 20,
//                                textAlign: 'center',
//                                margin: 10,
//                                },
//                                instructions: {
//                                textAlign: 'center',
//                                color: '#333333',
//                                },
//                                });

// module.exports = cameraApp;

var React = require('react-native');
var RNChart = require('react-native-chart');
var { Icon, } = require('react-native-icons');
var {
    StyleSheet, View, Component,ScrollView,Text
} = React;

var window = require('../utils/window')
var { width, height } = window.get()

var styles = StyleSheet.create({
        chart: {
            flex: 1,
            alignSelf: 'stretch',
            width:width,
        },
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
            marginTop:0,
            marginBottom:5,
            flexDirection: 'row',
            width:width,
            height:height/4 ,
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch'
        },
        item_title:{
            flex:2,
            alignSelf: 'stretch',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'black',
        },
        totalBox:{
          flex:1,
          alignSelf: 'stretch',
          borderBottomWidth: 1,
          borderRightWidth:0,
          borderColor: '#000000',
        },
        chartCol:{
          flex:3,
          alignSelf: 'stretch',
        },
        titleBox:{
            flex:1,
            alignSelf: 'stretch',
            borderRightWidth: 1,
            flexDirection: 'column',
            alignItems: 'center',
            borderColor: '#777777',
        },
        titleBox_title:{
            flex:1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
        },
        title:{
            color:'#dddddd',
            fontSize: 12,

        },
        titleBox_num:{
            flex:2,
            flexDirection: 'row',
            //alignSelf: 'stretch',
          
            alignItems: 'center',
        },
        num:{
            color:'#7FFF00',
            fontSize: 18,
        },
        num_water:{
            color:'#6eb5e4',
            fontSize: 18,
        },
       num_gas:{
            color:'#EE9A49',
            fontSize: 18,
        },
        subnum:{
            color:'#777',
            fontSize: 12,
        },
        titleBox_subnum:{
            flex:1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
        },
        
        item_chart:{
            flex:3,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            borderColor: 'black',
             borderBottomWidth: 1,
            backgroundColor: '#333',
        },
        icon: {
        alignSelf: 'center',
        height: 18,
        width: 18,
  },

      type_title:{
            flex:1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
        },
        type_num:{
            flex:3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        subtype_num:{
            borderRadius: 70,
            width:70,
            height:70,
            borderColor: '#777777',
            borderWidth: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        type_subnum:{
            flex:1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
        },
        typetitle:{
            color:'#dddddd',
            fontSize: 20,
            
        },
        typenum:{
            color:'#7FFF00',
            fontSize: 20,
        },
        typesubnum:{
            color:'#777',
            fontSize: 14,
        },
});

var chartData = [
    // {
    //     name:'BarChart',
    //     type:'bar',
    //     color:'purple',
    //     widthPercent:0.6,
    //     data:[
    //         30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30
    //     ]
    // },
    {
        name:'LineChart',
        color:'#7FFF00',
        lineWidth:1,
        showDataPoint:false,
        data:[
             52, 41, 31, 52, 66, 22, 11
        ]
    },
    {
        name:'LineChart',
        color:'#6eb5e4',
        lineWidth:1,
        showDataPoint:false,
        data:[
            8, 22, 24, 34, 16, 12, 21
        ]
    },
    {
        name:'LineChart',
        color:'#71c3c1',
        lineWidth:1,
        showDataPoint:false,
        data:[
            4, 12, 14, 14, 6, 11, 21
        ]
    }
];

var chartData1 = [
    {
        name:'BarChart',
        type:'bar',
        color:'#6eb5e4',
        widthPercent:0.2,
        data:[
           5, 21, 13, 21, 34, 55, 30
        ]
    },
    {
        name:'LineChart',
        color:'#6eb5e4',
        lineWidth:1,
        showDataPoint:false,
        data:[
             52, 41, 31, 52, 66, 22, 11
        ]
    }];

    var chartData2 = [
    {
        name:'BarChart',
        type:'bar',
        color:'#EE9A49',
        widthPercent:0.2,
        data:[
           45, 61, 73, 41, 34, 55, 30
        ]
    },
    {
        name:'LineChart',
        color:'#EE9A49',
        lineWidth:1,
        showDataPoint:false,
        showYAxisLabels:false,
        data:[
            24, 11, 14, 14, 26, 11, 21
        ]
    }];

var xLabels = ['11-1','11-2','11-3','11-4','11-5','11-6','11-7'];
 // verticalGridStep="5"q
class SimpleChart extends Component {
    render() {
        return (
             <ScrollView style={styles.scrollcontainer}>
                <View style={styles.row}>
                  <View style={[styles.totalBox]}>
                              <View style={styles.type_title}><Text style={styles.typetitle} > 电</Text></View>
                              <View style={[styles.type_num]}>
                              <View style={[styles.subtype_num]}>
                                 <Text style={styles.typenum}>1212</Text>
                                 <Icon name={'ion|ios-arrow-thin-down'} size={20} color='#7FFF00' style={styles.icon} />
                               </View>
                              </View>
                              <View style={[styles.type_subnum]}><Text style={styles.typesubnum}>1031</Text></View>
                         </View>
                        <View style={styles.chartCol}>
                    <View style={styles.item_title}>
                         <View style={[styles.titleBox]}>
                             <View style={styles.titleBox_title}><Text style={styles.title} > 水泵</Text></View>
                             <View style={[styles.titleBox_num]}><Text style={styles.num}>101</Text>
                               <Icon name={'ion|ios-arrow-thin-up'} size={20} color='red' style={styles.icon} />
                             </View>
                             <View style={[styles.titleBox_subnum]}><Text style={styles.subnum}>1231</Text></View>
                         </View>
                         <View style={[styles.titleBox]}>
                              <View style={styles.titleBox_title}><Text style={styles.title} > 空调</Text></View>
                              <View style={[styles.titleBox_num]}><Text style={styles.num}>313</Text>
                              <Icon name={'ion|ios-arrow-thin-up'} size={20} color='red' style={styles.icon} />
                             </View>
                              <View style={[styles.titleBox_subnum]}><Text style={styles.subnum}>5031</Text></View>
                         </View>
                         <View style={[styles.titleBox]}>
                              <View style={styles.titleBox_title}><Text style={styles.title} > 照明</Text></View>
                              <View style={[styles.titleBox_num]}><Text style={styles.num}>199</Text></View>
                              <View style={[styles.titleBox_subnum]}><Text style={styles.subnum}>3111</Text></View>
                         </View>
                    </View>
                    <View style={styles.item_chart}>
                        <RNChart style={styles.chart} showGrid={false}
                            chartData={chartData}  xLabels={xLabels}>
                        </RNChart>
                    </View>
                    </View>
                </View>
                 <View style={styles.row}>
                  <View style={[styles.totalBox]}>
                              <View style={styles.type_title}><Text style={styles.typetitle} > 水</Text></View>
                              <View style={[styles.type_num]}>
                              <View style={[styles.subtype_num]}><Text style={styles.num_water}>213</Text>
                               <Icon name={'ion|ios-arrow-thin-up'} size={20} color='red' style={styles.icon} />
                              </View>
                              </View>
                              <View style={[styles.type_subnum]}><Text style={styles.typesubnum}>1031</Text></View>
                         </View>
                  <View style={styles.chartCol}>
                   <View style={styles.item_title}>
                        
                         <View style={[styles.titleBox]}>
                              <View style={styles.titleBox_title}><Text style={styles.title} > 生活</Text></View>
                              <View style={[styles.titleBox_num]}><Text style={styles.num_water}>1999</Text></View>
                              <View style={[styles.titleBox_subnum]}><Text style={styles.subnum}>67127</Text></View>
                         </View>
                         <View style={[styles.titleBox]}>
                              <View style={styles.titleBox_title}><Text style={styles.title} > 消防</Text></View>
                              <View style={[styles.titleBox_num]}><Text style={styles.num_water}>29</Text></View>
                              <View style={[styles.titleBox_subnum]}><Text style={styles.subnum}>677</Text></View>
                         </View>
                    </View>
                    <View style={styles.item_chart}>
                        <RNChart style={styles.chart} showGrid={false}
                            chartData={chartData1}  xLabels={xLabels}>
                        </RNChart>
                    </View>
                </View>
                </View>
                <View style={styles.row}>
                <View style={[styles.totalBox]}>
                              <View style={styles.type_title}><Text style={styles.typetitle} > 汽</Text></View>
                              <View style={[styles.type_num]}>
                              <View style={[styles.subtype_num]}><Text style={styles.num_gas}>117</Text>
                              <Icon name={'ion|ios-arrow-thin-down'} size={20} color='#7FFF00' style={styles.icon} />
                              </View>
                              </View>
                              <View style={[styles.type_subnum]}><Text style={styles.typesubnum}>1431</Text></View>
                         </View>
                <View style={styles.chartCol}>
                    <View style={styles.item_title}>
                         <View style={[styles.titleBox]}>
                              <View style={styles.titleBox_title}><Text style={styles.title} >分项1</Text></View>
                              <View style={[styles.titleBox_num]}><Text style={styles.num_gas}>89</Text></View>
                              <View style={[styles.titleBox_subnum]}><Text style={styles.subnum}>1104</Text></View>
                         </View>
                         <View style={[styles.titleBox]}>
                              <View style={styles.titleBox_title}><Text style={styles.title} > 分项2</Text></View>
                              <View style={[styles.titleBox_num]}><Text style={styles.num_gas}>19</Text></View>
                              <View style={[styles.titleBox_subnum]}><Text style={styles.subnum}>204</Text></View>
                         </View>
                    </View>
                    <View style={styles.item_chart}>
                        <RNChart style={styles.chart} showGrid={false} labelFontSize={8}
                            chartData={chartData2}  xLabels={xLabels}>
                        </RNChart>
                    </View>
                </View>
                </View>
             </ScrollView>
        );
    }
}
 module.exports = SimpleChart;