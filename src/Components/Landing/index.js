import Navbar from '../Static/Navbar'
import Footer from '../Static/Footer';
import Products from '../Services';
import Header from '../Header';
import ProductLanding from '../ProductLanding';
import Contact from '../Static/Contact';
import ServiceLanding from '../ServiceLanding';
export default function Landing() {
    return(
        <div>
            <Navbar />
            <Header />
            {/* <About/> */}
            <ProductLanding />
            <ServiceLanding />
            
            <Contact />  
            <Footer />


         
                   </div>
    )
}
