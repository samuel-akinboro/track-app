import { useState, useEffect } from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default (shouldTrack, callback) => {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=> {
    let subscriber;
    const startTracking = async () => {
      try {
        const { status } = await requestForegroundPermissionsAsync();
        if(status !== 'granted'){
          console.log('permission not granted');
        }
        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, callback
        );
      } catch (err) {
        setErrorMessage(err.message);
      }
    }

    if(shouldTrack){
      startTracking();
    }else{
      if(subscriber) {
        subscriber.remove();
        subscriber = null;
      }
    }

    return () => {
      if(subscriber){
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback]);

  return [errorMessage]
}