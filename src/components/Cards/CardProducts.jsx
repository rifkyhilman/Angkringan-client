import { DataProducts } from "@/utils/dataDumy"
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"

const CardProducts = ({ selectedCategory}) => {
    const filteredProducts = selectedCategory === "All" ? DataProducts
      : DataProducts.filter((product) => product.categoryProduct === selectedCategory);

    return (
        <div className="grid grid-cols-3 gap-5 py-8 mb-5 mt-5 border-y-4 border-y-gray-300 max-h-[50.6rem] overflow-x-auto no-scrollbar max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filteredProducts.map((product) => {
                return (
                    <Card className="flex flex-col items-center" key={product.idProduct}>
                        <CardHeader className="border-b-2 border-b-gray-300">
                            <CardTitle className="text-md capitalize">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center mt-4">
                            <img src={product.imgPath} className="h-[140px] mb-5" />
                            <h1>Rp. {product.price}</h1>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-3xl text-xs px-5 py-2.5 text-center">Masuk Keranjang</Button>
                        </CardFooter>
                    </Card>   
                )}
            )}
              
        </div>
    )
}

CardProducts.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        idProduct: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        categoryProduct: PropTypes.string.isRequired,
        imgPath: PropTypes.element.isRequired,
        price: PropTypes.string.isRequired
      })
    ).isRequired,
  };

export default CardProducts;