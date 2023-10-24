import Services from "../../Components/Services/Services";
import Footer from "../../SharedComp/Footer/Footer";
import Navbar from "../../SharedComp/Navbar/Navbar";
import About from "./About";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;