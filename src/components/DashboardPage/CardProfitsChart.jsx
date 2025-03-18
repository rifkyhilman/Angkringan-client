import { ChartData, ChartConfig } from "@/utils/dataDumy"
import { Bar, BarChart, CartesianGrid } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CardProfitsChart = ({dataProfitSevenday}) => {
    const profitSevenday = dataProfitSevenday - dataProfitSevenday * 0.3;
    const formattedProfitSevenday = profitSevenday.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });
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
                    <BarChart accessibilityLayer data={ChartData}>
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                            cursor={false}
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-white shadow-md p-2 rounded-md border-l-4 border-indigo-200 border-l-indigo-500">
                                            <p className="text-sm font-semibold">{payload[0].payload.month}</p>
                                            <p className="text-blue-500 font-bold">Total: {payload[0].value}</p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Bar dataKey="desktop" fill="#6666ff"/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default CardProfitsChart;