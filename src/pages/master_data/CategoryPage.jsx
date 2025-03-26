import FilterCategory from "@/components/CategoryPage/FilterCategory";

const CategoryPage = () => {
    return (
        <div className="container mx-auto max-sm:px-[3rem]">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold uppercase">
                    Kategori
                </h1>
            </section>
            <section>
                <FilterCategory/>
            </section>
        </div>
    )
}

export default CategoryPage;