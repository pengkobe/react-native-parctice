/**
 * Created by pengyi on 9/24/15.
 */

'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var EmployeeInfo = require('./EmployeeInfo');
var UserService = require('../service/UserService');
var RefreshableListView = require('react-native-refreshable-listview')
var delay = require('react-native-refreshable-listview/lib/delay')
var SearchBar = require('../components/SearchBar');

var {
    Image,
    StyleSheet,
    Text,
    View,
    Component,
    ListView,
    //ScrollView,
    TouchableOpacity,
    ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
                               container1: {
                                  flex: 1,
                               },
                               container: {
                                 flex: 1,
                                 flexDirection: 'row',
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: '#333333',
                                 padding: 10
                               },
                               thumbnail: {
                                 width: 33,
                                 height: 44,
                                 marginRight: 10
                               },
                               rightContainer: {
                                 flex: 1
                               },
                               title: {
                                 fontSize: 20,
                                 marginBottom: 8,
                                 color:'#dddddd'
                               },
                               author: {
                                  color: '#656565'
                               },
                               separator: {
                                  height: 1,
                                  backgroundColor: '#777777'
                               },
                               listView: {
                                  backgroundColor: '#333333'
                               },
                               loading: {
                                  flex: 1,
                                  alignItems: 'center',
                                  justifyContent: 'center'
                               }
                               });

class EmployeeList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        isLoading: true,
        isSearching:false,
        dataSource: new ListView.DataSource({
                                            rowHasChanged: (row1, row2) => row1 !== row2
                                            })
        };
    }
    
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData(pj) {
        console.log('fetch pengyi');
        var projectCode = '7';
        if(pj){
            projectCode = pj;
        }

         var projectCode ={
            projectCode:projectCode
         };

        UserService.req.GetEmployeeList(projectCode).then(data=> {
             this.setState({
                   dataSource: this.state.dataSource.cloneWithRows(data),
                   isLoading: false
             });
             console.log('fetch pengyi over');
         })
         .catch(err=> {
              console.log(err);      
          })
          .done();
    }
    
    onSearchChange(e){
      //console.log('ss-ss'+e);
      this.fetchData(e);
    }
    
    
    render() {
        if (this.state.isLoading) {
            return this.renderLoadingView();
            console.log('loading pengyi');
        }
        //这里的bind(this)是必须的
        return  (
          <View style={styles.container1}>
                <SearchBar
                  onSearchChange={this.onSearchChange.bind(this)}
                  isLoading={this.state.isSearching}
                  onFocus={() => this.refs.listview.getScrollResponder().scrollTo(0, 0)}
                />

                <RefreshableListView
                  ref="listview"
                  dataSource={this.state.dataSource}
                  renderRow={this.renderEmployee.bind(this)}
                  loadData={this.reloadItems.bind(this)}
                  refreshDescription="拉取中..."
                />
                 </View>
                );
        
      }

    renderEmployee(employee) {
        return (
                <TouchableOpacity onPress={() => this.showEmployeeDetail(employee)} underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <Image source={require('image!user')}
                        style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{employee.EName}</Text>
                            <Text style={styles.author}>{employee.EMail}</Text>
                        </View>
                    </View>
                <View style={styles.separator} />
                </View>
                </TouchableOpacity>
                );
    }
    
    renderLoadingView() {
        return (
                <View style={styles.loading}>
                <ActivityIndicatorIOS size='large'/>
                <Text>加载中...</Text>
                </View>
                );
    }
    
    reloadItems() {
        return delay(1000).then(() => {
          this.fetchData();
        })
    }

    showEmployeeDetail(employee) {
        this.props.router.toEmployeeInfo({
              employee:employee 
        });

    }
    
    
}

module.exports = EmployeeList;