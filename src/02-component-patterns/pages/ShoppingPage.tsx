import { useEffect, useState } from "react"
import ProductCard, { ProductImage,ProductTitle,ProductButtons } from "../components"
import { products } from "../data/products"
import { UseShoppingCart } from "../hooks/UseShoppingCart"
import { Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'








export const ShoppingPage = () => {


     const {onProductCountChange,shoppingCart,setShoppingCart} = UseShoppingCart()


  return (
    <div >

        <h1>Shoping store</h1>
        <hr/>


        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap' }} >

          {/* <ProductCard className="bg-dark text-white" product={product1} >

            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons   className="custom-buttons"/>
       
          </ProductCard> */}



          {
            products.map( product => <>



              <ProductCard   className="bg-dark text-white" product={product}  onChange={  onProductCountChange }  value={ shoppingCart[product.id]?.count || 0}   >

              <ProductImage className="custom-image" style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
              <ProductTitle className="text-white text-bold" activeClass="" title={''} />
              <ProductButtons  className="custom-buttons" />


              </ProductCard>
            
            
            
            
            </> )
          }


          <div  className="shopping-cart" >

            {
              Object.entries(shoppingCart).map( ([key,product] ) =>   (
                <ProductCard key={key} className="bg-dark text-white" product={product}  style={{width:'100px'}} onChange={  onProductCountChange }  value={product.count}  >

                    <ProductImage className="custom-image" style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
                    {/* <ProductTitle className="text-white text-bold" activeClass="" title={`${product.count} `} /> */}
                    <ProductButtons  className="custom-buttons" />


                </ProductCard>

              ))
            }

         

   


          </div>

          {/* <ProductCard  className="bg-dark text-white" product={product2} >

            <ProductImage className="custom-image" style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
            <ProductTitle className="text-white text-bold" activeClass="" title={''} />
            <ProductButtons  className="custom-buttons" />
           

          </ProductCard> */}


          {/* ------------------------------------------------------------------------ */}


        


          

        </div>

        <div>
          <code>
            {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div>



    </div>
  )
}
