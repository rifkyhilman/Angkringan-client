import Kopi from "../assets/img/products/Kopi_aren.png";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardLimitStock = () => {
    return(
        <Card className="flex flex-col my-5">
            <CardHeader className="border-b-2 border-b-gray-200">
                <CardTitle className="text-md font-bold">STOK BARANG TIPIS</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
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
            </CardContent>
        </Card>      
    )
}

export default CardLimitStock;