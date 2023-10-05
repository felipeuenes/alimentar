import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { UnidadesGestoras } from "../pages/UnidadesGestoras";



export function AppRoutes(){


    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/unidadesGestoras" element={<UnidadesGestoras/>} />
        </Routes>
    )
}