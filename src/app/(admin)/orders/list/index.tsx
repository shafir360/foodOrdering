import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import OrderListItem from '@/src/components/OrderListItem'
import { useAdminOrderList } from '@/src/api/orders'



const index = () => {

  const {data:orders,isLoading,error} = useAdminOrderList({archived:false})


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
          renderItem={ ({item, index})=> <OrderListItem order={item} index = {index} /> }
          contentContainerStyle = {{padding:10,gap:10}}
      />
  </View>
  )
}

export default index