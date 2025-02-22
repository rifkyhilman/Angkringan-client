import FilterHistory from "@/components/FilterHistory";

const UsersPage = () => {
    return (
        <div className="container mx-auto">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold">
                    History Transaksi
                </h1>
            </section>
            <section>
                <FilterHistory/>
            </section>
        </div>
    )
}

export default UsersPage;
