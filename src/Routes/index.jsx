import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";



export function AppRoutes(){


    return(
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}