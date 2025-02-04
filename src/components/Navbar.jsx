import Avatar from "../assets/img/profile.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react"; 
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react";



const Navbar = () => {
    return (
        <>        
            <div className="flex justify-between  items-center bg-black text-white p-5">
                <div className="ml-[7rem] font-bold text-2xl max-sm:ml-5">
                    <h1>Angkringan</h1>
                </div>
                <div className="flex justify-between items-center mr-[7rem] max-sm:hidden">
                    <span className="mr-3">Admin</span>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <img className="h-10 rounded-full" src={Avatar} alt="avatar-profile" />
                        </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><LogOut/>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="hidden  max-sm:mr-5 max-sm:block">
                    <Sheet>
                        {/* Trigger untuk membuka Sheet */}
                        <SheetTrigger asChild className="bg-black">
                            <Button variant="outline" size="icon">
                                <Menu className="h-4 w-4" /> {/* Icon burger menu */}
                            </Button>
                        </SheetTrigger>
                    
                        {/* Konten Sheet */}
                        <SheetContent side="right"> {/* Muncul dari sisi kiri */}
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>
                                    Pilih menu di bawah ini.
                                </SheetDescription>
                            </SheetHeader>
                    
                            {/* Daftar Menu */}
                            <div className="mt-4 space-y-2">
                            <Button variant="ghost" className="w-full justify-start">
                                Home
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                                Profile
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                                Settings
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                                Logout
                            </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="bg-slate-500">
                
            </div>
        </>
    )
}

export default Navbar;