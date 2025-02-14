import CardLimitStock from "../components/Cards/CardLimitStock";
import CardPie from "../components/Cards/CardPie";
import CardSale from "../components/Cards/CardSale";
import CardProfits from "../components/Cards/CardProfits";
import CardSaleChart from "../components/Cards/CardSaleChart";
import CardProfitsChart from "../components/Cards/CardProfitsChart";


const DashboardPage = () => {
    return (
        <div className="container mx-auto">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold">
                    DASHBOARD
                </h1>
            </section>
            <section className="mt-8 grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2">
                <CardSale/>
                <CardSaleChart/>
                <CardProfits/>
                <CardProfitsChart/>
            </section>
            <section className="grid grid-cols-3 gap-5  max-md:grid-cols-1">
                <CardPie/>
                <CardLimitStock/>
            </section>
        </div>
    )
}

export default DashboardPage;