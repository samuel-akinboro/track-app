import createDataContext from "./createDataContext";
import TrackerApi from '../api/TrackerApi'

const authReducer = (state, action) => {
  switch(action.type){
    case 'ADD_ERROR':
      return {...state, errorMessage: action.payload}
    default: 
      return state;
  }
}

const signIn = (dispatch) =>{
  return ({email, password}) => {

  }
}

const signUp = (dispatch) => {
  return  async ({email, password}) => {
    try {
      const response = await TrackerApi.post('/signup', {email, password});
      console.log(response.data)
    } catch(err){
      dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with sign up'})
    }
  }
}

const signOut = () => {

}

export const { Context, Provider } = createDataContext(
  authReducer,
  {signUp, signIn, signOut},
  {isSignedIn: false, errorMessage: ''}
)