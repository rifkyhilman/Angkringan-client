import { Card } from "@/components/ui/card"
import { DataKategori } from "../utils/dataDumy.jsx";


const CategorySlider = () => {
    return (
        <div className="w-full overflow-x-auto no-scrollbar border-b-4 border-b-gray-300">
            <div className="grid grid-flow-col grid-cols-3 gap-5 w-max">
                {DataKategori.map(data => {
                    return (
                        <Card className="my-5 p-0 h-[5rem]" key={data.name}>
                            <div className="flex h-full items-center">
                                <div className="pl-7">
                                    <img src={data.pathImg} className="w-[60px] h-[60px]" alt="Kopi-aren-top"/>
                                </div>
                                <div className="pr-7 ml-2 capitalize font-bold text-base">{data.name}</div>
                            </div>
                        </Card>
                    )}
                )}
            </div>
        </div>

    )
}

export default CategorySlider;