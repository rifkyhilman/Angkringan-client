import PropTypes from "prop-types";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  

const CardOrderItems = ({ orderItems, onDeleteItem }) => {
    const subTotalPrice = orderItems.reduce((total, item) => total + item.price, 0);
    let pajak
    subTotalPrice === 0 ? pajak = 0 : pajak = 2000;
    const totalPrice = subTotalPrice + pajak;
    
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

                    console.log(item)
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
                                    onClick={() => onDeleteItem(item.idProduct)}
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
                                Total ({orderItems.length} Items)
                            </p>
                        </div>
                        <div className="text-end">   
                            {pajak !== 0 && 
                                <>
                                    <p>
                                        {formattedPriceSub}
                                    </p>
                                    <p className="text-green-500">
                                        + Rp. {pajak}
                                    </p>
                                </>
                            }
                            <p>
                                {formattedPriceTotal}
                            </p>
                        </div>
                    </div>
                    <div className="my-5">
                        <Dialog>
                            <DialogTrigger className="w-full">
                                <Button className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none rounded-3xl text-xs px-5 py-2.5 text-center"> 
                                    Pesan
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="p-0">
                                <DialogHeader className="p-5 border-b-2 border-b-gray-300">
                                    <DialogTitle>Pembayaran</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 p-7">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                        Name
                                        </Label>
                                        <Input id="name" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                        Username
                                        </Label>
                                        <Input id="username" className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <div className="flex justify-between w-full p-5 border-t-2 border-t-gray-300">
                                        <DialogClose asChild>
                                            <Button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center">
                                                Batal
                                            </Button>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center">
                                                Bayar
                                            </Button>
                                        </DialogClose>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
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
  };

export default CardOrderItems;