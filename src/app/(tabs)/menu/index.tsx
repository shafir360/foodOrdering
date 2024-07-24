import {  View, FlatList } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import {  } from '@/src/components/Themed';

import products  from '@/assets/data/products';
import ProductListItem from '@/src/components/productListItem';




export default function MenuScreen() {
  return (
    <FlatList 
      data = {products} 
      renderItem={({ item }) => <ProductListItem product ={item} />}
      numColumns={2}
      contentContainerStyle = {{gap: 10, padding: 10}}
      columnWrapperStyle = {{gap: 10}}
    />
  );
}




