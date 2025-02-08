import CardLimitStock from "@/components/CardLimitStock";
import CardPie from "@/components/CardPie";
import CardSale from "@/components/CardSale";
import CardProfits from "@/components/CardProfits";
import CardSaleChart from "@/components/CardSaleChart";

const DashboardPage = () => {
    return (
        <div className="container mx-auto">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold">
                    DASHBOARD
                </h1>
            </section>
            <section className="mt-8 grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-md:grid-cols-3">
                <CardSale/>
                <CardProfits/>
                <CardSaleChart/>
                <CardSale/>
            </section>
            <section className="grid grid-cols-3 gap-6  max-md:grid-cols-1">
                <CardPie/>
                <CardLimitStock/>
            </section>
        </div>
    )
}

export default DashboardPage;