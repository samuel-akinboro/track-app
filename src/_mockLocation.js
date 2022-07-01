import * as Location from  'expo-location'

const tenMetersWithDegrees = 0.00001;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      accuracy: 30,
      altitude: 32.02198600769043,
      altitudeAccuracy: 3,
      heading: -1,
      speed: 0,
      longitude: 6.585244280292266 + increment * tenMetersWithDegrees,
      latitude: 3.09346147813191 + increment * tenMetersWithDegrees
    }
  }
}

let counter = 0;

setInterval(()=>{
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++
}, 2000)