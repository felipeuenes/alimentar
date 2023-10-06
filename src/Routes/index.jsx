import { Route, Routes } from "react-router-dom";


import { UnidadesGestoras } from "../pages/UnidadesGestoras";

import { Home } from "../pages/home";
import { Login } from "../pages/login";




export function AppRoutes(){


    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/unidadesGestoras" element={<UnidadesGestoras/>} />
        </Routes>
    )
}