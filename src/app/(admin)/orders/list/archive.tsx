import { View, Text, FlatList,ActivityIndicator } from 'react-native'
import React from 'react'
import { useAdminOrderList } from '@/src/api/orders'
import OrderListItem from '@/src/components/OrderListItem'



const index = () => {
 

  const {data:orders,isLoading,error} = useAdminOrderList({archived:true})


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