import { Area, AreaChart, CartesianGrid } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"

const CardSaleChart = ({dataSaleSevenday, dataChartSale}) => {
    const formattedPriceSale = dataSaleSevenday.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });

    const groupedSales = dataChartSale.reduce((acc, transaction) => {
        const date = transaction.createdAt.split("T")[0];
        const { totalPrice } = transaction;
        
        acc[date] = (acc[date] || 0) + totalPrice;
        return acc;
    }, {});

    const formattedData = Object.entries(groupedSales)
        .map(([date, totalPrice]) => ({
            date: date.split("-").reverse().join("-"),
            sale: totalPrice
        }))
        .sort((a, b) => new Date(a.date.split("-").reverse().join("-")) - new Date(b.date.split("-").reverse().join("-")));

    const ChartConfig = {
        color: "#6666ff"
    };
    
    return (
        <Card>
            <CardHeader className="flex-row justify-between">
                <CardTitle className="text-xs text-gray-400 uppercase">penjualan selama 7 hari</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="-mt-[0.5rem] mb-5 px-6 font-bold">
                    <p>{formattedPriceSale}</p>
                </div>
                <ChartContainer config={ChartConfig} className="h-9 w-full">
                    <AreaChart
                    accessibilityLayer
                    data={formattedData}
                    margin={{
                        left: -12,
                        right: -12,
                    }}
                    >
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
                    <Area
                        dataKey="sale"
                        type="natural"
                        fill={ChartConfig.color}
                        fillOpacity={0.4}
                        stroke=" #000099"
                    />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default CardSaleChart;