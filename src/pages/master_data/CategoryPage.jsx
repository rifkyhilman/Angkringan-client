import axios from "axios";
import { useEffect, useState, useCallback } from "react";

import FilterCategory from "@/components/CategoryPage/FilterCategory";
import TableCategory from "@/components/CategoryPage/TableCategoty";
import LoaderSpinner from "@/components/LoaderSpinner";
import NetError from "@/components/NetError";

const CategoryPage = () => {
    const [dataCategories, setDataCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get("http://localhost:3000/api/category", {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('Token')}`,
                },
            });
            const resData = response.data;
            setDataCategories(Array.isArray(resData.data) ? resData.data : []);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);


    if (loading) return <LoaderSpinner/>;
    if (error) return <NetError/>;

    return (
        <div className="container mx-auto max-sm:px-[3rem]">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold uppercase">
                    Kategori
                </h1>
            </section>
            <section>
                <FilterCategory setDataCategories={setDataCategories}/>
                <TableCategory dataCategories={dataCategories} setDataCategories={setDataCategories}/>
            </section>
        </div>
    )
}

export default CategoryPage;