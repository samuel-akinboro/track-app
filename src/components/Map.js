import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <View>
      <MapView 
        style={styles.mapStyle} 
        initialRegion={{
          longitude: 37.33233,
          latitude: -122.03121,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01
        }}
      />
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  mapStyle: {
    height: 300
  }
})