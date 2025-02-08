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

const CardProfitsChart = () => {
    const chartData = [
        { month: "Senin", desktop: 186 },
        { month: "Selasa", desktop: 305 },
        { month: "Rabu", desktop: 237 },
        { month: "Kamis", desktop: 73 },
        { month: "Jum'at", desktop: 209 },
        { month: "Sabtu", desktop: 214 },
        { month: "Minggu", desktop: 310 },
      ]
      const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
      }
    return (
        <Card>
            <CardHeader className="flex-row justify-between">
                <CardTitle className="text-xs text-gray-400 uppercase">penjualan selama 7 hari</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="-mt-[0.5rem] mb-5 px-6 font-bold">
                    <p>Rp 13,000,000,00</p>
                </div>
                <ChartContainer config={chartConfig} className=" h-11 w-[16.5rem] -mb-[10px]">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)"/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default CardProfitsChart;