import About from "../../Components/About";
import Blog from "../../Components/Blog";
import Contact from "../../Components/Contact";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Portfolio from "../../Components/Portfolio";
import Services from "../../Components/Services";
import LoginModal from "../Authentication/LoginModal/LoginModal";

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Blog />
            <Contact />
            <LoginModal />
        </div>
    )
}
export default Home;