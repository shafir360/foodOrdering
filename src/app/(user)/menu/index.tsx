import {  Text, View, FlatList, ActivityIndicator } from 'react-native';
import ProductListItem from '@/src/components/productListItem';
import { useProductList } from '@/src/api/products';
import Button from '@/src/components/Button';
import { supabase } from '@/src/lib/supabase';

export default function MenuScreen() {

  const {data: products ,error,isLoading} = useProductList()

  if(isLoading){
    return <ActivityIndicator />
  }

  if(error){
    return <Text>Failed To Import Products</Text>
  }

  return (
    <View>
      <FlatList 
        data = {products} 
        renderItem={({ item }) => <ProductListItem product ={item} />}
        numColumns={2}
        contentContainerStyle = {{gap: 10, padding: 10}}
        columnWrapperStyle = {{gap: 10}}
      />
      <Button onPress ={()=>supabase.auth.signOut()} text = {"Sign Out"} />
    </View>
    
  );
}




