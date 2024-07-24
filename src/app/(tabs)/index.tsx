import {  View } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import {  } from '@/src/components/Themed';

import products  from '@/assets/data/products';
import ProductListItem from '@/src/components/productListItem';




export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product ={products[7]} />
      <ProductListItem product ={products[1]} />
    </View>
  );
}

