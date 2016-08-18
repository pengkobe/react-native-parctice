/**
 * Created by pengyi on 9/25/15.
 */

'use strict';

var React = require('react-native');
var TimeLine = require('../components/TimeLine')
var config = require('../configs/config')

var {
  MKButton,
  getTheme,
  MKColor,
  setTheme,
} = require('react-native-material-kit');

// colored button with default theme (configurable)
var ColoredRaisedButton = MKButton.coloredButton()
  .withText('拨号')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();

var {
      StyleSheet,
      Modal,
      TouchableHighlight,
      MapView,
      Text,
      ScrollView,
      View,
      Component,
      Image
} = React;

class EmployeeInfo extends Component {

constructor(props) {
    super(props);
    this.state = {
      animated: true,
      modalVisible: false,
      transparent: false,
    };
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _toggleAnimated() {
    this.setState({animated: !this.state.animated});
  }

  _toggleTransparent() {
    this.setState({transparent: !this.state.transparent});
  }

    render() {

var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;

      var position = {
           latitude: 22.55552051,
           longitude: 113.95157933,
           latitudeDelta: 0.000095,
           longitudeDelta: 0.0002156
         };
      var employee = this.props.data.employee;
      console.log(employee.Phote);
      var imageURI = config.domain + '/Images/photo/'+employee.Phote;
      var description =employee.EPhone;
      return (
         <ScrollView style={styles.container}>

          <Modal
            animated={this.state.animated}
            transparent={this.state.transparent}
            visible={this.state.modalVisible}>
            <View style={[styles.container_modal, modalBackgroundStyle]}>
              <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                <MapView annotations={[{latitude: 113.95157933, longitude: 22.55552051,title: '你在这里'}]}
                showsUserLocation={false} style={styles.map} region={position} />
                <TouchableHighlight  onPress={this._setModalVisible.bind(this, false)} underlayColor='#dddddd'>
                 <Text style={styles.description_position}>点击此处返回.</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

            <View style={styles.imgview}>
             <Image style={styles.image} source={{uri: imageURI}} />
              <View style={styles.infoview}>
                 <Text style={styles.description}>电话:{description}</Text>
                 <TouchableHighlight  onPress={this._setModalVisible.bind(this, true)} underlayColor='#dddddd'>
                   <Text  style={styles.description_position}>当前位置</Text>
                 </TouchableHighlight>
             </View>
              </View>
             <View >
                <ColoredRaisedButton />
             </View>
             <View style={styles.timeLine}>
                <TimeLine/>
             </View>
           <View style={styles.imgview}>
           
          </View>
         </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
        container: {
           marginTop: 0,
           backgroundColor: '#333333',
        },
        image: {
           width: 112,
           flex:1,
           borderRadius:56,
           height: 112,
           padding: 5
        },
        description: {
           padding: 5,
           fontSize: 15,
           color: '#656565'
        },
        description_position:{
          padding: 5,
          fontSize: 15,
          color: '#656565',
          textDecorationLine:'underline',
          textDecorationStyle:'solid'
        },
        map: {
           height: 300,
         },
        timeLine:{
           height:300
        },
        imgview:{
           flex: 1,
           flexDirection: 'column',
           padding:0,
           justifyContent: 'center',
           alignItems: 'center'
        },
        infoview:{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        },
        container_modal: {
          flex: 1,
          backgroundColor: '#333333',
          justifyContent: 'center',
          padding: 20,
        },
        innerContainer: {
          borderRadius: 10,
        },
        modalButton: {
          marginTop: 10,
        },
 });

module.exports = EmployeeInfo;