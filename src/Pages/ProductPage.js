import Products from "../Components/Products";
import Services from "../Components/Products";
import Footer from "../Components/Static/Footer";
import Navbar from "../Components/Static/Navbar";
import "../App.css"

function ProductPage(){
    return(
        <div>
            <Navbar />
            <Products />
            <Footer />
        </div>
    )
}
export default ProductPage