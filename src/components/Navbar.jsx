import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu"  
import { 
    Menu,
    LogOut, 
    House, 
    ShoppingCart, 
    Users 
} from "lucide-react";


const Navbar = () => {

    const dataLink = [
        {
            icon: <House/>,
            span: "DASHBOARD",
            link: "/dashboard"
        },
        {
            icon: <ShoppingCart/>,
            span: "ORDER",
            link: "/order"
        },
        {
            icon: <Users/>,
            span: "PENGGUNA",
            link: "/users"
        }
    ];


    let {pathname} = useLocation();
    console.log(pathname);

    return (
        <>        
            <div className="flex justify-between items-center text-white bg-black p-5">
                <div className="ml-[7rem] font-bold text-2xl max-sm:ml-5">
                    <Link to="/dashboard">
                        <h1>Angkringan</h1>
                    </Link>
                </div>
                <div className="mr-[7rem] max-sm:hidden">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-white text-base">
                                Admin
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>   
                                    <Link to={"/"} className="flex items-center mx-3 my-2">
                                        <LogOut/>
                                        <span className="ml-2">
                                            Logout
                                        </span>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>                
                </div>
                <div className="hidden max-sm:mr-5 max-sm:block">
                    <Sheet>
                        <SheetTrigger asChild className="bg-black">
                            <Button variant="outline" size="icon">
                                <Menu className="h-4 w-4" /> 
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>
                                    Pilih menu di bawah ini.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="mt-4 space-y-2">
                                <NavigationMenu>
                                    <NavigationMenuList className="flex flex-col items-baseline">
                                        {dataLink.map(data => {
                                            return (
                                            <NavigationMenuItem key={data.span}>
                                                <Link to={data.link}>
                                                    <NavigationMenuLink className="flex">
                                                        <i>{data.icon}</i>
                                                        <span>{data.span}</span>
                                                    </NavigationMenuLink>
                                                </Link>
                                            </NavigationMenuItem>
                                            )}
                                        )}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="bg-gray-200 text-gray-700  max-sm:hidden">      
                <NavigationMenu className="ml-[8rem] p-3">
                    <NavigationMenuList>
                        {dataLink.map(data => {
                            return (
                            <NavigationMenuItem key={data.span}>
                                <Link to={data.link}>
                                    <NavigationMenuLink className="flex mr-9">
                                        <i className="mr-1.5">{data.icon}</i>
                                        <span>{data.span}</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            )}
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    )
}

export default Navbar;