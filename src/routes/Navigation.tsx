import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link, NavLink, Navigate} from "react-router-dom";
import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterFormikPageMore, RegisterPage } from '../03-forms/pages';


import logo from "../assets/react.svg"



export const Navigation = () => {

  return (



    <BrowserRouter>
        
        <div className='main-layout' >
          <nav>
               <img src={logo} alt='react logo' width='120px' />


                <ul>

                      <li>
                            <NavLink to='/register'  className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Register Page</NavLink>
                      </li>
                      <li>
                            <NavLink to='/register-formik-page'  className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Register FormikPage</NavLink>
                      </li>
                      <li>
                            <NavLink to='/register-formik-page-more'  className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Register FormikPage More</NavLink>
                      </li>
                      <li>
                            <NavLink to='/formik-basic'  className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Formik Page</NavLink>
                      </li>
                      <li>
                            <NavLink to='/formik-yup'  className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Formik Yup</NavLink>
                      </li>
                      <li>
                            <NavLink to='/formik-components'  className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Formik Components</NavLink>
                      </li>
                      <li>
                            <NavLink to='/formik-abstraction'  className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Formik abstraction</NavLink>
                      </li>
                      <li>
                            <NavLink to='/dynamic-form'  className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Dynamic Form</NavLink>
                      </li>
                      <li>
                            <NavLink to='/about' className={ ({isActive})=>  isActive ? 'nav-active' :'' } >About</NavLink>
                      </li>
                      <li>
                            <NavLink to='/users' className={ ({isActive})=>  isActive ? 'nav-active' :'' } >Users</NavLink>
                      </li>

              </ul>

          </nav>


           <Routes>

                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/register-formik-page' element={<RegisterFormikPage/>} />
                <Route path='/register-formik-page-more' element={<RegisterFormikPageMore/>} />
                <Route path='/formik-basic' element={<FormikBasicPage/>} />
                <Route path='/formik-yup' element={<FormikYupPage/>} />
                <Route path='/formik-components' element={<FormikComponents/>} />
                <Route path='/formik-abstraction' element={<FormikAbstraction/>} />
                <Route path='/dynamic-form' element={<DynamicForm/>} />
                <Route path='users' element={<h1>Users</h1>} />
                <Route path='home' element={<h1>Home</h1>} />
                <Route path='/*' element={ <Navigate to='home' replace /> } />


           </Routes>

        

        </div>



    </BrowserRouter>
  )
}
