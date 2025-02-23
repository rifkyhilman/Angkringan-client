import { DataHistory } from "@/utils/dataDumy";
import { Button } from "@/components/ui/button";
import { FileSearch, Printer } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
 } from "@/components/ui/dialog"


const CardHistory = () => {
    return (
        DataHistory.map((sale) => {
         return (
            <Card className="mt-5" key={sale.idHistory}>
                <div className="flex justify-between max-sm:flex-col">
                    <CardHeader>
                        <CardTitle>
                            {sale.customerName}
                        </CardTitle>
                        <div className="text-sm">
                            <p>
                                {sale.dateSale}
                            </p>
                            <p>
                                01:00 WIB
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="mt-[3.20rem] text-base">
                            <p>{sale.invoice}</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Dialog>
                            <DialogTrigger>
                                <Button className="w-full text-green-600 border-2 border-green-600 hover:text-white hover:bg-green-700 focus:ring-green-300 focus:outline-none text-sm px-5 py-2.5 mt-6 text-center"> 
                                    <FileSearch/>
                                    Detail
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="p-0">
                                <DialogHeader className="p-5 border-b-2 border-b-gray-300">
                                    <DialogTitle>Pembayaran Tunai</DialogTitle>
                                </DialogHeader>
                                <div className="px-10 py-5">
                                    <div className="bg-gray-200 mb-7 p-4 rounded-md dark:text-black">
                                        <div className="flex justify-between border-b-2 border-b-gray-300 py-5 px-3">
                                            <p>Total : </p>
                                            <p>Ytim</p>
                                        </div>
                                        <div className="text-end text-green-600 py-5 px-3">
                                            <p>Kembalian : Ytim</p>
                                        </div>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <div className="flex justify-between w-full p-5 border-t-2 border-t-gray-300">
                                        <DialogClose asChild>
                                            <Button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 rounded-3xl text-xs px-5 py-2.5 text-center"
                                            >
                                                Batal
                                            </Button>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center"
                                            >
                                                <Printer/>
                                                Cetak
                                            </Button>
                                        </DialogClose>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardFooter>
                </div>
            </Card>
            )}
        )
    )
}

export default CardHistory;