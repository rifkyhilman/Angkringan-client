import { ChartConfig } from "@/utils/dataDumy"
import { Bar, BarChart, CartesianGrid } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip
} from "@/components/ui/chart"

const CardProfitsChart = ({dataProfitSevenday, dataChartProfit}) => {
    const today = new Date().toISOString().split("T")[0];
    const profitSevenday = dataProfitSevenday - dataProfitSevenday * 0.3;
    const formattedProfitSevenday = profitSevenday.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });

    // Kelompokkan transaksi berdasarkan tanggal & totalin penjualan per hari
    const groupedSales = dataChartProfit.reduce((acc, transaction) => {
        const date = transaction.createdAt.split("T")[0];
        const { totalPrice } = transaction;
        
        acc[date] = (acc[date] || 0) + totalPrice;
        return acc;
    }, {});

    // Ubah jadi array biar bisa dipakai di chart
    const formattedData = Object.entries(groupedSales)
        .map(([date, totalPrice]) => ({
            date: date.split("-").reverse().join("-"),
            profit: totalPrice - totalPrice * 0.3,
        }))
        .sort((a, b) => new Date(a.date.split("-").reverse().join("-")) - new Date(b.date.split("-").reverse().join("-")));

    return (
        <Card>
            <CardHeader className="flex-row justify-between">
                <CardTitle className="text-xs text-gray-400 uppercase">laba bersih selama 7 hari</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="-mt-[0.5rem] mb-5 px-6 font-bold">
                    <p>{formattedProfitSevenday}</p>
                </div>
                <ChartContainer config={ChartConfig} className=" h-10 w-full -mb-[4px]">
                    <BarChart accessibilityLayer data={formattedData}>
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                            cursor={false}
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-white shadow-md p-2 rounded-md border-l-4 border-indigo-200 border-l-indigo-500">
                                            <p className="text-sm font-semibold">Tgl : {payload[0].payload.date}</p>
                                            <p className="text-blue-500 font-bold">Total : Rp. {payload[0].value.toLocaleString()}</p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Bar
                            dataKey="profit"
                            fill="#6666ff"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default CardProfitsChart;