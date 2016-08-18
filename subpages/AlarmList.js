/**
 * Created by pengyi on 10/14/15.
*/
'use strict';

var React = require('react-native');
var Accordion = require('react-native-accordion');
var AlarmService = require('../service/AlarmService');
var NumberPickerItem = require('../components/NumberPickerItem');
var RefreshableListView = require('react-native-refreshable-listview');

var {
    StyleSheet,
    Component,
    ListView,
    Text,
    Image,
    View
} = React;

var AlarmList = React.createClass({
  getInitialState:function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      onChange: function () {},
      value: '',
      beforeStatus: '',
      status: '未确认',
      //afterStatus: '到场',
      confirm:1,
      arrival:2,
      torepair:2,
      finish:2,
      dataSource: ds.cloneWithRows([]),
    };
  },

  fetchData:function(pj) {
        console.log('fetch AlarmList');
        var projectCode = '3';
        if(pj){
            projectCode = pj;
        }

         var info ={
            // UserID:'62',
            // projectCode:'9'
             UserID:'23',
            projectCode:'3'
         };

        AlarmService.req.getAlarmList(info).then(data=> {
             this.setState({
                   dataSource: this.state.dataSource.cloneWithRows(data)
             });
             console.log('fetch pengyi over');
         })
         .catch(err=> {
              console.log(err);      
          })
          .done();
    },

    componentDidMount:function() {
        this.fetchData();
    },

      // <ListView style={styles.container}
      //   dataSource={this.state.dataSource}
      //   renderRow={this._renderRow.bind(this)}
      // />
    reloadItems:function(){
        return delay(1000).then(() => {
          this.fetchData();
        })
      },

  render:function() {
    return (
      <View style={styles.container1}>
      <RefreshableListView
                  ref="listview"
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                  loadData={this.reloadItems.bind(this)}
                  refreshDescription="拉取中..."
                />
                </View>
    );
  },

  _renderRow:function(info) {
    var imgSrc = require('image!24');

    var header = (
      <View>
        <View style={styles.row}>
          <View style={styles.timeContainer}>
              <Image
              source={imgSrc} 
              style={styles.thumbnail}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>
            [{info.DeviceName}]-{info.AlarmInfo}
            </Text>
            <Text style={styles.description} numberOfLines={1}>
              {info.AlarmTime}
            </Text>
            <Text style={styles.timeText} >
              <Text style={styles.timeRange}>
              确认人:{info.EName}
                </Text>
            </Text>
          </View>
          <View style={styles.stateContainer}>
            <Text style={styles.bfstate} numberOfLines={1}>
                {this.state.beforeStatus}
            </Text>
            <Text style={styles.state} numberOfLines={1}>
                {this.state.status}
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );

    var content = (
      <View style={styles.container}>
        <View style={styles.innerBox}>
          <NumberPickerItem value={'确认'} current={this.state.confirm} onChange={this.handleChange.bind(this)} />
          <View style={styles.pline} />
          <NumberPickerItem value={'到场'} current={this.state.arrival} onChange={this.handleChange.bind(this)} />
          <View style={styles.pline} />
          <NumberPickerItem value={'转报修'} current={this.state.torepair} onChange={this.handleChange.bind(this)} />
          <View style={styles.pline} />
          <NumberPickerItem value={'完成'} current={this.state.finish} onChange={this.handleChange.bind(this)} />
        </View>
      </View>
    );

    return (
      <Accordion
        activeOpacity={0}
        underlayColor={'#777'}
        header={header}
        content={content}
        easing="easeOutCubic" />
    );
  },

  handleChange: function (value) {
    if(value=='确认'){
       this.setState({confirm:0});
       this.setState({arrival:1});
       
       this.state.beforeStatus='已确认－';
       this.state.status='未到场';
       //this.state.afterStatus='转报修';
       
    }
    if(value=='到场'){
        this.setState({arrival:0});
         this.setState({torepair:1});
         this.state.beforeStatus='已到场－';
         this.state.status='未转报修';
         //this.state.afterStatus='完成';
    }
    if(value=='转报修'){
        this.setState({torepair:0});
        this.setState({finish:1});
        this.state.beforeStatus='已转报修－';
         this.state.status='未完成';
         //this.state.afterStatus='';
    }
    if(value=='完成'){
        this.setState({finish:0});
         this.state.beforeStatus='已完成';
         this.state.status='';
         //this.state.afterStatus='';
    }
  }
});

var styles = StyleSheet.create({
  container1: {
                                  flex: 1,
                               },
       container:{
        backgroundColor: '#333333',
      },
      innerBox:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        alignSelf: 'stretch',
        marginTop:5,
        marginBottom:5,
        height:60
      },
      pline:{
        flex:1,
        justifyContent: 'center',
        height:2,
        backgroundColor: '#777777',
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
      },
      timeContainer: {
        justifyContent: 'center',
        marginTop:5,
        width: 68,
        height: 40
      },
      stateContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

      timeText: {
        fontSize: 12,
        fontWeight: '300'
      },
      timeRange: {
        fontSize: 10,
        marginTop:4,
        color:'#777777',
        fontWeight: '300'
      },
      textContainer: {
        flex: 1,
      },
      separator: {
        height: 1,
        backgroundColor: '#777777',
      },
      title: {
        flex: 1,
        fontSize: 14,
        fontWeight: '300',
        color:'red',
        marginTop: 2,
        marginBottom: 2,
      },
      description: {
        flex: 1,
        color: '#999999',
        fontSize: 12,
      },
      bfstate:{
        flex: 1,
        marginTop: 12,
        color: '#777777',
        fontSize: 12,
      },
      state:{
        flex: 1,
        marginTop: 12,
        color: '#00ff00',
        fontSize: 16,
      },
      thumbnail: {
        width: 45,
        height: 45,
      },
});

module.exports = AlarmList;