import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home (){
    return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Adventure Starts With You"
    text="Choose Your Favorite Destination."
    buttonText="Travel Plan"
    url=""
    btnClass="show"
   />
   <Destination/>
   <Trip/>
   <Footer/>
  
    
    </>
    )

}

export default Home;