import CardLimitStock from "@/components/CardLimitStock";
import CardPie from "@/components/CardPie";
import CardSale from "@/components/CardSale";

const DashboardPage = () => {
    return (
        <div className="container mx-auto">
            <section>
                <p>Halaman</p>
                <h1 className="font-bold">
                    DASHBOARD
                </h1>
            </section>
            <section className="mt-8 grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-md:grid-cols-3">
                <CardSale/>
                <CardSale/>
                <CardSale/>
                <CardSale/>
            </section>
            <section className="grid grid-cols-2 gap-6">
                <CardPie/>
                <CardLimitStock/>
            </section>
        </div>
    )
}

export default DashboardPage;