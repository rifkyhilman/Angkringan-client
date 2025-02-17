import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DataLink } from "../utils/dataDumy.jsx";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
    Sheet, 
    SheetTrigger, 
    SheetContent, 
    SheetHeader, 
    SheetTitle,   
    SheetFooter, 
    SheetClose } from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent } from "@/components/ui/navigation-menu"  
import { 
    Menu,
    LogOut, 
    Moon,
    Sun,
    TriangleAlert } from "lucide-react";


const Navbar = () => {
    const navigate = useNavigate();
    const { toast } = useToast()

    let {pathname} = useLocation();
    let subpage = pathname.split('/')?.[1]

    const linkness = (type = null) => {
        let classes = "border-b-2 border-b-transparent"

        if(type === subpage){
            classes = "border-b-2 border-b-black text-black"
        } 

        return classes
    }

    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const handleLogout = () => {
        localStorage.removeItem("Token"); 
        toast({
            title: (
            <div className="flex items-center gap-2">
                <TriangleAlert className="w-5 h-5 text-white" /> 
                <span>Anda Telah Keluar</span>
            </div>
            ),
            variant: "destructive",
            duration: 1500,
          });
        setTimeout(()=>{
            navigate("/");
        },1500)
      };

    return (
        <>        
            <div className="flex justify-between items-center text-white border-b-transparent bg-black py-5 px-[8rem] max-sm:px-[4rem] max-sm:sticky max-sm:top-0 max-sm:z-40">
                <div className="font-bold text-2xl max-sm:text-lg">
                    <h1>Angkringan</h1>
                </div>
                <div className="max-sm:hidden z-50">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-white text-base">
                                Admin
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>   
                                    <Button className="flex items-center mx-3 my-2" onClick={handleLogout}>
                                        <LogOut/>
                                        <span className="ml-2">
                                            Logout
                                        </span>
                                    </Button>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>                
                </div>
                <div className="hidden max-sm:block">
                    <Sheet>
                        <SheetTrigger asChild className="bg-black">
                            <Button variant="outline" size="icon">
                                <Menu className="h-4 w-4" /> 
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Admin</SheetTitle>
                            </SheetHeader>
                            <div className="mt-[4rem]">
                                <NavigationMenu>
                                    <NavigationMenuList className="felx flex-col gap-5 items-baseline">
                                        {DataLink.map(data => {
                                            return (
                                            <NavigationMenuItem key={data.span}>
                                                <Link to={data.link}>
                                                    <SheetClose>
                                                        <div className="flex pl-2">
                                                            <i className="mr-3">{data.icon}</i>
                                                            <NavigationMenuLink className={linkness(data.link)}>
                                                                <span>{data.span}</span>
                                                            </NavigationMenuLink>
                                                        </div>
                                                    </SheetClose>
                                                </Link>
                                            </NavigationMenuItem>
                                            )}
                                        )}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                            <SheetFooter>
                                <div className="flex justify-between">
                                    <SheetClose>
                                        <button onClick={()=> darkModeHandler()} className="mt-[4rem] ml-3">
                                            { dark && <Sun /> }
                                            { !dark && <Moon /> }
                                        </button>
                                    </SheetClose>
                                    <Button className="mt-[4rem] text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center" onClick={handleLogout}>Logout</Button>
                                </div>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="sticky top-0 z-40 bg-gray-200 text-gray-500 flex justify-between max-sm:hidden">      
                <NavigationMenu className="ml-[8rem]">
                    <NavigationMenuList>
                        {DataLink.map(data => {
                            return (
                            <NavigationMenuItem key={data.span}>
                                <Link to={data.link}>
                                    <NavigationMenuLink className={`flex py-3 px-3 mr-3 ${linkness(data.link)}`}>
                                        <i className="mr-1.5">{data.icon}</i>
                                        <span className="text-sm pt-[5px]">{data.span}</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            )}
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu className="mr-[10rem]">
                    <button onClick={()=> darkModeHandler()}>
                        { dark && <Sun /> }
                        { !dark && <Moon /> }
                    </button>
                </NavigationMenu>
            </div>
        </>
    )
}

export default Navbar;