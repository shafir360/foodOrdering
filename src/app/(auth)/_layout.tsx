import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@/src/providers/AuthProvider'

const _layout = () => {
  const {session} = useAuth()

  if(session){
    return <Redirect href={'/'} />
  }

  return (
    <Stack>
        <Stack.Screen name='sign-in' options={{
            headerTitle: "Sign In"
        }} />
        <Stack.Screen name='sign-up' options={{
            headerTitle: "Sign Up"
        }} />
    </Stack>
  )
}

export default _layout