// import '../_mockLocation'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import Map from '../components/Map'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)
  const [errorMessage, setErrorMessage] = useState(null);

  const startTracking = async () => {
    try {
      const { status } = requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        console.log('permission not granted');
      }
      watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        addLocation(location)
      });
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(()=> {
    startTracking();
  }, []);

  return (
    <SafeAreaView>
      <Text>TrackCreateScreen</Text>
      <Map />
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})