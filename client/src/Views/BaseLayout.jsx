import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navigation";



export default function BaseLayout(){

    return(
        <>
        <NavBar/>
        <Outlet />
        </>
    )
}