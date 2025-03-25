import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
    NavigationMenuContent } from "@/components/ui/navigation-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";
      
import { 
    Menu,
    LogOut, 
    Moon,
    Sun,
    TriangleAlert,
    House, 
    ShoppingCart, 
    History,
    Box,
    Users,
    ChevronDown, 
    ChevronUp } from "lucide-react";

const Navbar = () => {
    const navigate = useNavigate();
    const { toast } = useToast();

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [dark, setDark] = useState(false);

    const token = localStorage.getItem("Token");
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode token payload


    let {pathname} = useLocation();
    let subpage = pathname.split('/')?.[1]

    const linkness = (type = null) => {
        let classes = "border-b-2 border-b-transparent"

        if(type === subpage){
            classes = "border-b-2 border-b-black text-black"
        } 

        return classes
    }


    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const handleLogout = () => {
        toast({
            title: (
            <div className="flex items-center gap-2">
                <TriangleAlert className="w-5 h-5 text-white" /> 
                <span>Anda Berhasil Keluar</span>
            </div>
            ),
            variant: "destructive",
            duration: 1000,
          });
        setTimeout(()=>{
            localStorage.removeItem("Token"); 
            navigate("/");
        },1000)
      };

    return (
        <>        
            <div className="flex justify-between items-center text-white border-b-transparent bg-black py-5 px-[8rem] max-sm:px-[3rem] max-sm:sticky max-sm:top-0 max-sm:z-40">
                <div className="font-bold text-2xl max-sm:text-lg">
                    <Link to="dashboard">
                        <h1>Angkringan</h1>
                    </Link>
                </div>
                <div className="max-sm:hidden z-50">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-white text-base">
                                {payload.username}
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
                                    <SheetTitle>
                                        <div className="border-y-4 border-y-black bg-slate-200 py-3 mt-10">
                                            {payload.username}
                                        </div>
                                    </SheetTitle>
                            </SheetHeader>
                            <div className="mt-[4.5rem]">
                                <NavigationMenu>
                                    <NavigationMenuList className="felx flex-col gap-5 items-baseline">
                                 
                                            <NavigationMenuItem>
                                                <Link>
                                                    <SheetClose>
                                                        <div className="flex pl-2">
                                                            <i className={`pr-3 pb-2 ${linkness("dashboard")}`}><House/></i>
                                                            <NavigationMenuLink className={linkness("dashboard")}>
                                                                <span>DASHBOARD</span>
                                                            </NavigationMenuLink>
                                                        </div>
                                                    </SheetClose>
                                                </Link>
                                            </NavigationMenuItem>

                                            <NavigationMenuItem>
                                                <Link>
                                                    <SheetClose>
                                                        <div className="flex pl-2">
                                                            <i className={`pr-3 pb-2 ${linkness("transaction")}`}><ShoppingCart/></i>
                                                            <NavigationMenuLink className={linkness("transaction")}>
                                                                <span>TRANSAKSI</span>
                                                            </NavigationMenuLink>
                                                        </div>
                                                    </SheetClose>
                                                </Link>
                                            </NavigationMenuItem>

                                            <NavigationMenuItem>
                                                <Link>
                                                    <SheetClose>
                                                        <div className="flex pl-2">
                                                            <i className={`pr-3 pb-2 ${linkness("history-transaction")}`}><History/></i>
                                                            <NavigationMenuLink className={linkness("history-transaction")}>
                                                                <span>HISTORY</span>
                                                            </NavigationMenuLink>
                                                        </div>
                                                    </SheetClose>
                                                </Link>
                                            </NavigationMenuItem>

                                            <NavigationMenuItem>
                                                <Link>
                                                    <SheetClose>
                                                        <div className="flex pl-2">
                                                            <i className={`pr-3 pb-2 ${linkness("master")}`}><Box/></i>
                                                            <NavigationMenuLink className={linkness("master")}>
                                                                <span>KELOLA DATA</span>
                                                            </NavigationMenuLink>
                                                        </div>
                                                    </SheetClose>
                                                </Link>
                                            </NavigationMenuItem>

                                            <NavigationMenuItem>
                                                <Link>
                                                    <SheetClose>
                                                        <div className="flex pl-2">
                                                            <i className={`pr-3 pb-2 ${linkness("users")}`}><Users/></i>
                                                            <NavigationMenuLink className={linkness("users")}>
                                                                <span>PENGGUNA</span>
                                                            </NavigationMenuLink>
                                                        </div>
                                                    </SheetClose>
                                                </Link>
                                            </NavigationMenuItem>
                                    
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
               
                            <NavigationMenuItem>
                                <Link to="dashboard">
                                    <NavigationMenuLink className={`flex py-3 px-3 mr-3 ${linkness("dashboard")}`}>
                                        <i className="mr-1.5"><House/></i>
                                        <span className="text-sm pt-[5px]">DASHBOARD</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <DropdownMenu onOpenChange={setIsOpenMenu}>
                                    <DropdownMenuTrigger className={`flex p-3 items-end ${linkness("dashboard" && "transaction")}`}>
                                        <Box className="mr-1.5" />
                                        <span className="text-sm mr-1 uppercase">Kelola Data</span>
                                        {isOpenMenu ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48">
                                        <DropdownMenuItem asChild>
                                            <Link to="dashboard">Kelola Kategori</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link to="dashboard">Kelola Barang</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link to="transaction">
                                    <NavigationMenuLink className={`flex py-3 px-3 mr-3 ${linkness("transaction")}`}>
                                        <i className="mr-1.5"><ShoppingCart/></i>
                                        <span className="text-sm pt-[5px]">TRANSAKSI</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="history-transaction">
                                    <NavigationMenuLink className={`flex py-3 px-3 mr-3 ${linkness("history-transaction")}`}>
                                        <i className="mr-1.5"><History/></i>
                                        <span className="text-sm pt-[5px]">RIWAYAT</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link>
                                    <NavigationMenuLink className={`flex py-3 px-3 mr-3 ${linkness("users")}`}>
                                        <i className="mr-1.5"><Users/></i>
                                        <span className="text-sm pt-[5px]">PENGGUNA</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

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