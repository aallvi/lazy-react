import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { LazyPage1 } from "../pages"


export const LazyLayout = () => {
  return (
    <div>

         <h1>Lazy layout page</h1>
         {/* rutas hijas iran aqui */}

         <ul>

            <li>
              <NavLink to="lazy1" > Lazy 1</NavLink>

            </li>
            <li>
              <NavLink to="lazy2" > Lazy 2</NavLink>

            </li>
            <li>
              <NavLink to="lazy3" > Lazy 3</NavLink>

            </li>


         </ul>


       <Routes>

         <Route path="lazy1" element={<LazyPage1/>} />
         <Route path="lazy2" element={<LazyPage1/>} />
         <Route path="lazy3" element={<LazyPage1/>} />


         <Route path="*" element={  <Navigate replace to="lazy1"/>  } />



       </Routes>


    </div>
  )
}


export default LazyLayout