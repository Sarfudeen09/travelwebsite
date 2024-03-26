import "./Trip.css";
import TripData from "./TripData";
import London from "../assets/london.jpg";
import Sydney from "../assets/sydney.jpg";
import Japan from "../assets/japan1.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You Can discover Unique Trips </p>
            <div className="tripcard">
                <TripData 
                image={London}
                heading="Trip in London"
                text="
                London, the iconic capital of the United Kingdom, stands as a global hub of culture, history, and modernity, making it a premier destination for tourists worldwide. 
                With its dazzling array of landmarks, including the Tower of London, Buckingham Palace, and the British Museum, the city showcases a captivating blend of centuries-old history and contemporary vibrancy."
                />
                  <TripData 
                image={Sydney}
                heading="Trip in Sydney"
                text="Sydney, Australia's dazzling harbor city, is a vibrant metropolis renowned for its stunning landscapes, iconic landmarks, and diverse cultural offerings.
                The Sydney Opera House, with its distinctive sail-like architecture, stands as a global symbol of the city and hosts world-class performances."
                />
                  <TripData 
                image={Japan}
                heading="Trip in Japan"
                text="Japan, a captivating archipelago in East Asia, seamlessly weaves together a tapestry of ancient traditions and cutting-edge modernity.
                 Tokyo, the bustling capital, epitomizes the country's technological prowess with its neon-lit skyscrapers and innovative design."/>
            </div>
        </div>
    );
}

export default Trip;