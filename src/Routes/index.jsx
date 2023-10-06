import { Route, Routes } from "react-router-dom";




import { Home } from "../pages/Home";
import { Login } from "../pages/login";
import { UnidadesGestoras } from "../pages/UnidadesGestoras";




export function AppRoutes(){


    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Login/>} />
            <Route path="/unidadesgestoras" element={<UnidadesGestoras/>} />
        </Routes>
    )
}