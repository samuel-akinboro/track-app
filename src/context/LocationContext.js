import createDataContext from './createDataContext'

const LocationReducer  = (state, action) => {
  switch(action.type){
    case 'ADD_CURRENT_LOCATION':
      return { ...state, currentLocation: action.payload};
    case 'START_RECORDING':
      return {...state, recording: true}
    case 'STOP_RECORDING':
      return {...state, recording: false}
    case 'ADD_LOCATION':
      return {...state, locations: [...state.locations, action.payload]}
    case 'CHANGE_NAME':
      return {...state, name: action.payload}
    default:
      return state
  }
}

const changeName = dispatch => (name) => {
  dispatch({
    type: 'CHANGE_NAME',
    payload: name
  })
}
const startRecording = dispatch => () => {
  dispatch({type: 'START_RECORDING'})
};
const stopRecording = dispatch => () => {
  dispatch({type: 'STOP_RECORDING'})
};
const addLocation = dispatch => (location, recording) => {
  dispatch({
    type: 'ADD_CURRENT_LOCATION',
    payload: location
  });

  if(recording) {
    dispatch({
      type: 'ADD_LOCATION',
      payload: location
    })
  }
};

export const { Context, Provider } = createDataContext(
  LocationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { name: '', recording: false, locations: [], currentLocation: null }
)