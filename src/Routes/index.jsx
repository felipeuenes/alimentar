import { Route, Routes } from "react-router-dom";


import { UnidadesGestoras } from "../pages/UnidadesGestoras";
import { Login } from "../pages/login/index";
import { Home } from "../pages/home/index";



export function AppRoutes(){


    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/unidadesGestoras" element={<UnidadesGestoras/>} />
        </Routes>
    )
}