// import { Card } from "@/components/ui/card"
import AllIcon from "../assets/img/products/all.png";
import { DataKategori } from "../utils/dataDumy.jsx";
import { Button } from "./ui/button.jsx";
import PropTypes from "prop-types";


const CategorySlider = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="flex gap-5">
            <div>
                <Button className={`mt-[1.4rem] p-0 h-[5rem] bg-white ${selectedCategory === "All" && "drop-shadow-lg"}`} onClick={() => setSelectedCategory("All")}>
                    <div className="h-full">
                        <div className="px-5 pt-3">
                            <img src={AllIcon} className="w-[70px] h-[55px]" alt="Kopi-aren-top"/>
                        </div>
                    </div>
                </Button>
            </div>
            <div className="w-full overflow-x-auto no-scrollbar">
                <div className="grid grid-flow-col grid-cols-3 gap-5 w-max">
                    {DataKategori.map(category => {
                        return (
                            <Button className={`mt-[1.4rem] p-0 h-[5rem] bg-white ${selectedCategory === category.name && "drop-shadow-lg"}`} key={category}  onClick={() => setSelectedCategory(category.name)}  disabled={category.name === "segera hadir"}>
                                <div className="flex h-full items-center">
                                    <div className="pl-6 py-5">
                                        <img src={category.pathImg} className="w-[60px] h-[60px]" alt="Kopi-aren-top"/>
                                    </div>
                                    <div className="pr-6 ml-2 capitalize font-bold text-base">{category.name}</div>
                                </div>
                            </Button> 
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

CategorySlider.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
};

export default CategorySlider;