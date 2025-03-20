import axios from "axios";
import { useEffect, useState, useCallback } from "react";

import CardLimitStock from "@/components/DashboardPage/CardLimitStock";
import CardPie from "@/components/DashboardPage/CardPie";
import CardSale from "@/components/DashboardPage/CardSale";
import CardProfits from "@/components/DashboardPage/CardProfits";
import CardSaleChart from "@/components/DashboardPage/CardSaleChart";
import CardProfitsChart from "@/components/DashboardPage/CardProfitsChart";
import LoaderDashboard from "@/components/DashboardPage/LoaderDashboard.jsx";
import NetError from "@/components/NetError";
import { promise } from "zod";


const DashboardPage = () => {
    const [todayTransaction, setTodayTransaction] = useState([]);
    const [sevendayTransaction, setSevendayTransaction] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const [responseToday, responseSevenday] = await Promise.all([
                axios.get("http://localhost:3000/api/transaction/today", {
                    headers: {Authorization: `Bearer ${localStorage.getItem('Token')}`},
                }),
                axios.get("http://localhost:3000/api/transaction/sevenday", {
                    headers: {Authorization: `Bearer ${localStorage.getItem('Token')}`},
                }),
            ]);
            const resDataToday = responseToday.data;
            const resDataSevenday = responseSevenday.data;
            setTodayTransaction(Array.isArray(resDataToday.data) ? resDataToday.data : []);
            setSevendayTransaction(Array.isArray(resDataSevenday.data) ? resDataSevenday.data : []);
        } catch (err) {
            console.error(err)
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    const priceSaleToday = todayTransaction.reduce((sum, item) => sum + item.totalPrice, 0);
    const priceSaleSevenday = sevendayTransaction.reduce((sum, item) => sum + item.totalPrice, 0);
    const saleToday = todayTransaction.reduce((total, user) => {
        const subtotal = user.items.reduce((sum, item) => sum + item.quantity, 0);
        return total + subtotal;
      }, 0);

    if (loading) return <LoaderDashboard/>;
    if (error) return <NetError/>;
    return (
        <div className="container mx-auto max-sm:px-[3rem]">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold">
                    DASHBOARD
                </h1>
            </section>
            <section className="mt-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <CardSale dataSaleToday={[saleToday, priceSaleToday]}/>
                <CardProfits dataProfitToday={priceSaleToday}/>
                <CardSaleChart dataSaleSevenday={priceSaleSevenday} dataChartSale={sevendayTransaction}/>
                <CardProfitsChart dataProfitSevenday={priceSaleSevenday} dataChartProfit={sevendayTransaction}/>
            </section>
            <section className="grid grid-cols-3 gap-5  max-lg:grid-cols-1">
                <CardPie/>
                <CardLimitStock/>
            </section>
        </div>
    )
}

export default DashboardPage;