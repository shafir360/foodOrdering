import { StyleSheet, Text, View , Image} from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import {  } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';


export const defaultPizzaImage = 
    'https://media.istockphoto.com/id/1489016544/vector/no-pizza-sign-on-white-background.jpg?s=1024x1024&w=is&k=20&c=FDyFXCKkN7HZX1oI7BLVX3eOWeri3S_OjT01_0pzWDI='


type ProductListItemProps = {
    product: Product
}



const ProductListItem = ({ product }: ProductListItemProps) => {

  return(
    <View style={styles.container}>

    <Image source={{uri: product.image || defaultPizzaImage}} style = {styles.image} resizeMode='contain' /> 
    <Text style={styles.title}> {product.name}</Text>
    <Text style = {styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%"
  },
  image:{
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price:{
    color: Colors.light.tint,
    fontSize: 12,
    fontWeight: "bold",
  }
});
