import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link, NavLink, Navigate} from "react-router-dom";

import logo from "../assets/react.svg"

import {LazyPage1,LazyPage2,LazyPage3} from '../01-lazyload/pages'
import { routes } from './routes';



export const Navigation = () => {

  return (

   <Suspense fallback={ <span> Loading </span> } >

    <BrowserRouter>
        
        <div className='main-layout' >
          <nav>
               <img src={logo} alt='react logo' width='120px' />


                <ul>
                       {routes.map( (item) =>
                           
                          <li key={item.to} ><NavLink to={item.to} className={ ({isActive})=>  isActive ? 'nav-active' :'' } >{item.name}</NavLink></li> 
                       
                       ) }
                       

              </ul>

          </nav>


           <Routes>

                <Route path='lazy1' element={ <LazyPage1/> } />
               
                {   routes.map( route => (
                           
                           <Route key={route.to} path={route.path} element={ <route.Component/> } />
                        
                        ))
                  }

         
                <Route path='/*' element={ <Navigate to='lazy1' replace /> } />


           </Routes>

        

        </div>



    </BrowserRouter>

    </Suspense>
  )
}
