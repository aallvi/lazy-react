import {useFormik, Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MyTextInput, MySelect } from '../components'


import '../styles/styles.css'


export const FormikAbstraction = () => {



  return (
    <div>
      <h1>Formik Components</h1>

      <Formik 
        initialValues={{
          firstName:'',
          lastName:'',
          email:'',
          terms:false,
          jobType:''
        }}
        onSubmit={(values ) => {
          console.log(values)
        } }
        validationSchema={ Yup.object({
          firstName: Yup.string().max(15, 'debe tener 15 caracteres o menos').required('Requerido'),
          lastName:  Yup.string().max(10, 'debe tener 10 caracteres o menos').required('Requerido'),
          email:     Yup.string().email('Ingresa email valido').required('Requerido'),
          terms:     Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType:   Yup.string().notOneOf(['it-junior'], 'No puede ser It-junior' ).required('Requerido')

        })

        }
         
      
      >
       
       {
        (formik) => (
          <Form   noValidate >

              <MyTextInput label='First Name' name='firstName' />
              <MyTextInput label='Last Name' name='lastName' />
              <MyTextInput label='Email' name='email' />



              
              <MySelect  name="jobType" label='Job Type'>
                <option value="">Pick something </option>
                <option value="developer">Developer </option>
                <option value="it-senior">It Senior </option>
                <option value="it-junior">It Junior </option>
              </MySelect>
         

              <MyCheckbox label={'Terms and conditions'} name={'terms'}/>


              <button type='submit' > Submit </button>


        </Form>
        )
       }



          

      </Formik>


    





    </div>
  )
}
