import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Process from "../Components/Process";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

export default function Home () { 
    return ( 
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Process />
            <CTA />
            <Footer />
        </div>
    )
}