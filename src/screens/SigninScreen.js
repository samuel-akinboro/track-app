import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import Spacer from '../components/Spacer'
import { Text, Button, Input } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = ({navigation}) => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Spacer>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Spacer />
      <Text h2 style={{textAlign: 'center'}}>Sign In</Text>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />
      {state.errorMessage ? 
        <Text style={{color: 'red', fontSize: 16}}>{state.errorMessage}</Text> :
        null
      }
      <Spacer />
      <Button title='Sign In' onPress={()=> signIn({email, password})} />
      <Spacer />
      <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
        <Text style={{textAlign: 'center'}} h6>You don't have an account? Sign up</Text>
      </TouchableOpacity>
    </Spacer>
  )
}

export default SigninScreen

const styles = StyleSheet.create({})