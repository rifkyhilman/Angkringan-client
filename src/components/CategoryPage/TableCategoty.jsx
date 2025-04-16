import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
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
} from "@/components/ui/alert-dialog"
import { CircleX, CircleCheck } from "lucide-react";

  
const TableCategory = ({ dataCategories, setDataCategories }) => {
    const { toast } = useToast();
    
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
                                <Button className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-600 rounded-3xl text-xs px-5 py-2.5 mr-2 text-center">
                                    Ubah
                                </Button>
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
                                              Jika anda yakin ingin menghapus data ketegoti ini, maka data kategori ini akan terhapus secara permanen
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Batal</AlertDialogCancel>
                                            <AlertDialogAction>
                                                <Button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 rounded-3xl text-xs px-5 py-2.5 text-center"
                                                onClick={() => handleDeleteCategory(item._id)} >
                                                    Hapus
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