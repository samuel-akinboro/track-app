import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const signupScreen = () => {
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
      <Button title="Sign up" />
    </Spacer>
  )
}

export default signupScreen

const styles = StyleSheet.create({})