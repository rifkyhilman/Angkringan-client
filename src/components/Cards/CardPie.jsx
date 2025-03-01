import { Pie, PieChart } from "recharts"
import { ChartDataPie, ChartConfigPie } from "@/utils/dataDumy"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart" 

const CardPie = () => {    
    return (
      <Card className="flex flex-col my-5 col-span-2">
          <CardHeader className="border-b-2 border-b-gray-200">
            <CardTitle className="text-md font-bold">PENJUALAN PRODUK SELAMA 1 BULAN</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0 mt-[4rem] mb-[4rem]">
            <ChartContainer
              config={ChartConfigPie}
              className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={ChartDataPie} dataKey="visitors" label nameKey="browser" />
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
              <div className="leading-none text-muted-foreground mb-2 uppercase">
                  januari - februari 2025
              </div>
          </CardFooter>
      </Card>
    )
}

export default CardPie;