import { useState } from "react";
import CardProducts from "@/components/Cards/CardProducts";
import CardOrderItems from "@/components/Cards/CardOrderItems";
import CategorySlider from "@/components/CategorySlider";

 
const TransactionPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [orderItems, setOrderItems] = useState([]);

    const handleAddToOrder = (product) => {
        setOrderItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.idProduct === product.idProduct);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.idProduct === product.idProduct
                        ? { ...item, quantity: (item.quantity || 1) + 1, price: item.price + product.price }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });    
    };

    const handleDeleteItem = (idProduct) => {
        const updatedItems = orderItems.filter(item => item.idProduct !== idProduct);
        setOrderItems(updatedItems);
    };

    const handlePaymentSucces = () => {
        setOrderItems([]);
    }

    return (
        <div className="container mx-auto flex max-sm:flex-col">
            <section className="mt-3 mr-7 w-[70%] h-full max-sm:h-[20%] max-sm:w-full">
                <CategorySlider selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <CardProducts selectedCategory={selectedCategory} onAddToOrder={handleAddToOrder}/>
            </section>
            <section className="mt-3 w-[30%] h-full max-sm:h-0 max-sm:w-full">
                <CardOrderItems orderItems={orderItems} onDeleteItem={handleDeleteItem} onPayment={handlePaymentSucces}/>
            </section>
        </div>
    )
}

export default TransactionPage;