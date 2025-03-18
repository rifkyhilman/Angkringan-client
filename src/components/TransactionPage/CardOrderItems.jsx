import PropTypes from "prop-types";
import axios from 'axios';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 }  from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
 } from "@/components/ui/dialog";
import PaymentSuccess from "@/components/TransactionPage/PaymentSucces.jsx";
import PaymentFailed from "@/components/TransactionPage/PaymentFailed.jsx";
  

const CardOrderItems = ({ orderItems, onDeleteItem, onPayment }) => {
    const subTotalPrice = orderItems.reduce((total, item) => total + item.price, 0);
    const [customer, setCustomer] = useState("");
    const [payment, setPayment] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    let pajak;
    subTotalPrice === 0 ? pajak = 0 : pajak = subTotalPrice*0.12;
    const totalPrice = subTotalPrice + pajak;

    let changePayment;
    payment <= totalPrice ? changePayment = 0 : changePayment = payment - totalPrice;
    
    const handleCustomerName = (event) => {
        setCustomer(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };

    const handleClickPayment = async () => {
        setLoading(true);
        const newOrderItems = orderItems.map(({ categoryProduct, idProduct, imgPath, ...rest }) => rest);
        const dataTransaction = {
            customerName: customer,
            items: newOrderItems,
            cash: parseInt(payment), 
            totalPrice: totalPrice,
            cashBack: changePayment 
        }
        try {
            const response = await axios.post('http://localhost:3000/api/transaction', dataTransaction, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                  'Content-Type': 'application/json'
                }
              });
            if(response.data){
                setTimeout(()=> {
                    setOpen(false);
                    setShowSuccess(true);
                    setLoading(false);
                    setCustomer("");
                    setPayment(0);
                    onPayment();
                }, 1000)
            }
        } catch (error) {
            setTimeout(()=> {
                setOpen(false);
                setShowFailed(true);
                setLoading(false);
              }, 1000)
            console.error('Error posting data:', error);
        }
    }

    const handleCancelPayment = () => {
        setOpen(false);
        setCustomer("");
        setPayment(0);
    }
    
    const formattedPriceSub = subTotalPrice.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });
    const formattedPriceTotal = totalPrice.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });
    const formattedChangePayment = changePayment.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
    });
    const formattedPajak = pajak.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
    });

    

    return (
        <Card className="flex flex-col my-5 max-h-[57rem]">
            <CardHeader className="border-b-2 border-b-gray-200">
                <CardTitle className="text-md uppercase">item pesanan</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto no-scrollbar">
                { orderItems.map((item) => {
                    const formattedPrice= item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 2,
                    });
                    return (
                        <Card className="mt-5 p-3" key={item.idProduct}>
                            <div className="grid grid-flow-col grid-rows-2">
                                <div className="row-span-3 content-center max-lg:hidden">
                                    <img src={item.imgPath} className="h-[50px] w-[50px]" alt={item.name}/>
                                </div>
                                <div className="row-span-3 text-xs">
                                    <div className="border-b-2 border-b-gray-300 py-2 -ml-4 max-w-[4.5rem] max-lg:ml-0">
                                        <p className="font-bold pb-1">
                                            {item.name}
                                        </p>
                                        <p className="text-blue-500">
                                            {formattedPrice}
                                        </p>
                                    </div>
                                    <p className="py-2 -ml-4 max-lg:ml-0">
                                        jumlah : {item.quantity} x
                                    </p>
                                </div>
                                <button 
                                    className="row-span-3 text-white bg-red-500 text-xs ml-5 -mr-3 -my-3 rounded-r-lg"
                                    onClick={() => onDeleteItem(item.idProduct, item.name)}
                                >
                                    Batal
                                </button>
                            </div>
                        </Card>
                    )}
                )}
            </CardContent>
            <CardFooter className="border-t-2 border-t-gray-200">
                <div className="w-full">
                    <div className="mt-5 px-3 text-sm flex justify-between">
                        <div>
                            {pajak !== 0 && 
                                <>
                                    <p>
                                        SubTotal 
                                    </p>
                                    <p>
                                        PPN 12%
                                    </p>
                                </>
                            }
                            <p>
                                Total ({orderItems.reduce((total, item) => total + item.quantity, 0)} Items)
                            </p>
                        </div>
                        <div className="text-end">   
                            {pajak !== 0 && 
                                <>
                                    <p>
                                        {formattedPriceSub}
                                    </p>
                                    <p className="text-green-500">
                                        + Rp. {formattedPajak}
                                    </p>
                                </>
                            }
                            <p>
                                {formattedPriceTotal}
                            </p>
                        </div>
                    </div>
                    <div className="my-5">
                        <Dialog open={open} onOpenChange={setOpen} >
                            <DialogTrigger className="w-full" disabled={orderItems.length === 0} asChild>
                                <Button onClick={() => setOpen(true)} className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none rounded-3xl text-xs px-5 py-2.5 text-center" disabled={orderItems.length === 0}> 
                                    Pesan
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="p-0">
                                <DialogHeader className="p-5 border-b-2 border-b-gray-300">
                                    <DialogTitle>Pembayaran Tunai</DialogTitle>
                                </DialogHeader>
                                <div className="px-10 py-5">
                                    <div className="bg-gray-200 mb-7 p-4 rounded-md dark:text-black">
                                        <div className="flex justify-between border-b-2 border-b-gray-300 py-5 px-3">
                                            <p>Total : </p>
                                            <p>{formattedPriceTotal}</p>
                                        </div>
                                        <div className="flex justify-between text-green-600 py-5 px-3">
                                            <p>Kembalian : </p>
                                            <p>{formattedChangePayment}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mb-3 max-sm:flex-col">
                                        <div className="max-sm:mb-3">
                                            <Label htmlFor="name">
                                                Nama Pembeli
                                            </Label>
                                            <Input className="mt-2" id="name" type="text" placeholder="Nama Pembeli" onChange={handleCustomerName} disabled={loading} />
                                        </div>
                                        <div> 
                                            <Label htmlFor="discount" className="text-gray-400">
                                                Potongan Harga (Rp.)
                                            </Label>
                                            <Input className="mt-2" id="discount" type="number" placeholder="Rp. 000,00" disabled />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <Label htmlFor="cash">
                                            Jumlah Uang Tunai
                                        </Label>
                                        <Input className="mt-2" id="cash" type="number" placeholder="Rp.000,00" onChange={handlePaymentChange} disabled={loading} />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <div className="flex justify-between w-full p-5 border-t-2 border-t-gray-300">
                                        <Button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center"
                                        onClick={handleCancelPayment}>
                                            Batal
                                        </Button>
                                        <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center"
                                        onClick={handleClickPayment} disabled={customer === "" || payment < totalPrice || loading}>
                                            {loading && <Loader2 className="animate-spin" />}
                                            {loading ? "Proses.." : "Bayar"}
                                        </Button>                                    
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        {showSuccess && <PaymentSuccess onClose={() =>  setShowSuccess(false)} />}
                        {showFailed && <PaymentFailed onClose={() =>  setShowFailed(false)}/>}
                    </div>
                </div>
            </CardFooter>
        </Card>      
    );
}

CardOrderItems.propTypes = {
    orderItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onPayment: PropTypes.func.isRequired,
  };

export default CardOrderItems;