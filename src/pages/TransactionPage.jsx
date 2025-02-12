import CardProducts from "@/components/Cards/CardProducts";
import CardOrderItems from "../components/Cards/CardOrderItems";
import CategorySlider from "../components/CategorySlider";

 
const TransactionPage = () => {
    return (
        <div className="container mx-auto flex max-sm:flex-col">
            <section className="mt-3 mr-7 w-[70%] h-full max-sm:h-[20%] max-sm:w-full">
                <CategorySlider/>
                <CardProducts/>
            </section>
            <section className="mt-3 w-[30%] h-full max-sm:h-0 max-sm:w-full">
                <CardOrderItems/>
            </section>
        </div>
    )
}

export default TransactionPage;