import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default LayoutPage;