import AllIcon from "@/assets/img/products/all.png";
import { Button } from "@/components/ui/button.jsx";
import PropTypes from "prop-types";


const CategorySlider = ({ selectedCategory, setSelectedCategory, dataCategories }) => {
    return (
        <div className="flex gap-5">
            <div className="max-sm:hidden">
                <Button className={`mt-[1.4rem] p-0 h-[5rem] bg-white ${selectedCategory === "All" && "drop-shadow-lg"}`} onClick={() => setSelectedCategory("All")}>
                    <div className="h-full">
                        <div className="px-5 pt-3">
                            <img src={AllIcon} className="w-[90px] h-[55px] lg:w-[70px]" alt={AllIcon}/>
                        </div>
                    </div>
                </Button>
            </div>
            <div className="w-full overflow-x-auto no-scrollbar">
                <div className="grid grid-flow-col grid-cols-3 gap-5 w-max">
                    <Button className={`mt-[1.4rem] p-0 h-[5rem] hidden max-sm:block bg-white ${selectedCategory === "All" && "drop-shadow-lg"}`} onClick={() => setSelectedCategory("All")}>
                            <div className="flex h-full items-center justify-center">
                                <div className="py-5">
                                    <img src={AllIcon} className="w-[60px] h-[60px]" alt={AllIcon}/>
                                </div>
                            </div>
                    </Button> 
                    {dataCategories.map(category => {
                        return (
                            <Button className={`mt-[1.4rem] p-0 h-[5rem] bg-white ${selectedCategory === category.categoryName && "drop-shadow-lg"}`} key={category}  onClick={() => setSelectedCategory(category.categoryName)}  disabled={category.categoryName === "segera hadir"}>
                                <div className="flex h-full items-center">
                                    <div className="pl-6 py-5">
                                        <img src={category.pictureURL} className="w-[60px] h-[60px]" alt="Gambar kategori"/>
                                    </div>
                                    <div className="pr-6 ml-2 capitalize font-bold text-base">{category.categoryName}</div>
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
    dataCategories: PropTypes.func.isRequired
};

export default CategorySlider;