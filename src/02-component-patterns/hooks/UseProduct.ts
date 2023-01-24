import React, { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces'


interface useProductArgs {
  product:Product;
  onChange?: (args: onChangeArgs) => void,
  value?:number;
  initialValues?: InitialValues;
}


export const UseProduct = ( {onChange, product,value =0, initialValues }:useProductArgs ) => {

    const [counter, setCounter] = useState<number> (initialValues?.count || value )

    const isMounted = useRef(false)

    console.log(initialValues?.count)

    const increaseBy = (value:number) => {

      let newValue = Math.max(counter + value ,0)

      console.log(newValue,'newValue')

      if(initialValues?.maxCount) {
        newValue = Math.min(newValue, initialValues.maxCount)
      }

      // if(initialValues?.maxCount && newValue == initialValues?.maxCount +1 ) return

      setCounter(newValue)

      
      onChange && onChange({count: newValue, product})

    }

    

    useEffect(() => {


    if(!isMounted.current) return

      setCounter(value)


    }, [value])

    useEffect(() => {
       isMounted.current = true
    }, [])
    
    const reset = () => {
      setCounter(initialValues?.count || value )
    }


  return {increaseBy,counter, maxCount:initialValues?.maxCount,
          isMaxCountReached: !!initialValues?.count && initialValues.maxCount == counter , reset  }
}
