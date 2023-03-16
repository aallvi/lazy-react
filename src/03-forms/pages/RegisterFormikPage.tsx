import { useFormik } from 'formik'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'
import * as Yup from 'yup'


export const RegisterFormikPage = () => {

    const {handleSubmit,errors,touched, getFieldProps} = useFormik({
      initialValues:{name:'',email:'',password:'',password2:''},
      onSubmit: (values) => {console.log(values)},
      validationSchema: Yup.object({
        name:Yup.string().max(15, 'debe tener maximo 15 caracteres').min(2, 'debe tener almenos 2 caracteres').required(),
        email:Yup.string().email('Ingrese un email valido').required(),
        password:Yup.string().max(10, 'clave maximo 10 caracteres').min(5,'clave minimo 5 caracteres').required(),
        password2:Yup.string().oneOf([Yup.ref('password')], 'Password dont mach' ).required()
      })

    })





  return (



    <div>

    <h1>RegisterFormikPagee</h1>

    <form noValidate onSubmit={  handleSubmit} >
      <label htmlFor='name' > Name </label>
        <input type='text' {...getFieldProps('name')} />

        { touched.name && errors.name &&   <span> {errors.name} </span>}


       <label htmlFor='email' > email </label>
        <input type='email' {...getFieldProps('email')} />
        { touched.email && errors.email &&   <span> {errors.email} </span>}
       

        <label htmlFor='password' > password </label>
        <input type='password' {...getFieldProps('password')} />
        {touched.password && errors.password && <span> {errors.password} </span>}


        <label htmlFor='password2' > password </label>
        <input type='password' {...getFieldProps('password2')}   />
     
         {touched.password2 && errors.password2 && <span> {errors.password2} </span> }


        <button type="submit" > submit  </button>
        {/* <button onClick={resetForm} > Reset Form  </button> */}
    </form>
    
    </div>
  )
}
