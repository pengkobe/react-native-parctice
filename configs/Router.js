var React = require('react-native');

// 组件

var NavigationBar = require('react-native-navbar');
var PreButton = require('../components/PreButton');
var NextButton = require('../components/NextButton');

// 页面

var EmployeeList = require('../subpages/EmployeeList');
var EmployeeInfo = require('../subpages/EmployeeInfo');
var AlarmList = require('../subpages/AlarmList');
var MainPage = require('../Mainpage');
var DeviceInfo = require('../subpages/DeviceInfo');

// Config
var sceneConfig = require('./sceneConfig');


var {
    Navigator
    } = React

var customFloatFromRight = sceneConfig.customFloatFromRight


class Router {
    constructor(navigator) {
        this.navigator = navigator
    }
    
    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index + 1
        route.props = props
        route.index = nextIndex
        this.navigator.push(route)
    }

    pop() {
        this.navigator.pop()
    }

    //返回首页
    replaceWithHome() {
        this.navigator.popToTop()
    }

    toMainPage(props) {
        
        //customNext={<NextButton displayName='前进' />}
        this.push(props, {
            component: MainPage,
            title: '主页',
            name: 'mainPage',
            navigationBar:  <NavigationBar title="主页"  customPrev={<PreButton clickEle={this.clickEle()} displayName='登陆页'/>} />,
            sceneConfig: customFloatFromRight
        })
    }
     
     clickEle(){
        var me = this;
        var clickEle= {
                onPress: ()=> {
                    me.pop()
                }
        };
        return clickEle;
     }
    
    toEmployeeList(props) {
        
        this.push(props, {
            component: EmployeeList,
            title: '员工管理',
            name: 'employeeList',
            navigationBar: <NavigationBar title="员工管理" customPrev={<PreButton clickEle={this.clickEle()} displayName='主页'/>} />,
            sceneConfig: customFloatFromRight
        })
    }

    toEmployeeInfo(props) {
        this.push(props, {
            component: EmployeeInfo,
            title: '员工管理',
            name: 'employeeInfo',
            navigationBar: <NavigationBar title="员工管理"  customPrev={<PreButton clickEle={this.clickEle()} displayName='主页'/>}/>,
            sceneConfig: customFloatFromRight
        })
    }

    toAlarmList(props) {
        this.push(props, {
            component: AlarmList,
            title: '报警列表',
            name: 'AlarmList',
            navigationBar: <NavigationBar title="报警列表" customPrev={<PreButton clickEle={this.clickEle()}  displayName='主页'/>}/>,
            sceneConfig: customFloatFromRight
        })
    }

    toDeviceInfo(props) {
        this.push(props, {
            component: DeviceInfo,
            title: '设备列表',
            name: 'AlarmList',
            navigationBar: <NavigationBar title="设施详情" customPrev={<PreButton clickEle={this.clickEle()}  displayName='设施态势'/>}/>,
            sceneConfig: customFloatFromRight
        })
    }

    // replaceWithTopic(props) {
    //     let routesList = this.navigator.getCurrentRoutes()
    //     let index = routesList[routesList.length - 1].index
    //     var route = {
    //         props: props,
    //         index: index,
    //         component: Topic,
    //         sceneConfig: customFloatFromRight
    //     }
    //     this.navigator.replace(route)
    // }
}

module.exports = Router

