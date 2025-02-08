import CategorySlider from "@/components/CategorySlider";

const TransactionPage = () => {
    return (
        <div className="container mx-auto flex gap-[15px]">
            <section className="mt-3 w-[70%]">
                <CategorySlider/>
            </section>
            <section className="mt-3 w-[30%] bg-red-600">
                <h1>Hello</h1>
            </section>
        </div>
    )
}

export default TransactionPage;