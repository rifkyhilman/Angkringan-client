import Navbar from "@/components/Navbar";
import DashboardPage from "./dashboardPage";
import OrderPage from "./orderPage";
import UsersPage from "./usersPage";

const HomePage = () => {
    let component
    switch (window.location.pathname){
        case "/dashboard":
            component = <DashboardPage />
            break
        case "/order":
            component = <OrderPage/>
            break
        case "/users":
            component = <UsersPage/>
            break
}

    return (
        <>
            <Navbar />
            {component}
        </>
    )
}

export default HomePage;