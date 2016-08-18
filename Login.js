'use strict';
var React = require('react-native');
var MainPage = require('./Mainpage');
var NavigationBar = require('react-native-navbar');
var UserService = require('./service/UserService');
var window = require('./utils/window')
var MK = require('react-native-material-kit');

var {
      ScrollView,StyleSheet,Text,TextInput,View,TouchableHighlight,ActivityIndicatorIOS,Image,Component,
} = React;

var {
  MKTextField,MKColor, mdl,
} = MK;


var styles = StyleSheet.create({
  textfield: {
    marginTop: 22,
  },
  textfieldWithFloatingLabel: {
    marginTop: 10,
  },
    description: {
       marginBottom: 20,
       fontSize: 14,
       textAlign: 'center',
       color: '#ff0000'
    },
    container: {
       flex:1,
       padding: 30,
       marginTop: 15,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#333',
    },
    flowRight: {
       flexDirection: 'column',
       alignItems: 'center',
       alignSelf: 'stretch'
    },
    buttonText: {
       fontSize: 18,
       color: 'white',
       alignSelf: 'center'
    },
    button: {
       height: 36,
       flexDirection: 'row',
       backgroundColor: '#00c0ff',
       borderColor: '#48BBEC',
       borderWidth: 0,
       borderRadius: 8,
       marginBottom: 10,
       marginTop: 20,
       alignSelf: 'stretch',
       justifyContent: 'center'
    },
    textInput: {
       height: 42,
       padding: 4,
       marginRight: 5,
       marginTop: 5,
       flex: 4,
       fontSize: 18,
       color: 'white',
       alignSelf: 'stretch',
    },
    line: {
      height:0.5,
      backgroundColor: '#ccc',
    },
    image: {
      flex:1,
      marginBottom:20,
    }
});

  var ColoredTextfield = mdl.Textfield.textfieldWithFloatingLabel()
  .withPlaceholder('用户名')
  .withStyle(styles.textfieldWithFloatingLabel)
    .withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .withTintColor(MKColor.Lime)
  .withTextInputStyle({color: MKColor.Lime})
  .withHighlightColor(MKColor.Lime)
  .build();

var PasswordInput = mdl.Textfield.textfieldWithFloatingLabel()
  .withPassword(true)
  .withPlaceholder('密码')
  .withDefaultValue('')
  .withTintColor(MKColor.Lime)
  .withTextInputStyle({color: MKColor.Lime})
  .withHighlightColor(MKColor.Lime)
  .withStyle(styles.textfieldWithFloatingLabel)
  .withOnFocus(() => console.log('Focus'))
  .withOnBlur(() => console.log('Blur'))
  .withOnEndEditing((e) => console.log('EndEditing', e.nativeEvent.text))
  .withOnSubmitEditing((e) => console.log('SubmitEditing', e.nativeEvent.text))
  .withOnTextChange((e) => console.log('TextChange', e))
  .withOnChangeText((e) => console.log('ChangeText', e))
  .build();


class Login extends Component {
 constructor(props) {
    super(props);
    this.state = {
      DefaultUserAccount: 'py',
      UserAccount: '',
      Password:'',
      isLoading: false,
      message: ''
    };
  }

  onLoginPressed() {
     this.setState({ isLoading: true, message: '' });
      var info ={
          UserAccount:'py',
          Password:'123456',
          UseVerificationCode:false,
          VerificationCode:1
       };

      UserService.req.Login(info).then(res=> {
             this._handleResponse(res);
       })
       .catch(err=> {
          this.setState({
            isLoading: false,message: err});
        })
       .done();
    }

  _handleResponse(response) {
      this.setState({ isLoading: false });
      this.props.router.toMainPage({ });
  }

  render() {
  	 var spinner = this.state.isLoading ?
        	( <ActivityIndicatorIOS
            	hidden='true'
            	size='large'/> ) :
        	( <View/>);

      return (
        <ScrollView>
          <View style={styles.container}>
              <View style={styles.flowRight}>
              <Image source={require('image!user')} style={styles.image}/>
              <ColoredTextfield
                  style={styles.textInput}
                  placeholder='用户名'
                  onChangeText={(text) => {
                                  this.UserAccount = text
                              }}
                  onEndEditing={()=>{
                    this.refs["pwInput"].focus();
                }}
              />
               <View style={styles.line}></View>
              <PasswordInput
                  ref="pwInput"
                  secureTextEntry={true}
                  style={styles.textInput}
                  onChangeText={(text) => {
                                  this.Password = text
                              }}
                  placeholder='密码'
              />
              <View style={styles.line}></View>
           </View>
          <TouchableHighlight style={styles.button}
              onPress={this.onLoginPressed.bind(this)}
              underlayColor='#0f59bc'>
            <Text style={styles.buttonText}>登陆</Text>
          </TouchableHighlight>
          {spinner}
          <Text style={styles.description}>{this.state.message}</Text>
        </View>
        </ScrollView>
   );
  }
}

module.exports = Login;