

/**
 * Created by pengyi on 15/10/21.
 */

const React = require('react-native');

const {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SwitchIOS
} = React;

const {
  MKIconToggle,
  MKSwitch,
  MKRadioButton,
  getTheme,
  MKColor,
  mdl,
  setTheme,
} = require('react-native-material-kit');

// customize the material design theme
// setTheme({
//   primaryColor: MKColor.Orange,
// });

const styles = StyleSheet.create({
  slider: {
    width: 130,
  },
  toggleText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#616161',
  },
  toggleOnText: {
    color: getTheme().primaryColor,
  },
  switch: {
    marginTop: 2,
    // marginBottom: 5,
  },
  appleSwitch: {
    marginTop: 7,
    marginBottom: 7,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#333', 
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#333',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 7, marginRight: 7,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10, marginBottom: 20,
  },
  legendLabel: {
    textAlign: 'center',
    color: '#999999',
    marginTop: 10, marginBottom: 20,
    fontSize: 16,
    fontWeight: '300',
  },
  legendLabel1: {
    textAlign: 'center',
    color: '#999999',
    marginTop: 10, marginBottom: 10,
    fontSize: 16,
    fontWeight: '300',
  },
  separator: {
      height: 1,
      backgroundColor: '#777777'
  },
});

const SliderWithValue = mdl.Slider.slider()
  .withStyle(styles.slider)
  .withMin(10)
  .withMax(100)
  .build();

  const CheckedIconToggle = MKIconToggle.toggle()
  .withChecked(true)
  .withOnCheckedChange(this._onChecked)
  .withOnPress(this._onToggleClicked)
  .build();

class ValueText extends Component {
constructor(props) {
    super(props);
    this.state = {
      curValue: 55,
    };
  }

  onChange(curValue) {
    this.setState({curValue});
  }

  render() {
    return (
      <Text style={styles.legendLabel}>
            {this.state.curValue.toFixed(2)} ({this.props.rangeText})
      </Text>
    );
  }
}

class Sliders extends Component {
  constructor() {
      super();
      this.radioGroup = {};//new MKRadioButton.Group();
    
  }

  componentDidMount() {
    const slider = this.refs.sliderWithValue;
    slider.value = 25;
    setTimeout((() => {
      slider.value = 75;
    }), 1000);

  }

  _onChecked(event) {
    console.log(`icon toggle is checked? ${event.checked}`);
  }

  _onToggleClicked() {
    console.log('you clicked a toggle');
  }

// <View style={styles.row}>
//           <View style={styles.col}>
//             <Text style={styles.legendLabel}>消息请求时间</Text>
//           </View>
//           <View style={styles.col}>
//              <mdl.Slider style={styles.slider}/>
//              <ValueText ref="valueText" rangeText="10秒钟~100秒钟" />
//           </View>
//         </View>

//  <View style={styles.row}>
//           <View style={styles.col}>
//               <Text style={styles.legendLabel}>位置保护</Text>
//           </View>
//           <View style={styles.col}>
//             <MKSwitch checked={true}
//                         style={styles.switch}
//             />
//           </View>
//         </View>

  render() {
    return (
      <View style={[styles.scrollView, {
              marginTop: 20,
            }]}
            contentContainerStyle={styles.container}>


    <View style={styles.row}>
          <View style={styles.col}>
              <Text style={styles.legendLabel}>报警提醒</Text>

          </View>
          <View style={styles.col}>
            <MKSwitch style={styles.appleSwitch}
                        trackSize={30}
                        trackLength={52}
                        onColor="rgba(255,152,0,.3)"
                        thumbOnColor={MKColor.Orange}
                        rippleColor="rgba(255,152,0,.2)"
                        onPress={() => console.log('orange switch pressed')}
                        onCheckedChange={(e) => console.log('orange switch checked', e)}
              />
        
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.legendLabel1}>报警间隔时间</Text>
          </View>
          <View style={styles.col}>
            <SliderWithValue
              ref="sliderWithValue"
              onChange={(curValue) => this.refs.valueText.onChange(curValue)}
              />
            <ValueText ref="valueText" rangeText="10秒~100秒" />
          </View>
             <View style={styles.separator} />
        </View>

    
      </View>
    );
  }
}

module.exports = Sliders;