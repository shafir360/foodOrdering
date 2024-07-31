import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
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