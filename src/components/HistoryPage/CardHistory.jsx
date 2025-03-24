import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { FileSearch, Printer } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
 } from "@/components/ui/dialog"
import LoaderHistory from "@/components/HistoryPage/LoaderHistory.jsx";
import NetError from "@/components/NetError.jsx";



const CardHistory = () => {
    const [dataTransaction, setDataTransaction] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = useCallback(async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:3000/api/transaction", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        });
        const resData = response.data;
        setDataTransaction(Array.isArray(resData.data) ? resData.data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, []);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    if (loading) return <LoaderHistory/>;
    if (error) return <NetError/>;

    return (
        dataTransaction.map((item) => {
            const dateUTC = item.createdAt;         

            const dateTransaction = dateUTC.split("T")[0];
            const [year, month, day] = dateTransaction.split("-");
            
            const timePart = dateUTC.split("T")[1].split(".")[0];
            const [hours, minutes] = timePart.split(":");

            const timeTransaction = `${hours} : ${minutes}  WIB`;
            
            return (
                <Card className="mt-5" key={item.invoiceNumber}>
                    <div className="flex justify-between max-sm:flex-col">
                        <CardHeader>
                            <CardTitle className="max-sm:text-center">
                                {item.customerName}
                            </CardTitle>
                            <div className="text-sm max-sm:text-center">
                                <p>
                                    {`${day}-${month}-${year}`}
                                </p>
                                <p>{timeTransaction}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-[3.20rem] text-base">
                                <p>{item.invoiceNumber}</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Dialog>
                                <DialogTrigger className="max-sm:w-full">
                                    <Button className="w-full text-green-600 border-2 border-green-600 hover:text-white hover:bg-green-700 focus:ring-green-300 focus:outline-none text-sm px-5 py-2.5 mt-6 text-center"> 
                                        <FileSearch/>
                                        Detail
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="p-0">
                                    <DialogHeader className="p-5 border-b-2 border-b-gray-300">
                                        <DialogTitle>{item.invoiceNumber}</DialogTitle>
                                    </DialogHeader>
                                    <div className="px-10 py-5">
                                        <div className="flex justify-between">
                                            <p>Nama Pelanggan :</p>
                                            <p>{item.customerName}</p>
                                        </div>     
                                        <div className="flex justify-between">
                                            <p>Tanggal : </p>
                                            <p>{`${day}-${month}-${year}`}</p>
                                        </div>     
                                        <div className="flex justify-between">
                                            <p>Waktu : </p>
                                            <p>{timeTransaction}</p>
                                        </div> 
                                        <div className="my-5">
                                            <p>Barang yang dibeli : </p>
                                            {item.items.map((barang) => {
                                                return (
                                                    <div className="grid grid-cols-3 ml-5">
                                                        <p>{barang.name}</p>   
                                                        <p className="text-center">x {barang.quantity}</p> 
                                                        <p className="text-center">Rp. {barang.price}</p>
                                                    </div>
                                            )})}
                                        </div>     
                                        <div className="flex justify-between">
                                            <p>Total : </p>
                                            <p>Rp. {item.totalPrice}</p>
                                        </div>     
                                        <div className="flex justify-between">
                                            <p>Uang Bayar : </p>
                                            <p>Rp. {item.cash}</p>
                                        </div>     
                                        <div className="flex justify-between">
                                            <p>Kembalian : </p>
                                            <p>Rp. {item.cashBack}</p>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <div className="flex justify-between w-full p-5 border-t-2 border-t-gray-300">
                                            <DialogClose asChild>
                                                <Button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 rounded-3xl text-xs px-5 py-2.5 text-center"
                                                >
                                                    Tutup
                                                </Button>
                                            </DialogClose>
                                            <DialogClose asChild>
                                                <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center"
                                                >
                                                    <Printer/>
                                                    Cetak
                                                </Button>
                                            </DialogClose>
                                        </div>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </div>
                </Card>
            )}
        )
    )
}

export default CardHistory;