import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Button, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  
  return (
    <Spacer>
      <Spacer />
      <Text h2 style={{textAlign: 'center'}}>Account</Text>
      <Spacer />
      <Spacer />
      <Spacer />
      <Button title='Log Out' onPress={signOut} />
    </Spacer>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})