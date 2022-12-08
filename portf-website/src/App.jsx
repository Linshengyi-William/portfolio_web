import React from 'react'

import Header from "./components/headerSection/Header"
import Nav from "./components/navSection/Nav"
import About from "./components/aboutSection/About"
import Experience from "./components/experienceSection/Experience"
import Services from "./components/servicesSection/Services"
import Portfolio from "./components/portfolioSection/Portfolio"
import Testmonials from "./components/testmonialsSection/Testmonials"
import Contact from "./components/contactSection/Contact"
import Footer from "./components/footerSection/Footer"


const app = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            {/* <Experience /> */}
            {/* <Services /> */}
            <Portfolio />
            {/* <Testmonials /> */}
            <Contact />
            {/* <Footer /> */}


        </>
    )
}

export default app
