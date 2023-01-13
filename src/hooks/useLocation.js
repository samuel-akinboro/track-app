import { useState, useEffect } from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default (shouldTrack, callback) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [subscriber, setSubscriber] = useState(null)

  const startTracking = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      console.log('status', status)
      if(status !== 'granted'){
        console.log('permission not granted');
      }
      const sub = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, callback
      );
      setSubscriber(sub)
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(()=> {
    if(shouldTrack){
      startTracking();
    }else{
      subscriber.remove()
      setSubscriber(null)
    }
  }, [shouldTrack]);

  return [errorMessage]
}