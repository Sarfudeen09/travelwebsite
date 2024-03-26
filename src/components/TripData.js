import "./Trip.css";

function TripData(props){
    return(
        <div className="t-card">
            <div clasName="t-image">
                <img clasName="t-image" src={props.image} alt="cardsimage"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );

    
}

export default TripData;