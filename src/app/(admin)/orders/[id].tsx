import { View, Text, StyleSheet,FlatList , Pressable} from 'react-native'
import React from 'react'
import OrderListItem from '@/src/components/OrderListItem'
import { useLocalSearchParams } from 'expo-router'
import orders from '../../../../assets/data/orders';
import CartListItem from '@/src/components/CartListItem';
import { OrderItem } from '@/src/types';
import OrderItemListItem from '@/src/components/OrderItemListItem';
import { OrderStatusList } from '@/src/types';
import Colors from '@/src/constants/Colors';


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
        ListFooterComponent={()=>(
          <>
      <Text style={{ fontWeight: 'bold' }}>Status</Text>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        {OrderStatusList.map((status) => (
          <Pressable
            key={status}
            onPress={() => console.warn('Update status')}
            style={{
              borderColor: Colors.light.tint,
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
              backgroundColor:
                order.status === status
                  ? Colors.light.tint
                  : 'transparent',
            }}
          >
            <Text
              style={{
                color:
                  order.status === status ? 'white' : Colors.light.tint,
              }}
            >
              {status}
            </Text>
          </Pressable>
        ))}
  </View>
</>

        )}
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