import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  requireNativeComponent,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import details from './petDetails';
var i = 0;
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      petName: details[i].name,
      petLattitude: details[i].latitude,
      petLongitude: details[i].longitude,
      batterCharge: details[i].charge,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.background}>
        <View>
          <TouchableOpacity
            onPress={() => {
              if (i == 0) {
                i = 0;
              } else {
                i = i - 1;
              }

              this.setState({
                petName: details[i].name,
                petLattitude: details[i].latitude,
                petLongitude: details[i].longitude,
                batterCharge: details[i].charge,
              });
            }}
            style={styles.lastpet}>
            <Text style={styles.redtext}>Last pet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
         if(i==1){
           i=0
         }
         else{
           i=i+1
         }
              this.setState({
                petName: details[i].name,
                petLattitude: details[i].latitude,
                petLongitude: details[i].longitude,
                batterCharge: details[i].charge,
              });
            }}
            style={styles.nextpet}>
            <Text style={styles.greentext}>Next pet</Text>
          </TouchableOpacity>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ width: '100%', height: '70%' }}
            region={{
              latitude: this.state.petLattitude,
              longitude: this.state.petLongitude,
            }}
            showsUserLocation>
            <Marker
              coordinate={{
                latitude: this.state.petLattitude,
                longitude: this.state.petLongitude,
              }}>
              <Image
                source={require('../assets/markerimage.png')}
                style={{ height: 50, width: 50 }}
              />
            </Marker>
          </MapView>

          <Text style={styles.textstyle}>{this.state.petName}</Text>
          <Text style={styles.batterystyle}>{this.state.batterCharge}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textstyle: {
    marginTop: 30,
    textAlign: 'center',
    borderWidth: 3,
    marginLeft: 5,
    marginRight: 5,
    color: 'green',
    padding: 7,
    fontSize: 25,
    backgroundColor: 'white',
  },
  batterystyle: {
    marginTop: 5,
    textAlign: 'center',
    borderWidth: 3,
    marginLeft: 5,
    marginRight: 5,
    color: 'green',
    padding: 7,
    fontSize: 25,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    backgroundColor: '#6ecde3',
  },
  lastpet: {
    marginTop: 50,
    backgroundColor: 'white',
    marginRight: 200,
    padding: 10,
  },
  redtext: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
  },
  nextpet: {
    marginTop: -50,
    backgroundColor: 'white',
    marginLeft: 200,
    padding: 10,
  },
  greentext: {
    color: 'green',
    fontSize: 25,
    textAlign: 'center',
  },
});
