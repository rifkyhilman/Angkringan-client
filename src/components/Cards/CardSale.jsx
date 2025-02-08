import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardSale = () => {
    return(
        <Card className="px-5 pt-3">
            <CardHeader className= "py-2">
                <CardTitle className="text-xs text-gray-400 uppercase">Penjualan Hari ini</CardTitle>
            </CardHeader>
            <CardContent className="font-bold">     
                <div className="border-b-2 border-b-gray-200 pb-2">
                    <p>180</p>
                </div>
                <div className="mt-1">
                    <p>Rp 2,000,000,00</p>
                </div>
            </CardContent>
        </Card>      
    )
}

export default CardSale;
