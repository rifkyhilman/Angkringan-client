import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
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
    Users,
    Moon,
    Sun,
    TriangleAlert
} from "lucide-react";


const Navbar = () => {
    const navigate = useNavigate();
    const { toast } = useToast()

    const dataLink = [
        {
            icon: <House/>,
            span: "DASHBOARD",
            link: "dashboard"
        },
        {
            icon: <ShoppingCart/>,
            span: "TRANSAKSI",
            link: "transaction"
        },
        {
            icon: <Users/>,
            span: "PENGGUNA",
            link: "users"
        }
    ];
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
            <div className="flex justify-between items-center text-white border-b-transparent bg-black py-5 px-[8rem]">
                <div className="font-bold text-2xl max-sm:ml-5">
                    <h1>Angkringan</h1>
                </div>
                <div className="max-sm:hidden">
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
                <div className="hidden max-sm:mr-5 max-sm:block">
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
                                    <NavigationMenuList className="flex flex-col items-baseline">
                                        {dataLink.map(data => {
                                            return (
                                            <NavigationMenuItem key={data.span}>
                                                <Link to={data.link}>
                                                    <NavigationMenuLink className={linkness(data.link)}>
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
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="sticky top-0 bg-gray-200 text-gray-500 flex justify-between max-sm:hidden">      
                <NavigationMenu className="ml-[8rem]">
                    <NavigationMenuList>
                        {dataLink.map(data => {
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
                        {   
                            dark && <Sun />
                        }
                        {
                            !dark && <Moon />
                        }
                    </button>
                </NavigationMenu>
            </div>
        </>
    )
}

export default Navbar;