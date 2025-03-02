import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardProfits = () => {
    return (
        <Card className="px-5 pt-3">
            <CardHeader className= "py-2 px-0">
                <CardTitle className="text-xs text-gray-400 uppercase">Laba Bersih Hari ini</CardTitle>
            </CardHeader>
            <CardContent className="font-bold px-0">     
                <div className="mt-3 text-base">
                    <p>Rp 1,600,000,00</p>
                </div>
            </CardContent>
        </Card>      
    )
}

export default CardProfits;