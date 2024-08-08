import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { supabase } from "@/src/lib/supabase"
import { useAuth } from "@/src/providers/AuthProvider"
import { InsertTables } from "@/src/types"
import { CartItem } from "@/src/types"



export const useInsertOrderItems = () => {
    return useMutation({
      async mutationFn({
        items,
        order_id,
      }: {
        items: CartItem[];
        order_id: number;
      }) {
        const { error } = await supabase.from('order_items').insert(
          items.map((item) => ({
            size: item.size,
            quantity: item.quantity,
            order_id: order_id,
            product_id: item.product_id,
          }))
        );
  
        if (error) {
          throw error;
        }
      },
      onError(error) {
        console.log(error);
      },
    });
  };