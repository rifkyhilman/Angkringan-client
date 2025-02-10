import CikuaImg from "../../assets/img/products/Cikua.png";
import CrabImg from "../../assets/img/products/Crab_stick.png";
import KopiArenImg from "../../assets/img/products/Kopi_aren.png";
import DumplingKejuImg from "../../assets/img/products/Dumpling_keju.png";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"

const CardProducts = () => {
    const dataProducts = [
        {
            idProduct: 123,
            categoryProduct: "Makanan",
            name: "Cikua",
            imgPath: CikuaImg,
            price: 2000,
            qty: 10
        },
        {
            idProduct: 123,
            categoryProduct: "Makanan",
            name: "Crab Stick",
            imgPath: CrabImg,
            price: 2000,
            qty: 15
        },
        {
            idProduct: 123,
            categoryProduct: "Minuman",
            name: "Kopi Top Aren",
            imgPath: KopiArenImg,
            price: 5000,
            qty: 40
        },
        {
            idProduct: 123,
            categoryProduct: "Makanan",
            name: "Dumpling Keju",
            imgPath: DumplingKejuImg,
            price: 6000,
            qty: 30
        }
    ]
    return (
        <div className="container grid grid-cols-3 gap-5 p-0 mt-5 max-sm:grid-cols-1">
            {dataProducts.map(data => {
                return (
                    <Card className="flex flex-col items-center" key={data.idProduct}>
                        <CardHeader className="border-b-2 border-b-gray-300">
                            <CardTitle className="text-md capitalize">{data.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center my-5">
                            <img src={data.imgPath} className="h-[140px] mb-5" />
                            <h1>Rp. {data.price}</h1>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center">Masuk Keranjang</Button>
                        </CardFooter>
                    </Card>   
                )}
            )}
              
        </div>
    )
}

export default CardProducts;