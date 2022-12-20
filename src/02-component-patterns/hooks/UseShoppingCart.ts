import React, { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces'




export const UseShoppingCart = () => {




    const [shoppingCart, setShoppingCart] = useState< { [key:string]: ProductInCart } >({})

    console.log('shoppingCartshoppingCart',shoppingCart)

    


   const onProductCountChange = ({count,product}:  {count:number, product:Product} ) => {

     console.log({count})

       setShoppingCart( oldShoppingCart => {

      

         if(count === 0){
               
           const { [product.id]: toDelete, ...rest } = oldShoppingCart
           console.log(toDelete)

            return rest
         }
               
            return {
             ...oldShoppingCart,
             [product.id]: { ...product, count }

            }
       } )

       
   }



  return {
    onProductCountChange,shoppingCart, setShoppingCart
  }
}
