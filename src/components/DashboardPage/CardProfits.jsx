import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardProfits = ({dataProfitToday}) => {
    const profitToday = dataProfitToday - dataProfitToday * 0.3;
    const formattedProfitToday = profitToday.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });
    return (
        <Card className="px-5 pt-3">
            <CardHeader className= "py-2 px-0">
                <CardTitle className="text-xs text-gray-400 uppercase">Laba Bersih Hari ini</CardTitle>
            </CardHeader>
            <CardContent className="font-bold px-0">     
                <div className="mt-3 text-base">
                    <p>{formattedProfitToday}</p>
                </div>
            </CardContent>
        </Card>      
    )
}

export default CardProfits;