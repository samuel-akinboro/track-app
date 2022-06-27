import { StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import { Button, Text, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const signupScreen = () => {
  const {state, signUp} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Spacer>
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
      <Spacer />
      {state.errorMessage ? <Spacer>
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      </Spacer> : null}
      <Button title="Sign up" onPress={()=> signUp({email, password})} />
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