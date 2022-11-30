import styles from '../styles/styles.module.css'
import { createContext, ReactElement, useContext, useState } from 'react'
import { Value } from 'sass'
import { UseProduct } from '../hooks/UseProduct'
import {  Product, ProductContextProps, } from '../interfaces/interfaces'
// import { ProductImage } from './ProductImage'
// import { ProductTitle } from './ProductTitle'
// import { ProductButtons } from './ProductButtons'


export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties,

}



 export const ProductContext = createContext({} as ProductContextProps )

 const {  Provider } = ProductContext;







export const ProductCard = ({children,product , className, style} : Props ) => {



   const {increaseBy, counter} =  UseProduct()




  return (
    <Provider  value={{
        counter,
        increaseBy,
        product
    }} >
    <div  className={`${styles.productCard} ${className}`}  style={style} >

        {children}
          
          {/* <ProductImage img={product.img} />

          <ProductTitle title={product.title} />
         
          
          <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

        
    </div>
    </Provider>
  )
}


// ProductCard.Title = ProductTitle
// ProductCard.Image = ProductImage
// ProductCard.Buttons = ProductButtons