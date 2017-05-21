import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image,
  VrButton,
} from 'react-vr';

export default class ReactVRCodeOnApp extends React.Component {
  state = { pizza: false, x: -9, y: 0, z: -3, rotate: 0 }

  move = () => {
    setTimeout( () => {
      let x = this.state.x <= -.5 ? this.state.x + .1 : this.state.x;
      let z = this.state.z <= 0 ? this.state.z + .03 : this.state.z;
      let rotate = this.state.rotate + 10
      this.setState({x, z, rotate });
    }, 50);
  }

  dingDong = () => {
    this.setState({ pizza: true });
  }

  render() {
    let { pizza, x, y, z, rotate } = this.state;
    if (this.state.pizza)
      this.move();
    return (
      <View>
        <Pano source={asset('outside.jpg')}/>
        { this.state.pizza ?
          <Image
            source={asset('pizza.png')}
            style={{
              height: .5,
              width: .5,
              layoutOrigin: [0.5, 0.5],
              transform: [{ translate: [x, y, z]}, {rotateY: `${rotate}deg`, rotateX: `${rotate}deg`}]
            }}
          /> : null 
        }
        <VrButton onClick={this.dingDong}>
          <Image 
            source={asset('doorbell.png')}
            style={{
              height: .5,
              width: .5,
              layoutOrigin: [0.5, 0.5],
              transform: [{ translate: [-8, 0, -3] }]
            }}
          />
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVRCodeOnApp', () => ReactVRCodeOnApp);
