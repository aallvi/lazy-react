import { useEffect, useState } from "react"
import ProductCard, { ProductImage,ProductTitle,ProductButtons } from "../components"
import { products } from "../data/products"
import { Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'


const product =products[0]





export const ShoppingPage = () => {




  return (
    <div >

        <h1>Shoping store</h1>
        <hr/>

              <ProductCard   className="bg-dark text-white" product={product} 
              
              initialValues={{
                count:4,
                maxCount:10,
              }}
              
              
              >

                {
                  ({reset,count, increaseBy, isMaxCountReached}) => (

                    <>
                        
                        <ProductImage className="custom-image" style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
                        <ProductTitle className="text-white text-bold" activeClass="" title={''} />
                        <ProductButtons  className="custom-buttons" />
       
                       <button onClick={reset} > Reset </button>
                       {/* <button onClick={ () =>  increaseBy(-2) } > -2 </button> */}

                       {
                        isMaxCountReached && <button onClick={ () =>  increaseBy(-2) } > -2 </button>
                       }
                       {
                        !isMaxCountReached && <button onClick={ () =>  increaseBy(+2) } > +2 </button>
                       }
                     

                       <p> valor : { count} </p>
                    
                    </>

                  )
                }

         

              </ProductCard>
      


    </div>
  )
}
