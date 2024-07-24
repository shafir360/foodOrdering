import { Stack, useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"





export default function ProductDetailScreen(){

    const {id} = useLocalSearchParams();
    return(
        <View>
            <Stack.Screen options={{title: "details " + id}} />

            <Text>Product detail for id: {id}</Text>
        </View>
    )
}
