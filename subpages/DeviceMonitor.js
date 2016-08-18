/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { Text, View, StyleSheet,Dimensions, ScrollView, Image, ListView,ActivityIndicatorIOS,TouchableOpacity } = React;
var ScrollableTabView = require('react-native-scrollable-tab-view');
var GridView = require('react-native-grid-view');

var deviceWidth = Dimensions.get('window').width;
var ScrollingTabBar = require('../components/ScrollingTabBar');
var DeviceMonitorService = require('../service/DeviceMonitorService');

var  PER_ROW = 4;

//按配电房
var NavType = React.createClass({
  render: function() {
      var NavCode =this.props.navType.NavCode;
       var imgSrc='';
       switch(NavCode){
          case 1: imgSrc = require('image!r1');break;
          case 2: imgSrc = require('image!r2');break;
          case 3: imgSrc = require('image!r3');break;
          case 4: imgSrc = require('image!r4');break;
          case 5: imgSrc = require('image!r4');break;

          default:imgSrc = require('image!r1');break;
      }
     
      return <View style={styles.movie} >
         <TouchableOpacity style={styles.button} onPress={() => this.props.router.toDeviceInfo({})} underlayColor='#0f59bc'>
        <Image
          source={imgSrc} 
          style={styles.thumbnail}
        />
        </TouchableOpacity>
        <View >
          <Text 
          style={styles.title}
          numberOfLines={3}>{this.props.navType.NavName}</Text>
        </View>
      </View>
  },
});

var DisPlayByNavType = React.createClass({
    getInitialState: function() {
      return {
        dataSource: null,loaded: false,
      };
    },

    componentDidMount: function() {
      this.fetchData();
    },

    fetchData: function() {
      var info ={
              ProjectCode:'9'
      };

    DeviceMonitorService.req.GetByNavType(info).then(data=> {
         this.setState({
            dataSource: data,
            loaded: true,
         });
         })
         .catch(err=> {
              console.log(err);      
         })
        .done();
  },

    render: function() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }

      return (
        <GridView
          items={this.state.dataSource} itemsPerRow={PER_ROW}
          renderItem={this.renderItem} style={styles.listView}
        />
      );
    },

  renderLoadingView: function() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  },
  renderItem: function(item) {
      return <NavType router={this.props.router}  navType={item} />
  },
});

//按设备类型
var DeviceType = React.createClass({
 

  render: function() {
      var NavCode =this.props.deviceType.TypeCode;

      var imgSrc='';
      switch(NavCode){
        
          case 1: imgSrc = require('image!1');break;
          case 2: imgSrc = require('image!2');break;
          case 3: imgSrc = require('image!3');break;
          case 4: imgSrc = require('image!4');break;
          case 5: imgSrc = require('image!5');break;
          case 6: imgSrc = require('image!6');break;
          case 7: imgSrc = require('image!7');break;
          case 8: imgSrc = require('image!8');break;
          case 9: imgSrc = require('image!9');break;
          case 10: imgSrc = require('image!10');break;

          case 11: imgSrc = require('image!11');break;
          case 12: imgSrc = require('image!12');break;
          case 13: imgSrc = require('image!13');break;
          case 14: imgSrc = require('image!14');break;
          case 15: imgSrc = require('image!15');break;
          case 16: imgSrc = require('image!16');break;
          case 17: imgSrc = require('image!17');break;
          case 18: imgSrc = require('image!18');break;
          case 19: imgSrc = require('image!19');break;
          case 20: imgSrc = require('image!20');break;

          case 21: imgSrc = require('image!21');break;
          case 22: imgSrc = require('image!22');break;
          case 23: imgSrc = require('image!23');break;
          case 24: imgSrc = require('image!24');break;
          default:imgSrc = require('image!1');break;
      }

      return <View style={styles.movie} >
         <Image  source={imgSrc}   style={styles.thumbnail}/>
       <View>
         <Text 
         style={styles.title}
         numberOfLines={3}>{this.props.deviceType.TypeName}</Text>
       </View>
      </View>
  },
});

