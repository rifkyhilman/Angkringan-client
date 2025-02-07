import { Pie, PieChart } from "recharts"
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
    
    const chartData = [
        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)", color: "hsl(var(--chart-1))"},
        { browser: "safari", visitors: 200, fill: "var(--color-safari)", color: "hsl(var(--chart-2))"},
        { browser: "firefox", visitors: 187, fill: "var(--color-firefox)", color: "hsl(var(--chart-3))"},
        { browser: "edge", visitors: 173, fill: "var(--color-edge)", color: "hsl(var(--chart-4))"},
        { browser: "other", visitors: 90, fill: "var(--color-other)", color: "hsl(var(--chart-5))"},
      ];

    const chartConfig = {
        visitors: {
          label: "Visitors",
        },
        chrome: {
          label: "Chrome",
          color: "hsl(var(--chart-1))",
        },
        safari: {
          label: "Safari",
          color: "hsl(var(--chart-2))",
        },
        firefox: {
          label: "Firefox",
          color: "hsl(var(--chart-3))",
        },
        edge: {
          label: "Edge",
          color: "hsl(var(--chart-4))",
        },
        other: {
          label: "Other",
          color: "hsl(var(--chart-5))",
        },
      }; 
    
    return (
    <Card className="flex flex-col my-5 col-span-2">
        <CardHeader className="border-b-2 border-b-gray-200">
          <CardTitle className="text-md font-bold">PENJUALAN PRODUK SELAMA 1 BULAN</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0 mt-[4rem] mb-[4rem]">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
            <div className="leading-none text-muted-foreground mb-2 uppercase">
                januari - februari 2025
            </div>
            <div className="flex items-center gap-2 font-medium leading-none">
                {chartData.map(data => {
                    return(
                        <div key={data.browser} className="flex mr-2">
                            <div className={`bg-[${data.color}] w-3 h-auto mr-1`}></div>
                            <p>{data.browser}</p>
                        </div>
                    )}
                )}
            </div>
        </CardFooter>
    </Card>
    )
}

export default CardPie;