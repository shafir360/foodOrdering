import { View, Text, StyleSheet,FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import OrderListItem from '@/src/components/OrderListItem'
import { useLocalSearchParams } from 'expo-router'
import { useOrderDetails } from '@/src/api/orders'
import CartListItem from '@/src/components/CartListItem';
import { OrderItem } from '@/src/types';
import OrderItemListItem from '@/src/components/OrderItemListItem';


const orderScreenDetail = () => {

  const {id: idString,index} = useLocalSearchParams()
  const id = parseFloat(typeof idString == 'string' ? idString : idString[0])
  
  //const order = orders.find((o) => o.id.toString() === id);

  const {data: order,isLoading,error} = useOrderDetails(id)
  console.log(order)
  console.log(order?.order_items)
  console.log(typeof(order?.order_items))
  
  if(isLoading){
    return <ActivityIndicator/>
  }

  if(error){
    return <Text>Failed to Fetch</Text>
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order #{index}</Text>
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>

    
  )
}

export default orderScreenDetail


const styles = StyleSheet.create({
  container:{
    padding:10,
  },
  title:{
    alignSelf:"center",
    fontSize:20,
    fontWeight: "bold"
  }

})