import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '@/src/components/OrderListItem'
import { useLocalSearchParams } from 'expo-router'
import orders from '../../../../assets/data/orders';
import CartListItem from '@/src/components/CartListItem';
import { OrderItem } from '@/src/types';
import OrderItemListItem from '@/src/components/OrderItemListItem';


const orderScreenDetail = () => {

  const {id,index} = useLocalSearchParams()
  
  const order = orders.find((o) => o.id.toString() === id);


  if (!order) {
    return <Text>Order not found!</Text>;
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