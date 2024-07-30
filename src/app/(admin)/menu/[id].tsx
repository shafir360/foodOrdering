import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/productListItem";
import { useState } from "react";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ['S','M','L','XL']


export default function ProductDetailScreen(){

    const {id} = useLocalSearchParams();
    const {addItem} = useCart()

    const router = useRouter()
    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M')


    const product = products.find((p) => p.id.toString() == id)

    const addToCart = () =>{
        if(!product){
            return
        }
        addItem(product, selectedSize)
        router.push('/cart')
    }

    if (!product){
        return <Text>Product not found</Text>
    }
    return(
        <View style = {styles.container}>
            <Stack.Screen options={{title: product.name}} />
            <Image source={{uri: product.image || defaultPizzaImage}} style = {styles.image}/>       
            <Text style= {styles.price}>{product.name}</Text>
            <Text style= {styles.price}>${product.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        flex: 1,
        padding: 10,

    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    price: {
        fontSize : 18,
        fontWeight: "bold", 

    },
    sizes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    sizeText:{
        fontSize: 20,
        fontWeight: '500'
    },
})