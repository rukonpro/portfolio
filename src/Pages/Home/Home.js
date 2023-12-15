import React from "react";
import About from "../../Components/About";
import Blog from "../../Components/Blog";
import Contact from "../../Components/Contact";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Portfolio from "../../Components/Portfolio";
import Services from "../../Components/Services";
import LoginModal from "../Authentication/LoginModal/LoginModal";
import ScrollToHashElement from "../../Components/HashLink";
import Skills from "../../Components/Skills";

const Home = () => {
    return (
        <React.Fragment>
            <ScrollToHashElement/>
            <Navigation/>
            <Header/>
            <About/>
            <Skills/>
            <Services/>
            <Portfolio/>
            <Blog/>
            <Contact/>
            <LoginModal/>
        </React.Fragment>
    )
}
export default Home;