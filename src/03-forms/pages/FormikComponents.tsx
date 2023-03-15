import {useFormik, Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'


export const FormikComponents = () => {



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

              <label htmlFor='firstName'> First Name </label>
              <Field  name="firstName" type="text" />
              <ErrorMessage  name="firstName" component='span' />



              <label htmlFor='lastName'> Last Name </label>
              <Field  name="lastName" type="text" />
              <ErrorMessage  name="lastName" component='span' />

              <label htmlFor='email'> Email Address </label>
              <Field  name="email" type="email" />
              <ErrorMessage  name="email" component='span' />


              <label htmlFor='jobType'>  Job Type </label>
              <Field  name="jobType" as="select" >
                <option value="">Pick something </option>
                <option value="developer">Developer </option>
                <option value="it-senior">It Senior </option>
                <option value="it-junior">It Junior </option>
              </Field>
              <ErrorMessage  name="jobType" component='span' />

              

              <label > 
                
                <Field  name="terms" type="checkbox" />
                Terms and conditions
              
               </label>
              
              <ErrorMessage  name="terms" component='span' />



              <button type='submit' > Submit </button>


        </Form>
        )
       }



          

      </Formik>


    





    </div>
  )
}
