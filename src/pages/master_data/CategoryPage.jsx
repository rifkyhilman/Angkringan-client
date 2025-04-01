import FilterCategory from "@/components/CategoryPage/FilterCategory";
import TableCategory from "@/components/CategoryPage/TableCategoty";

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
                <TableCategory/>
            </section>
        </div>
    )
}

export default CategoryPage;