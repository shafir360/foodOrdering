import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"





export default function ProductDetailScreen(){

    const {id} = useLocalSearchParams();
    return(
        <View>
            <Text>Product detail for id: {id}</Text>
        </View>
    )
}
