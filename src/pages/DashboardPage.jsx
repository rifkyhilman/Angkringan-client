import CardLimitStock from "@/components/DashboardPage/CardLimitStock";
import CardPie from "@/components/DashboardPage/CardPie";
import CardSale from "@/components/DashboardPage/CardSale";
import CardProfits from "@/components/DashboardPage/CardProfits";
import CardSaleChart from "@/components/DashboardPage/CardSaleChart";
import CardProfitsChart from "@/components/DashboardPage/CardProfitsChart";


const DashboardPage = () => {
    return (
        <div className="container mx-auto max-sm:px-[3rem]">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold">
                    DASHBOARD
                </h1>
            </section>
            <section className="mt-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <CardSale/>
                <CardSaleChart/>
                <CardProfits/>
                <CardProfitsChart/>
            </section>
            <section className="grid grid-cols-3 gap-5  max-lg:grid-cols-1">
                <CardPie/>
                <CardLimitStock/>
            </section>
        </div>
    )
}

export default DashboardPage;