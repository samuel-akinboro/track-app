import { StyleSheet } from 'react-native'
import React from 'react'
import { Button, Text, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const signupScreen = () => {
  return (
    <Spacer>
      <Spacer />
      <Text h2 style={{textAlign: 'center'}}>Sign up</Text>
      <Spacer />
      <Input label="Email" />
      <Input label="Password" />
      <Spacer />
      <Button title="Sign up" />
    </Spacer>
  )
}

export default signupScreen

const styles = StyleSheet.create({})