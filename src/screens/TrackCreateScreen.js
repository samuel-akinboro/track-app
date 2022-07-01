// import '../_mockLocation'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [errorMessage] = useLocation(isFocused, addLocation)

  return (
    <SafeAreaView>
      <Text>TrackCreateScreen</Text>
      <Map />
    </SafeAreaView>
  )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})