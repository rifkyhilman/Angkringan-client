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

const CardProfitsChart = () => {
    return (
        <Card>
            <CardHeader className="flex-row justify-between">
                <CardTitle className="text-xs text-gray-400 uppercase">laba bersih selama 7 hari</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="-mt-[0.5rem] mb-5 px-6 font-bold">
                    <p>Rp 13,000,000,00</p>
                </div>
                <ChartContainer config={ChartConfig} className=" h-10 w-full -mb-[10px]">
                    <BarChart accessibilityLayer data={ChartData}>
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