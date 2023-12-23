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
import LazyLoader from "../../utilitis/LazyLoader";

const Home = () => {
    return (
        <React.Fragment>
            <ScrollToHashElement/>
            <Navigation/>
            <Header/>
            <LazyLoader>
                <About/>
            </LazyLoader>
            <LazyLoader>
                <Skills/>
            </LazyLoader>
            <LazyLoader>
                <Services/>
            </LazyLoader>
            <LazyLoader>
                <Portfolios/>
            </LazyLoader>
            <LazyLoader>
                <Blog/>
            </LazyLoader>
          <LazyLoader>
              <Pricing/>
          </LazyLoader>
           <LazyLoader>
               <Contact/>
           </LazyLoader>
            <LoginModal/>
        </React.Fragment>
    )
}
export default Home;