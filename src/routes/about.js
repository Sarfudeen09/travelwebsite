import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/011.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";



function About (){
    return(
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="About Us"
    btnClass="hide"
   
   />
   <Aboutus/>
   <Footer/>
    </>
    );

}

export default About;