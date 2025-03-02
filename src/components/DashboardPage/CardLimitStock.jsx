import SateAyam from "@/assets/img/products/sate_usus.png";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardLimitStock = () => {
    return(
        <Card className="flex flex-col my-5 h-[30rem]">
            <CardHeader className="border-b-2 border-b-gray-200">
                <CardTitle className="text-md font-bold">STOK BARANG TIPIS</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto no-scrollbar">
                <Card className="mt-5 pr-5 pt-5 h-[8.2rem]">
                    <div className="grid grid-flow-col grid-rows-3 gap-2 max-sm:ml-5">
                        <div className="row-span-3 mx-auto max-sm:hidden">
                            <img src={SateAyam} className="w-[100px] h-[100px]" alt="SateAyam"/>
                        </div>
                        <div className="col-span-2 border-b-2 border-b-gray-200 pb-3">SateAyam</div>
                        <div className="col-span-2 text-red-800">Stok: 5 </div>
                    </div>
                </Card>
                <Card className="mt-5 pr-5 pt-5 h-[8.2rem]">
                    <div className="grid grid-flow-col grid-rows-3 gap-2 max-sm:ml-5">
                        <div className="row-span-3 mx-auto max-sm:hidden">
                            <img src={SateAyam} className="w-[100px] h-[100px]" alt="SateAyam"/>
                        </div>
                        <div className="col-span-2 border-b-2 border-b-gray-200 pb-3">SateAyam</div>
                        <div className="col-span-2 text-red-800">Stok: 5 </div>
                    </div>
                </Card>
                <Card className="mt-5 pr-5 pt-5 h-[8.2rem]">
                    <div className="grid grid-flow-col grid-rows-3 gap-2 max-sm:ml-5">
                        <div className="row-span-3 mx-auto max-sm:hidden">
                            <img src={SateAyam} className="w-[100px] h-[100px]" alt="SateAyam"/>
                        </div>
                        <div className="col-span-2 border-b-2 border-b-gray-200 pb-3">SateAyam</div>
                        <div className="col-span-2 text-red-800">Stok: 5 </div>
                    </div>
                </Card>
                <Card className="mt-5 mb-5 pr-5 pt-5 h-[8.2rem]">
                    <div className="grid grid-flow-col grid-rows-3 gap-2 max-sm:ml-5">
                        <div className="row-span-3 mx-auto max-sm:hidden">
                            <img src={SateAyam} className="w-[100px] h-[100px]" alt="SateAyam"/>
                        </div>
                        <div className="col-span-2 border-b-2 border-b-gray-200 pb-3">SateAyam</div>
                        <div className="col-span-2 text-red-800">Stok: 5 </div>
                    </div>
                </Card>
            </CardContent>
        </Card>      
    )
}

export default CardLimitStock;