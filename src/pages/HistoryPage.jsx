import CardHistory from "@/components/Cards/CardHistory";
import FilterHistory from "@/components/FilterHistory";

const UsersPage = () => {
    return (
        <div className="container mx-auto max-sm:px-[3rem]">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold">
                    History Transaksi
                </h1>
            </section>
            <section>
                <FilterHistory/>
                <CardHistory/>
            </section>
        </div>
    )
}

export default UsersPage;
