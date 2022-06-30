import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react';
import Map from '../components/Map'
import * as Location from 'expo-location'

const TrackCreateScreen = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const startTracking = async () => {
    try {
      const { status } = Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        console.log('permission not granted');
        return;
      }
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