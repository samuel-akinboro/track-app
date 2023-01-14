import '../_mockLocation'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext, useCallback } from 'react';
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback((location) => addLocation(location, state.recording), [state.recording]);
  const [errorMessage] = useLocation(isFocused, callback)

  return (
    <SafeAreaView>
      <Text>TrackCreateScreen</Text>
      <Map />
      {errorMessage && <Text>Please enable location services</Text>}
      <TrackForm />
    </SafeAreaView>
  )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})