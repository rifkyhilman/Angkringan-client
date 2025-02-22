import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const CardHistory = () => {
    return (
        <>
         <Card className="mt-5">
            <div className="flex justify-between p-5">
                <CardHeader>
                    <CardTitle>
                        Bjirka Sumanto
                    </CardTitle>
                    <div>
                        <p>
                            12/02/2025 
                        </p>
                        <p>
                            01.00 WIB
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="p-0 mt-5">
                        <p>
                            Total : Rp. 15.000,00
                        </p>
                        <p>
                            Uang Tunai : Rp. 20.000,00
                        </p>
                        <p>
                            Kembalian : Rp. 5.000,00
                        </p>
                </CardContent>
                <CardFooter>
                    <div>
                        <Button className="bg-green-700 rounded-md text-white">
                            <FileDown/>
                        </Button>
                    </div>
                </CardFooter>
            </div>
        </Card>
        <Card className="mt-5">
            <div className="flex justify-between p-5">
                <CardHeader>
                    <CardTitle>
                        Bjirka Sumanto
                    </CardTitle>
                    <div>
                        <p>
                            12/02/2025 
                        </p>
                        <p>
                            01.00 WIB
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="p-0 mt-5">
                        <p>
                            Total : Rp. 15.000,00
                        </p>
                        <p>
                            Uang Tunai : Rp. 20.000,00
                        </p>
                        <p>
                            Kembalian : Rp. 5.000,00
                        </p>
                </CardContent>
                <CardFooter>
                    <div>
                        <Button className="bg-green-700 rounded-md text-white">
                            <FileDown/>
                        </Button>
                    </div>
                </CardFooter>
            </div>
        </Card>
      </>
    )
}

export default CardHistory;