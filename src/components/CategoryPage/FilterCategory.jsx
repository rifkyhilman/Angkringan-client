import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
 } from "@/components/ui/dialog";


import { Search, Plus } from "lucide-react";


const FilterCategory = () => {
    return(
        <div className="flex mt-5">
            <Dialog>
                <DialogTrigger className="max-sm:w-full">
                    <Button className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs px-5 py-2.5 text-center capitalize">
                        <Plus/>
                        tambah data
                    </Button>
                </DialogTrigger>
                <DialogContent className="p-0">
                    <DialogHeader className="p-5 border-b-2 border-b-gray-300 capitalize">
                        <DialogTitle>kategori baru</DialogTitle>
                    </DialogHeader>
                    <div className="px-7">
                        <form>
                            <div className="space-y-4 md:space-y-6 my-7">
                                <div>
                                    <Label htmlFor="picture" className="block mb-2 text-sm font-medium text-gray-900">Foto Kategori</Label>
                                    <Input id="picture" type="file" required/>
                                </div> 
                                <div>
                                    <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama Kategori</Label>
                                    <Input type="text" placeholder="Maukan Nama Kategori" />
                                </div> 
                                <div>
                                    <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Deskripsi Kategori</Label>
                                    <Textarea placeholder="Masukan Deskripsi" />
                                </div> 
                            </div>
                        </form>
                    </div>
                    <DialogFooter>
                        <div className="flex justify-between w-full p-5 border-t-2 border-t-gray-300">
                            <DialogClose asChild>
                                <Button type="button" className="border border-black hover:bg-gray-200 focus:ring-4 focus:outline-none rounded-3xl text-xs px-5 py-2.5 text-center"
                                >
                                    Tutup
                                </Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center"
                                >
                                    <Plus/>
                                    Simpan
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Input type="text" placeholder="Masukan Nama Kategori.." className="bg-white" />
            <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs px-5 py-2.5 text-center "><Search/></Button>
        </div>
    )
}

export default FilterCategory;