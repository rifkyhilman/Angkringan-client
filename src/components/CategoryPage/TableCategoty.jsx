import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import LoaderSpinner from "@/components/LoaderSpinner";
  import NetError from "@/components/NetError";

  
const TableCategory = () => {
    const [dataCategories, setDataCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get("http://localhost:3000/api/category", {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('Token')}`,
                },
            });
            const resData = response.data;
            setDataCategories(Array.isArray(resData.data) ? resData.data : []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    const handleDeleteCategory = async(id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/category/${id}`,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.message)
        } catch (err) {
            console.error(err)
        }
    };

    if (loading) return <LoaderSpinner/>;
    if (error) return <NetError/>;
    
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
                                <Button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 rounded-3xl text-xs px-5 py-2.5 text-center"
                                onClick={() => handleDeleteCategory(item._id)} >
                                    Hapus
                                </Button>
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