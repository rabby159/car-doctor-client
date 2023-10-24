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
            <Footer></Footer>
        </div>
    );
};

export default Home;