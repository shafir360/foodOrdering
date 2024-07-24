import { StyleSheet, Text, View , Image} from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import {  } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products  from '@/assets/data/products';




const ProuctListItem = ({ product }) => {

  return(
    <View style={styles.container}>

    <Image source={{uri: product.image}} style = {styles.image} /> 
    <Text style={styles.title}> {product.name}</Text>
    <Text style = {styles.price}>${product.price}</Text>
    </View>
  )
}

export default function MenuScreen() {
  return (
    <View>
      <ProuctListItem product ={products[3]} />
      <ProuctListItem product ={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
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
