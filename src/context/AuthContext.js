import createDataContext from "./createDataContext";
import TrackerApi from '../api/TrackerApi'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigarionRef";

const authReducer = (state, action) => {
  switch(action.type){
    case 'ADD_ERROR':
      return {...state, errorMessage: action.payload}
    case 'SIGN_UP': 
      return {...state, errorMessage: '', token: action.payload};
    case 'SIGN_IN':
      return {...state, errorMessage: '', token: action.payload}
    default: 
      return state;
  }
}

const signIn = dispatch => async ({email, password}) => {
  try{
    const response = await TrackerApi.post('/signin', {email, password});
    AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'SIGN_IN', payload: response.data.token})
    navigate('TrackList')
  }catch(err){
    dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with sign in'})
  }
};

const signUp = dispatch => async ({email, password}) => {
  try {
    const response = await TrackerApi.post('/signup', {email, password});
    AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'SIGN_UP', payload: response.data.token});
    navigate('TrackList')
  } catch(err){
    dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with sign up'})
  }
}

const signOut = () => {

}

export const { Context, Provider } = createDataContext(
  authReducer,
  {signUp, signIn, signOut},
  {token: null, errorMessage: ''}
)