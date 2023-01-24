import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'


export interface Props {
  className?:string,
  style?: React.CSSProperties,
}

export const ProductButtons = ({className,style} : Props)   => {

  // todo maxCount

  // todo: isMaxReacked = useCallback, dependencias [count,maxCount]

  //  true su el counter == max count
  //  false si no lo es



    const {increaseBy,counter,maxCount} = useContext(ProductContext)

   const isMaxReacked = useCallback(
      () => !!maxCount && counter == maxCount ,
      [counter, maxCount ],
    )
    

   return (
              
    <div className={` ${className} ${styles.buttonsContainer} `}  style={style} >
            <button onClick={ () => increaseBy(-1) } className={styles.buttonMinus} >-</button>

            <div className={styles.countLabel} > {counter} </div>


            <button onClick={ () => increaseBy(+1) } className={`${styles.buttonAdd} ${ isMaxReacked() && styles.disabled}   `} > + </button>

          </div>

   )

}