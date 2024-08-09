import { View, Text, StyleSheet,FlatList , Pressable, ActivityIndicator} from 'react-native'
import React from 'react'
import OrderListItem from '@/src/components/OrderListItem'
import { useLocalSearchParams } from 'expo-router'
import CartListItem from '@/src/components/CartListItem';
import { OrderItem } from '@/src/types';
import OrderItemListItem from '@/src/components/OrderItemListItem';
import { OrderStatusList } from '@/src/types';
import Colors from '@/src/constants/Colors';
import { useOrderDetails, useUpdateOrder } from '@/src/api/orders';


const orderScreenDetail = () => {

  const {id: idString,index} = useLocalSearchParams()
  const id = parseFloat(typeof idString == 'string' ? idString : idString[0])
  const {mutate:updateOrder} = useUpdateOrder()
  
  //const order = orders.find((o) => o.id.toString() === id);

  const {data: order,isLoading,error} = useOrderDetails(id)


  const updateStatus = (status) => {
    updateOrder({id:id, updatedFields:{status}} )
  }

  
  if(isLoading){
    return <ActivityIndicator/>
  }

  if(error){
    return <Text>Failed to Fetch</Text>
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order #{order?.id}</Text>
      <Text style={styles.title}>Order #{order?.status}</Text>
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
            onPress={() => updateStatus(status)}
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