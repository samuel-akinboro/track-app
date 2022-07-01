import { useState, useEffect } from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default (callback) => {
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
      }, callback
      );
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(()=> {
    startTracking();
  }, []);

  return [errorMessage]
}