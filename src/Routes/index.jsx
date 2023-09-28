import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/home";



export function AppRoutes(){


    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}