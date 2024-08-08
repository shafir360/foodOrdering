import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Order } from '../types';
import { Link, useSegments } from 'expo-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Tables } from '../database.types';

dayjs.extend(relativeTime);

type OrderListItemProps = {
    order: Tables<'orders'>
};

const OrderListItem = ({order} :OrderListItemProps ) => {

    const segments = useSegments()

    return (
        <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
            <Pressable>
                <View style = {styles.parentContainer}>
                    <View>
                        <Text style={styles.orderNumText}>Order #{order.id}</Text>
                        <Text style={styles.timeText}>{dayjs(order.created_at).fromNow()}</Text>
                    </View>
                    <Text style={styles.statusText}>{order.status}</Text>
                </View>
            </Pressable>
        </Link>  
    )
}

const styles = StyleSheet.create({
    parentContainer:{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        padding:12,
        justifyContent: "space-between",
        flex:1,
        alignItems: "center"
    },
    orderNumText:{
        fontWeight:"bold",
        fontSize: 18
    },
    statusText:{
        fontWeight:"semibold",
        fontSize: 25
    },
    timeText:{
        color : "grey"
    }

})

export default OrderListItem