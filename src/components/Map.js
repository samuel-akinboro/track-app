import { StyleSheet, ActivityIndicator, View } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
  const { state: { currentLocation, locations } } = useContext(LocationContext);
  // console.log(currentLocation)

  if(currentLocation === null){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View>
      <MapView 
        style={styles.mapStyle} 
        initialRegion={{
          ...currentLocation.coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01
        }}
      >
        <Circle
          radius={30}
          center={currentLocation.coords}
          fillColor="rgba(158, 158, 255, 0.3)"
          strokeColor="rgba(158, 158, 255, 1.0)"
        />
        <Polyline coordinates={locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  mapStyle: {
    height: 300
  }
})