import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardSale = ({dataSale}) => {
    const formattedPriceSale = dataSale[1].toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });

    return(
        <Card className="px-5 pt-3">
            <CardHeader className= "py-2 px-0">
                <CardTitle className="text-xs text-gray-400 uppercase">Penjualan Hari ini</CardTitle>
            </CardHeader>
            <CardContent className="font-bold px-0">     
                <div className="border-b-2 border-b-gray-200 pb-2">
                    <p>{dataSale[0]}</p>
                </div>
                <div className="mt-1">
                    <p>{formattedPriceSale}</p>
                </div>
            </CardContent>
        </Card>      
    )
}

export default CardSale;
