// import { Card } from "@/components/ui/card"
import AllIcon from "../assets/img/products/all.png";
import { DataKategori } from "../utils/dataDumy.jsx";
import { Button } from "./ui/button.jsx";


const CategorySlider = () => {
    return (
        <div className="flex gap-5">
            <div>
                <Button className="mt-[1.4rem] p-0 h-[5rem] bg-white">
                    <div className="h-full">
                        <div className="px-5 pt-3">
                            <img src={AllIcon} className="w-[80px] h-[58px]" alt="Kopi-aren-top"/>
                        </div>
                    </div>
                </Button>
            </div>
            <div className="w-full overflow-x-auto no-scrollbar">
                <div className="grid grid-flow-col grid-cols-3 gap-5 w-max">
                    {DataKategori.map(data => {
                        return (
                            <Button className="mt-[1.4rem] p-0 h-[5rem] bg-white" key={data}>
                                <div className="flex h-full items-center">
                                    <div className="pl-6 py-5">
                                        <img src={data.pathImg} className="w-[60px] h-[60px]" alt="Kopi-aren-top"/>
                                    </div>
                                    <div className="pr-6 ml-2 capitalize font-bold text-base">{data.name}</div>
                                </div>
                            </Button>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default CategorySlider;