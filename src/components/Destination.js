import "./Destination.css";
import DestinationData from "./DestinationData";
import Kuala1 from "../assets/kuala1.jpg"
import Kuala2 from "../assets/kuala2.jpg"
import Sing1 from "../assets/singapore1.jpg"
import Sing2 from "../assets/singapore2.jpg"
import Abu1 from "../assets/abu1.jpg"
import Abu3 from "../assets/abu3.jpg"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you th opportuntiy to see a lot, within a time frame </p>

           <DestinationData
           className="first-des"
           
        heading="Kuala Lumpur,Malaysia"

        text="Kuala Lumpur is a dynamic city that seamlessly blends tradition with modernity.
        Whether you're interested in cultural experiences, architectural marvels, or culinary adventures, Kuala Lumpur has something to offer for every traveler.
        Plan your visit to this vibrant city and immerse yourself in the unique charm of Malaysia's capital."

        img1={Kuala1}
        img2={Kuala2}    
       
        />
         <DestinationData
           className="first-des-reverse"
           heading="Singapore"
   
           text="Singapore, with its modern infrastructure, diverse attractions, and culinary delights, offers a unique blend of tradition and innovation.
            Whether you're interested in exploring futuristic gardens, indulging in world-class shopping, or savoring delicious street food, Singapore has something for everyone.
            Plan your visit to this dynamic city-state and immerse yourself in the vibrant energy and sophistication it has to offer."
   
           img1={Sing1}
           img2={Sing2}    
          
           />
           <DestinationData
           className="first-des-third"
           heading="Abu Dhabi,United Arab Emirates"
   
           text="Abu Dhabi, with its blend of modernity and tradition, offers a unique travel experience.
            Whether you're interested in exploring architectural wonders, enjoying luxurious accommodations, or experiencing the beauty of the desert, Abu Dhabi has something for every traveler. 
           Plan your visit to this dynamic city and discover the opulence, culture, and hospitality that make it a captivating destination in the UAE."
           
           img1={Abu1}
           img2={Abu3}    
          
           />
        </div>

    )
}

export default Destination;