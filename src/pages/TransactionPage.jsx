import { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import CardProducts from "@/components/TransactionPage/CardProducts";
import CardOrderItems from "@/components/TransactionPage/CardOrderItems";
import CategorySlider from "@/components/TransactionPage/CategorySlider";

 
const TransactionPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [orderItems, setOrderItems] = useState([]);
    const { toast } = useToast();

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
        toast({
            title: (
                <div className="flex items-center gap-2 max-sm:text-xs">
                  <p className="text-green-500">+1</p> 
                  <p><b>{product.name}</b></p>
                  <p>Ditambahkan ke Keranjang</p> 
                </div>
              ),
              duration: 1200,
        });

    };

    const handleDeleteItem = (idProduct, nameProduct) => {
        const updatedItems = orderItems.filter(item => item.idProduct !== idProduct);
        setOrderItems(updatedItems);
        toast({
            variant: "destructive",
            description: `${nameProduct} Dihapus dari Keranjang`,
            duration: 1200,
        });
    };

    const handlePaymentSucces = () => {
        setOrderItems([]);
    }

    return (
        <div className="container mx-auto flex max-sm:flex-col max-sm:px-[3rem]">
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