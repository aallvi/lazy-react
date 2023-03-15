import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'


export const RegisterPage = () => {


    const {formData, onChange, resetForm , name,email,password,password2, isValidEmail} = useForm({name:'',email:'',password:'',password2:''})


    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(formData)
    }


  return (



    <div>

    <h1>Register Page</h1>

    <form noValidate onSubmit={  onSubmit} >
        <input type='text'
        placeholder="Name"
        value={name}
        onChange={ (ev) => onChange(ev) }
        name='name'
        className={ ` ${name.trim().length <=0 &&  'has-error' } ` }
        
        />
       { name.trim().length <=0 && <span>Este campo es necesario</span>}


        <input type='email'
        placeholder="Email"
        value={email}
        onChange={onChange}
        name='email'
        className={ ` ${!isValidEmail(email)  &&  'has-error' } ` }
        
        />
       { !isValidEmail(email) && <span>Email no es valido</span>}


        <input type='password'
        placeholder="Password"
        value={password}
        onChange={onChange}
        name='password'
        />
       { password.trim().length <= 0 &&  <span>Este campo es necesario</span>}


        <input type='password'
        placeholder="Repeat Rassword"
        value={password2}
        onChange={onChange}
        name='password2'

        />
       { password2.trim().length <= 0 &&  <span>Este campo es necesario</span>}
       { password2 !== password &&  <span>password debe ser iguales</span>}



        <button type="submit" > Create  </button>
        <button onClick={resetForm} > Reset Form  </button>
    </form>
    
    </div>
  )
}
