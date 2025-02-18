import { useState } from "react";
import CardProducts from "@/components/Cards/CardProducts";
import CardOrderItems from "../components/Cards/CardOrderItems";
import CategorySlider from "../components/CategorySlider";

 
const TransactionPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [orderItems, setOrderItems] = useState([]);

    const handleAddToOrder = (product) => {
        setOrderItems((prevItems) => [...prevItems, product]);
      };

    const handleDeleteItem = (idProduct) => {
        const updatedItems = orderItems.filter(item => item.idProduct !== idProduct);
        setOrderItems(updatedItems);
    };

    return (
        <div className="container mx-auto flex max-sm:flex-col">
            <section className="mt-3 mr-7 w-[70%] h-full max-sm:h-[20%] max-sm:w-full">
                <CategorySlider selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <CardProducts selectedCategory={selectedCategory} onAddToOrder={handleAddToOrder}/>
            </section>
            <section className="mt-3 w-[30%] h-full max-sm:h-0 max-sm:w-full">
                <CardOrderItems orderItems={orderItems} onDeleteItem={handleDeleteItem}/>
            </section>
        </div>
    )
}

export default TransactionPage;