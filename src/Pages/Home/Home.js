import React from "react";
import About from "../../Components/About/About";
import Blog from "../../Components/Blogs/Blog";
import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigatons/Navigation";
import Portfolios from "../../Components/Portfolios/Portfolios";
import Services from "../../Components/Services/Services";
import ScrollToHashElement from "../../Helpers/HashLink";
import Skills from "../../Components/Skills/Skills";
import Pricing from "../../Components/Pricing/Pricing";
import LazyLoader from "../../Helpers/LazyLoader";
import ContactModal from "../../Components/Contacts/ContactModal";
import ContactContainer from "../../Components/Contacts/ContactContainer";
import Footer from "../../Components/Footer/Footer";
import Certifications from "../../Components/Certifications/Certifications";

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
                <Certifications/>
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
              <ContactModal/>
          </LazyLoader>
           <LazyLoader>
               <ContactContainer/>
           </LazyLoader>
           <Footer/>
        </React.Fragment>
    )
}
export default Home;