var DisPlayByDeviceType = React.createClass({
  getInitialState: function() {
    return {
      dataSource: null,
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    var info ={
            ProjectCode:'9'
    };

    DeviceMonitorService.req.GetByDeviceType(info).then(data=> {
             this.setState({
                dataSource: data,
                loaded: true,
             });
             console.log('fetch device type over');
         })
         .catch(err=> {
              console.log(err);      
          })
          .done();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <GridView
        items={this.state.dataSource}
        itemsPerRow={PER_ROW}
        renderItem={this.renderItem}
        style={styles.listView}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  },

  renderItem: function(item) {
      return <DeviceType deviceType={item} />
  
  },
});

//按建筑
var BuildingType = React.createClass({
  render: function() {
      var BuildingCode =this.props.buildingType.AreaCode;
      var imgSrc='';

      if(BuildingCode >8){
          return <View />
      }

       switch(BuildingCode){
          case 1: imgSrc = require('image!L-1');break;
          case 2: imgSrc = require('image!L-2');break;
          case 3: imgSrc = require('image!L-3');break;
          case 4: imgSrc = require('image!L-4');break;
          case 5: imgSrc = require('image!L-5');break;
          case 6: imgSrc = require('image!L-6');break;
          case 7: imgSrc = require('image!L-7');break;
          case 8: imgSrc = require('image!L-8');break;
          case 9: imgSrc = require('image!L-9');break;
          case 10: imgSrc = require('image!L-10');break;

          case 11: imgSrc = require('image!L-11');break;
          case 12: imgSrc = require('image!L-12');break;
          case 13: imgSrc = require('image!L-13');break;
          case 14: imgSrc = require('image!L-14');break;
          case 15: imgSrc = require('image!L-15');break;
          case 16: imgSrc = require('image!L-16');break;
          case 17: imgSrc = require('image!L-17');break;
          case 18: imgSrc = require('image!L-18');break;
          case 19: imgSrc = require('image!L-19');break;
          case 20: imgSrc = require('image!L-20');break;

          default:require('image!L-1');break;
      }
      

      return <View style={styles.movie} >
        <Image
          source={imgSrc} 
          style={styles.thumbnail}
        />
        <View >
          <Text 
          style={styles.title}
          numberOfLines={3}>{this.props.buildingType.AreaName}</Text>
        </View>
      </View>
  },
});

var DisPlayByBuildingType = React.createClass({
  getInitialState: function() {
    return {
      dataSource: null,
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    var info ={
            projectCode:'3'
    };

    DeviceMonitorService.req.GetByBuildingType(info).then(data=> {
             this.setState({
                dataSource: data,
                loaded: true,
             });
             console.log('fetch building type over');
         })
         .catch(err=> {
              console.log(err);      
          })
          .done();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <GridView
        items={this.state.dataSource}
        itemsPerRow={PER_ROW}
        renderItem={this.renderItem}
        style={styles.listView}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View>
          <ActivityIndicatorIOS size='large'/>
      </View>
    );
  },

  renderItem: function(item) {
      return <BuildingType buildingType={item} />
      
  },
});

var RugbyExample = React.createClass({
  getInitialState() {
    return { selectedTab: 0 }
  },

  onChangeTab({i, ref}) {
    setTimeout(() => {
      this.setState({selectedTab: i});
    }, 500);
  },
//  
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          style={{backgroundColor: '#333'}}
          onChangeTab={this.onChangeTab}
          edgeHitWidth={deviceWidth / 3}
          renderTabBar={() => <ScrollingTabBar />}>
           <DisPlayByNavType router={this.props.router} tabLabel="按配电房"/>  
           <DisPlayByDeviceType router={this.props.router} tabLabel="按设备类型"/>  
           <DisPlayByBuildingType router={this.props.router} tabLabel="按建筑"/>  
        </ScrollableTabView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    movie: {
        height: 80,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
      },
      title: {
        fontSize: 10,
        color:'white',
        marginBottom: 8,
        width: 90,
        textAlign: 'center',
      },
      year: {
        textAlign: 'center',
        color:'white',
      },
      thumbnail: {
        width: 53,
        height: 53,
      },
      listView: {
        paddingTop: 10,
        backgroundColor: '#333',
      },

      container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#333',
      },
      tabView: {
        overflow: 'hidden',
        width: deviceWidth,
        padding: 7,
        backgroundColor: '#333',
      },
      card: {
        borderWidth: 1,
        backgroundColor: '#333',
        borderColor: '#333',
        margin: 5,
        marginTop: -10,
        padding: 5,
      },
     button: {
      
    },
});

module.exports = RugbyExample;