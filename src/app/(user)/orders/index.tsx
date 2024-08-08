import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '@/src/components/OrderListItem'
import { useMyOrderList } from '@/src/api/orders'
import { ActivityIndicator } from 'react-native'

const index = () => {

  const {data:orders,isLoading,error} = useMyOrderList()


  if (isLoading){
    return <ActivityIndicator/>
  }

  if(error){
    return <Text>Failed to fetch</Text>
  }


  return (
    <View>
      <FlatList 
          data={orders} 
          renderItem={ ({item, index})=> <OrderListItem order={item} /> }
          contentContainerStyle = {{padding:10,gap:10}}
      />
  </View>
  )
}

export default index