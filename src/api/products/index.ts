import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/src/lib/supabase"


export const useProductList = () =>{
    return useQuery({
        queryKey: ['products'],
        queryFn: async() =>{
          const {data,error} = await supabase.from("products").select("*")
          if(error){
            throw new Error(error.message)
          }
          else{
            return data
          }
    
        }
      })
}