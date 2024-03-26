import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/001.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
       
       />
       <ContactForm/>
       <Footer/>
        </>
    );

}

export default Contact;