import React, { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces'




export const UseShoppingCart = () => {




    const [shoppingCart, setShoppingCart] = useState< { [key:string]: ProductInCart } >({})

    console.log('shoppingCartshoppingCart',shoppingCart)

    


   const onProductCountChange = ({count,product}:  {count:number, product:Product} ) => {

     console.log({count})

       setShoppingCart( oldShoppingCart => {

          const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count:0}

          if( Math.max (productInCart.count + count, 0) > 0 ){
                 productInCart.count += count;

                 return {
                   ...oldShoppingCart,
                   [product.id]: productInCart
                 }
          }
             
         //  borrar producto
           const { [product.id]: toDelete, ...rest } = oldShoppingCart
           console.log('toDelete',toDelete)
           return rest

         // if(count === 0){
               
         //   const { [product.id]: toDelete, ...rest } = oldShoppingCart
         //   console.log(toDelete)

         //    return rest
         // }
               
         //    return {
         //     ...oldShoppingCart,
         //     [product.id]: { ...product, count }

         //    }
       } )

       
   }



  return {
    onProductCountChange,shoppingCart, setShoppingCart
  }
}
