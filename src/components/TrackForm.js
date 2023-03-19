import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
  const { 
    state: { name, recording, locations },
    startRecording, 
    stopRecording, 
    changeName 
  } = useContext(LocationContext)

  console.log(locations.length)
  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder='Enter name'
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        <Button 
          title={recording ? 'Stop' : 'Start recording'}
          buttonStyle={{ backgroundColor: recording ? 'rgba(214, 61, 57, 1)' : 'rgba(90, 154, 230, 1)' }}
          onPress={() => {
            if(recording){
              stopRecording()
            }else{
              startRecording()
            }
          }}
        />
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title='Save Recording' />
        ):null}
      </Spacer>
    </>
  )
}

export default TrackForm