'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var NavigationBar = require('react-native-navbar');
var Dashboard = require('./subpages/Dashboard');
var DeviceMonitor = require('./subpages/DeviceMonitor');
var EnergyStatus = require('./subpages/EnergyStatus');
var Settings = require('./subpages/Settings');
var EmployeeList = require('./subpages/EmployeeList');

var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var TabBarExample = React.createClass({
  statics: {
      title: '导航',
      description: '基于tab的导航.',
  },

  displayName: 'Tab导航',

  getInitialState: function() {
      return {
        selectedTab: 'blueTab',
        notifCount: 0,
        presses: 0,
      };
  },
  
  _renderContent: function(color: string, pageText: string, num?: number) {
       if(pageText=='首页'){
         return (<Dashboard router={this.props.router} />);
       }
       if(pageText=='能源态势'){
         return (<EnergyStatus />);
       }
       if(pageText=='设施态势'){
         return (<DeviceMonitor router={this.props.router}/>);
       }
       if(pageText=='设置'){
         return (<Settings />);
       }
       if(pageText=='员工管理'){
         return (<EmployeeList router={this.props.router}/>);
       }
       return (
               <View style={[styles.tabContent, {backgroundColor: color}]}>
               <Text style={styles.tabText}>{pageText}</Text>
               <Text style={styles.tabText}>{num} 渲染 {pageText}</Text>
               </View>
        );
  },

  render: function() {
      return (
        <TabBarIOS
          tintColor={'#c1d82f'}
          barTintColor={'#000000'}
          styles={styles.tabBar}>
          
          <TabBarItemIOS
            title="设施态势"
            iconName={'fontawesome|tachometer'}
            iconSize={32}
            accessibilityLabel="Articles Tab"
            badgeValue={this.state.notifCount > 0 ? this.state.notifCount+'' : undefined}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
                notifCount: this.state.notifCount + 1,
              });
            }}>
            {this._renderContent('#783E33', '设施态势', this.state.notifCount)}
          </TabBarItemIOS>
              <TabBarItemIOS
              title="能源态势"
              iconName={'fontawesome|pie-chart'}
              iconSize={32}
              accessibilityLabel="Messages Tab"
              selected={this.state.selectedTab === 'red123Tab'}
              onPress={() => {
              this.setState({
                            selectedTab: 'red123Tab'
                            });
              }}>
              {this._renderContent('#783E33', '能源态势', this.state.notifCount)}
              </TabBarItemIOS>
         
           <TabBarItemIOS
              title="首页"
              iconName={'fontawesome|desktop'}
              badgeValue={'3'}
              iconSize={32}
              accessibilityLabel="Home Tab"
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}>
              {this._renderContent('#414A8C', '首页')}
            </TabBarItemIOS>

           <TabBarItemIOS
            title="员工管理"
            iconName={'fontawesome|street-view'}
            iconSize={32}
            accessibilityLabel="Settings Tab"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
                presses: this.state.presses + 1
              });
            }}>
            {this._renderContent('#21551C', '员工管理', this.state.presses)}
          </TabBarItemIOS>
          <TabBarItemIOS
            title="设置"
            iconName={'fontawesome|cog'}
            iconSize={32}
            accessibilityLabel="Settings Tab"
            selected={this.state.selectedTab === 'settingTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'settingTab'
              });
            }}>
            {this._renderContent('#21551C', '设置', this.state.presses)}
          </TabBarItemIOS>
        </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
      tabBar: {
        backgroundColor: '#dfdfdf',
        flex: 1,
        color: '#ff0000',
        tintColor: '#877324'
      },
      tabContent: {
        flex: 1,
        marginTop:20,
        alignItems: 'center',
      },
      tabText: {
        color: 'white',
        margin: 50,
      },
});

module.exports = TabBarExample;
