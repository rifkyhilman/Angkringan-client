import { DataProducts } from "@/utils/dataDumy"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"

const CardProducts = () => {
    return (
        <div className="grid grid-cols-3 gap-5 py-8 mb-5 mt-5 border-y-4 border-y-gray-300  max-lg:grid-cols-2 max-sm:grid-cols-1">
            {DataProducts.map(data => {
                return (
                    <Card className="flex flex-col items-center" key={data.idProduct}>
                        <CardHeader className="border-b-2 border-b-gray-300">
                            <CardTitle className="text-md capitalize">{data.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center mt-4">
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