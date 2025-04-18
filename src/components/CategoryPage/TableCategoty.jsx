import axios from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CircleX, CircleCheck, Loader2 } from "lucide-react";
import { data } from "react-router-dom";

  
const TableCategory = ({ dataCategories, setDataCategories }) => {
    const { toast } = useToast();
    const [categoryById, setCategoryById] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        picture: null,
        name: "",
        description: ""
    });


    const handleEditCategory = async(id) => {
        setOpen(true)
        try {
            const response = await axios.get(`http://localhost:3000/api/category/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                    'Content-Type': 'application/json'
                }
            });

            if(response.data.success){
                const resData = response.data;
                setCategoryById(resData.data);
            };
        } catch (err) {
            // backend ngasih err response, ambil message-nya
            const message = err.response.data?.message;
            toast({
                title: (
                <div className="flex items-center gap-2">
                    <CircleX className="w-5 h-5 text-white" /> 
                    <span>{message}</span>
                </div>
                ),
                variant: "destructive",
                duration: 1500,
            });
        };
    };
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "file" ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let publicId = categoryById.publicId;
            let pictureURL = categoryById.pictureURL;


            if(formData.picture){
                const imageData = new FormData();
                imageData.append("file", formData.picture);
                imageData.append("upload_preset", "pos_geh");
                
                const uploadRes = await axios.post(
                    "https://api.cloudinary.com/v1_1/acumalaka/image/upload", 
                    imageData
                  );
                
                publicId = uploadRes.data.public_id;
                pictureURL = uploadRes.data.secure_url;
            }

            const updateData = {
                categoryName : formData.name || categoryById.categoryName,
                description : formData.description || categoryById.description,
                publicId ,
                pictureURL
            }

            const response = await axios.put(`http://localhost:3000/api/category/${categoryById._id}`, updateData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                    'Content-Type': 'application/json'
                }
            });

            if(response.data.success){
                setDataCategories(prev =>
                    prev.map(item =>
                      item._id === response.data.data._id ? response.data.data : item
                    )
                  );
                setOpen(false);
                setLoading(false);
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
                setOpen(false);
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
            setOpen(false);
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


    const handleDeleteCategory = async(id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/category/${id}`,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                    'Content-Type': 'application/json'
                }
            });
            if(response.data.deletedCategory._id){
                setDataCategories((prev) => prev.filter(item => item._id !== id));
                toast({
                    title: (
                      <div className="flex items-center gap-2">
                        <CircleCheck className="w-5 h-5 text-white" /> 
                        <span>Data Berhasil Terhapus !</span>
                      </div>
                    ),
                    variant: "destructive",
                    duration: 1500,
                  });
            }
        } catch (err) {
            toast({
                title: (
                  <div className="flex items-center gap-2">
                    <CircleX className="w-5 h-5 text-white" /> 
                    <span>{err.response.data.message}</span>
                  </div>
                ),
                variant: "destructive",
                duration: 1500,
              });
        }
    };
    
    return(
        <div className="mt-8 bg-white">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Nama Kategori</TableHead>
                    <TableHead className="text-center pr-[40px]">Deskripsi</TableHead>
                    <TableHead className="text-right pr-[142px]">Aksi</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {dataCategories.map((item)=> {
                    return (
                        <TableRow>
                            <TableCell className="flex items-center">
                                <img src={item.pictureURL} className="w-[80px] h-[80px] mr-5" />
                                {item.categoryName}
                            </TableCell>
                            <TableCell className="text-center">{item.description}</TableCell>
                            <TableCell className="text-right">
                                <Dialog open={open} onOpenChange={setOpen} >
                                    <DialogTrigger className="max-sm:w-full">
                                        <Button className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-600 rounded-3xl text-xs px-5 py-2.5 mr-2 text-center"
                                        onClick={() => handleEditCategory(item._id)}>
                                            Ubah
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="p-0">
                                        <DialogHeader className="p-5 border-b-2 border-b-gray-300 capitalize">
                                            <DialogTitle>Ubah Data Kategori {categoryById.categoryName}</DialogTitle>
                                        </DialogHeader>
                                        <div className="px-7">
                                            <form onSubmit={handleSubmit}>
                                                <div className="space-y-4 md:space-y-6 my-7">
                                                    <div>
                                                        {categoryById.pictureURL && (
                                                            <div className="flex items-center justify-center mb-8">
                                                                <img src={categoryById.pictureURL} alt="Preview" className="w-32 h-32 object-cover" />
                                                            </div>
                                                        )}
                                                        <Label htmlFor="picture" className="block mb-2 text-sm font-medium text-gray-900">Ubah Foto Kategori</Label>
                                                        <Input id="picture" name="picture" type="file" onChange={handleChange} />
                                                    </div> 
                                                    <div>
                                                        <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama Kategori</Label>
                                                        <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder={categoryById.categoryName} />
                                                    </div> 
                                                    <div>
                                                        <Label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Deskripsi Kategori</Label>
                                                        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder={categoryById.description} />
                                                    </div> 
                                                </div>
                                                <DialogFooter>
                                                    <div className="flex justify-between w-full p-5 border-t-2 border-t-gray-300">
                                                        <DialogClose asChild>
                                                            <Button onClick={() => setOpen(false)} type="button" className="border border-black hover:bg-gray-200 focus:ring-4 focus:outline-none rounded-3xl text-xs px-5 py-2.5 text-center"
                                                            >
                                                            Tutup
                                                            </Button>
                                                        </DialogClose>
                                                        <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center"
                                                        disabled={loading}>
                                                            {loading && <Loader2 className="animate-spin" />}
                                                            {loading ? "Proses.." : "Simpan"}
                                                        </Button>
                                                    </div>
                                                </DialogFooter>
                                            </form>
                                        </div>
                                    </DialogContent>
                                </Dialog>           
                                <AlertDialog>
                                    <AlertDialogTrigger>
                                        <Button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 rounded-3xl text-xs px-5 py-2.5 text-center">
                                            Hapus
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Apakah anda yakin ingin menghapus data kategori ?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                              Jika anda yakin ingin menghapus data ketegori ini, maka data kategori ini akan terhapus secara permanen
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Batal</AlertDialogCancel>
                                            <AlertDialogAction>
                                                <Button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 rounded-3xl text-xs px-5 py-2.5 text-center"
                                                onClick={() => handleDeleteCategory(item._id)} >
                                                yakin
                                                </Button>
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </TableCell>
                        </TableRow>
                    )}
                )}
                </TableBody>
            </Table>      
        </div>
    );
};

export default TableCategory;