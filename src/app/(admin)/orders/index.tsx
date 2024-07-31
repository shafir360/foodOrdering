import { View, Text, FlatList } from 'react-native'
import React from 'react'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'



const index = () => {
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