import Kopi from "../../assets/img/products/Kopi_aren.png";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"

const CardOrderItems = () => {
    return (
        <Card className="flex flex-col my-5 max-h-[46rem]">
            <CardHeader className="border-b-2 border-b-gray-200">
                <CardTitle className="text-md uppercase">item pesanan</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto no-scrollbar">
                <Card className="mt-5 pr-5 pt-5 h-[8.2rem]">
                    <div className="grid grid-flow-col grid-rows-3 gap-2">
                        <div className="row-span-3 mx-auto">
                            <img src={Kopi} className="w-[100px] h-[100px]" alt="Kopi-aren-top"/>
                        </div>
                        <div className="col-span-2 border-b-2 border-b-gray-200 pb-3">Kopi Gula Aren</div>
                        <div className="col-span-2 text-red-800">Stok: 5 </div>
                    </div>
                </Card>
                <Card className="mt-5 pr-5 pt-5 h-[8.2rem]">
                    <div className="grid grid-flow-col grid-rows-3 gap-2">
                        <div className="row-span-3 mx-auto">
                            <img src={Kopi} className="w-[100px] h-[100px]" alt="Kopi-aren-top"/>
                        </div>
                        <div className="col-span-2 border-b-2 border-b-gray-200 pb-3">Kopi Gula Aren</div>
                        <div className="col-span-2 text-red-800">Stok: 5 </div>
                    </div>
                </Card>
                <Card className="mt-5 pr-5 pt-5 h-[8.2rem]">
                    <div className="grid grid-flow-col grid-rows-3 gap-2">
                        <div className="row-span-3 mx-auto">
                            <img src={Kopi} className="w-[100px] h-[100px]" alt="Kopi-aren-top"/>
                        </div>
                        <div className="col-span-2 border-b-2 border-b-gray-200 pb-3">Kopi Gula Aren</div>
                        <div className="col-span-2 text-red-800">Stok: 5 </div>
                    </div>
                </Card>
                <Card className="mt-5 mb-5 pr-5 pt-5 h-[8.2rem]">
                    <div className="grid grid-flow-col grid-rows-3 gap-2">
                        <div className="row-span-3 mx-auto">
                            <img src={Kopi} className="w-[100px] h-[100px]" alt="Kopi-aren-top"/>
                        </div>
                        <div className="col-span-2 border-b-2 border-b-gray-200 pb-3">Kopi Gula Aren</div>
                        <div className="col-span-2 text-red-800">Stok: 5 </div>
                    </div>
                </Card>
            </CardContent>
            <CardFooter className="border-t-2 border-t-gray-200">
                <div className="w-full">
                    <div className="mt-5 px-3 text-sm flex justify-between">
                        <div>
                            <p>
                                SubTotal 
                            </p>
                            <p>
                                PPN 12%
                            </p>
                            <p>
                                Total 
                            </p>
                        </div>
                        <div className="text-end">
                            <p>
                                Rp. 15.000.00
                            </p>
                            <p className="text-red-500">
                                - Rp. 300
                            </p>
                            <p>
                                Rp. 14.700.00
                            </p>
                        </div>
                    </div>
                    <div className="my-5">
                        <Button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center"> Order </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>      
    )
}

export default CardOrderItems;