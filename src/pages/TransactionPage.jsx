import CardOrderItems from "../components/Cards/CardOrderItems";
import CategorySlider from "../components/CategorySlider";

const TransactionPage = () => {
    return (
        <div className="container mx-auto flex gap-[15px]">
            <section className="mt-3 w-[70%] h-full">
                <CategorySlider/>
            </section>
            <section className="mt-3 w-[30%] h-full">
                <CardOrderItems/>
            </section>
        </div>
    )
}

export default TransactionPage;