import { Formik, useFormik , Form} from 'formik'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'
import * as Yup from 'yup'
import { MyTextInput } from '../components'


export const RegisterFormikPageMore = () => {

    // const {handleSubmit,errors,touched, getFieldProps} = useFormik({
    //   initialValues:{name:'',email:'',password:'',password2:''},
    //   onSubmit: (values) => {console.log(values)},
    //   validationSchema: Yup.object({
    //     name:Yup.string().max(15, 'debe tener maximo 15 caracteres').min(2, 'debe tener almenos 2 caracteres').required(),
    //     email:Yup.string().email('Ingrese un email valido').required(),
    //     password:Yup.string().max(10, 'clave maximo 10 caracteres').min(5,'clave minimo 5 caracteres').required(),
    //     password2:Yup.string().oneOf([Yup.ref('password')], 'Password dont mach' ).required()
    //   })

    // })





  return (



    <div>

    <h1>RegisterFormikPagee</h1>


    <Formik
     initialValues= {{name:'',email:'',password:'',password2:''}}
     onSubmit={(values ) => {
      console.log(values)
    } }
     validationSchema={ Yup.object({
      name:Yup.string().max(15, 'debe tener maximo 15 caracteres').min(2, 'debe tener almenos 2 caracteres').required(),
      email:Yup.string().email('Ingrese un email valido').required(),
      password:Yup.string().max(10, 'clave maximo 10 caracteres').min(5,'clave minimo 5 caracteres').required(),
      password2:Yup.string().oneOf([Yup.ref('password')], 'Password dont mach' ).required()
    })}
    >

      {
        ({handleReset}) => (

          <Form>

            <MyTextInput label='Nombre' name='name' placeholder='alvaro' />
            <MyTextInput label='Email' name='email' placeholder='alvaro@gmail.com' />
            <MyTextInput label='password' name='password' placeholder='*****' />
            <MyTextInput label='repeat password' name='password2' placeholder='*****' />
            
            
        <button type="submit" > submit  </button>
        <button onClick={handleReset} > Reset Form  </button>
          </Form>

        )}



    </Formik>

   
    
    </div>
  )
}
