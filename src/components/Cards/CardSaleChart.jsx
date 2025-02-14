import { ChartData, ChartConfig } from "@/utils/dataDumy"
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
  ChartTooltipContent,
} from "@/components/ui/chart"

const CardSaleChart = () => {
    return (
        <Card>
            <CardHeader className="flex-row justify-between">
                <CardTitle className="text-xs text-gray-400 uppercase">penjualan selama 7 hari</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="-mt-[0.5rem] mb-5 px-6 font-bold">
                    <p>Rp 13,000,000,00</p>
                </div>
                <ChartContainer config={ChartConfig} className="h-9 w-full">
                    <AreaChart
                    accessibilityLayer
                    data={ChartData}
                    margin={{
                        left: -12,
                        right: -12,
                    }}
                    >
                    <CartesianGrid vertical={false} />
            
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="#0000ff"
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