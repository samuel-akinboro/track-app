import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { Button, Text, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const signupScreen = ({ navigation }) => {
  const { state, signUp, clearErrorMessage } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Spacer>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Spacer />
      <Text h2 style={{textAlign: 'center'}}>Sign up</Text>
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
      {state.errorMessage ? <Spacer>
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      </Spacer> : null}
      <Spacer />
      <Button title="Sign up" onPress={()=> signUp({email, password})} />
      <Spacer />
      <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
        <Text style={{marginVertical: 15, textAlign: 'center'}} h6>Already have an account? Sign in instead</Text>
      </TouchableOpacity>
    </Spacer>
  )
}

export default signupScreen

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 16,
  }
})