import { Card } from "@/components/ui/card"
import Kopi from "../assets/img/products/kopi_aren.png"

const CategorySlider = () => {
    const DataKategori = [
        {
            name: "makanan",
            pathImg: ""
        },
        {
            name: "minuman",
            pathImg: ""
        },
        {
            name: "seblak",
            pathImg: ""
        }
    ]

    return (
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {DataKategori.map(data => {
                return (
                    <Card className="my-5 p-0 h-[5rem] w-full" key={data.name}>
                         <div className="grid grid-cols-2 h-full items-center">
                             <div className="mx-auto">
                                 <img src={Kopi} className="w-[60px] h-[60px]" alt="Kopi-aren-top"/>
                             </div>
                             <div className="capitalize">{data.name}</div>
                         </div>
                     </Card>
                )}
            )}
        </div>

    )
}

export default CategorySlider;