import React from "react";
import About from "../../Components/About";
import Blog from "../../Components/Blog";
import Contact from "../../Components/Contact";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Portfolios from "../../Components/Portfolios";
import Services from "../../Components/Services";
import LoginModal from "../Authentication/LoginModal/LoginModal";
import ScrollToHashElement from "../../Components/HashLink";
import Skills from "../../Components/Skills";
import Pricing from "../../Components/Pricing";

const Home = () => {
    return (
        <React.Fragment>
            <ScrollToHashElement />
            <Navigation />
            <Header />
            <About />
            <Skills />
            <Services />
            <Portfolios />
            <Blog />
            <Pricing/>
            <Contact />
            <LoginModal />
        </React.Fragment>
    )
}
export default Home;