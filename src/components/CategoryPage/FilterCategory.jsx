import axios from 'axios';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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


import { 
    Search, 
    Plus,
    CircleCheck, 
    CircleX } from "lucide-react";

const FilterCategory = () => {
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        picture: null,
        name: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "file" ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Upload gambar ke Cloudinary
        const imageData = new FormData();
        imageData.append("file", formData.picture);
        imageData.append("upload_preset", "pos_geh");


        try {
            // Upload ke Cloudinary
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/acumalaka/image/upload", 
                imageData
              );

            const dataCategories = {
                categoryName: formData.name,
                description: formData.description,
                pictureURL: uploadRes.data.secure_url
            }

            const response = await axios.post("http://localhost:3000/api/category", dataCategories, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                  'Content-Type': 'application/json'
                }
              });

            console.log(response)

            if (response.data) {
                toast({
                    title: (
                      <div className="flex items-center gap-2">
                        <CircleCheck className="w-5 h-5 text-white" /> 
                        <span>Data Tersimpan !</span> 
                      </div>
                    ),
                    className: "bg-green-500 text-white",
                    duration: 1000,
                  });
            } else {
                toast({
                    title: (
                      <div className="flex items-center gap-2">
                        <CircleX className="w-5 h-5 text-white" /> 
                        <span>Data Gagal Tersimpan !</span>
                      </div>
                    ),
                    variant: "destructive",
                    duration: 1500,
                  });
            }
        } catch (err) {
            console.error(err);
            toast({
                title: (
                  <div className="flex items-center gap-2">
                    <CircleX className="w-5 h-5 text-white" /> 
                    <span>Server Bermasalah !</span>
                  </div>
                ),
                variant: "destructive",
                duration: 1500,
              });
        }
    };

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
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4 md:space-y-6 my-7">
                                <div>
                                    <Label htmlFor="picture" className="block mb-2 text-sm font-medium text-gray-900">Foto Kategori</Label>
                                    <Input id="picture" name="picture" type="file" onChange={handleChange} required />
                                </div> 
                                <div>
                                    <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama Kategori</Label>
                                    <Input id="name" name="name" type="text" placeholder="Maukan Nama Kategori"  value={formData.name} onChange={handleChange} />
                                </div> 
                                <div>
                                    <Label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Deskripsi Kategori</Label>
                                    <Textarea id="description" name="description" placeholder="Masukan Deskripsi" value={formData.description} onChange={handleChange} />
                                </div> 
                            </div>
                            <DialogFooter>
                                <div className="flex justify-between w-full p-5 border-t-2 border-t-gray-300">
                                    <DialogClose asChild>
                                        <Button type="button" className="border border-black hover:bg-gray-200 focus:ring-4 focus:outline-none rounded-3xl text-xs px-5 py-2.5 text-center"
                                        >
                                            Tutup
                                        </Button>
                                    </DialogClose>
                                    <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center"
                                    >
                                        <Plus/>
                                        Simpan
                                    </Button>
                                </div>
                            </DialogFooter>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
            <Input type="text" placeholder="Masukan Nama Kategori.." className="bg-white" />
            <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs px-5 py-2.5 text-center "><Search/></Button>
        </div>
    )
}

export default FilterCategory;