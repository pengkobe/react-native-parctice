/**
 *  author:pengyi
 *  create at 2015-09-24
 */
'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var Intro = require('./Intro');
var Login = require('./Login');
var Storage = require('./utils/Storage');
var Router = require('./configs/Router')

var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React;


var STORAGE_KEY ='pengyi';

var InitComp;

//keep intro page show once
_loadInitialState();

 function _loadInitialState() {
    try {
        var value =  Storage.getItem(STORAGE_KEY);
        if (value !== null){
            InitComp=Login;
        }
        else{
            InitComp=Intro;
            _onValueChange('123').done();
        }
    } catch (error) {
        throw error;
    }
}

 function _onValueChange(selectedValue) {
    try {
         Storage.setItem(STORAGE_KEY, selectedValue);
    } catch (error) {
        throw error;
    }
}


var EFOS_IOSAPP = React.createClass({
   
   renderScene: function(route, navigator) {
          this.router = this.router || new Router(navigator);

           var Component = route.component;
           var navBar = route.navigationBar;
           
           if (navBar) {
               navBar = React.addons.cloneWithProps(navBar, {
                          navigator: navigator,
                          route: this.router 
                        });
           }
          
           return (<View style={styles.navigator}>
                   {navBar}
                   <Component navigator={navigator}  router={this.router} data={route.props}/>
                   </View>
                   );
      },
                                    
  render: function() {
    return (
            <Navigator
              style={styles.navigator}
              renderScene={this.renderScene}
              initialRoute={{
              component: InitComp,
              navigationBar: <NavigationBar title="登陆页"/>
            }}
            />
    );
  }
});

var styles = React.StyleSheet.create({
                 container: {
                        flex: 1,
                        backgroundColor: '#333',
                 },
                 navigator:{flex:1,backgroundColor: '#333',}
             });

AppRegistry.registerComponent('EFOS_IOSAPP', () => EFOS_IOSAPP);
