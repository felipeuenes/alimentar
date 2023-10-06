import { Route, Routes } from "react-router-dom";




import { Home } from "../pages/home";
import { Login } from "../pages/login";
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