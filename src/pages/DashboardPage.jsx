import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import CardLimitStock from "@/components/DashboardPage/CardLimitStock";
import CardPie from "@/components/DashboardPage/CardPie";
import CardSale from "@/components/DashboardPage/CardSale";
import CardProfits from "@/components/DashboardPage/CardProfits";
import CardSaleChart from "@/components/DashboardPage/CardSaleChart";
import CardProfitsChart from "@/components/DashboardPage/CardProfitsChart";


const DashboardPage = () => {
    const [dataTransaction, setDataTransaction] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
        const response = await axios.get("http://localhost:3000/api/transaction", {
            headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
            },
        });
        const resData = response.data;
        setDataTransaction(Array.isArray(resData.data) ? resData.data : []);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);
      
    if (loading) return "Loading...";
    if (error) return "Error...";

    const saleToday = dataTransaction.reduce((total, user) => {
        const subtotal = user.items.reduce((sum, item) => sum + item.quantity, 0);
        return total + subtotal;
      }, 0);

    const priceSaleToday = dataTransaction.reduce((total, user) => {
        const subtotal = user.items.reduce((sum, item) => sum + item.price, 0);
        return total + subtotal;
      }, 0);
    
    console.log(saleToday);
    console.log(priceSaleToday);
    
    return (
        <div className="container mx-auto max-sm:px-[3rem]">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold">
                    DASHBOARD
                </h1>
            </section>
            <section className="mt-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <CardSale/>
                <CardSaleChart/>
                <CardProfits/>
                <CardProfitsChart/>
            </section>
            <section className="grid grid-cols-3 gap-5  max-lg:grid-cols-1">
                <CardPie/>
                <CardLimitStock/>
            </section>
        </div>
    )
}

export default DashboardPage;