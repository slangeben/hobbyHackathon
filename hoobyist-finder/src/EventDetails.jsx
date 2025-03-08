import "./App.css"
import "./index.css"
export default function EventDetails({imgSrc, eventName, time, location, description}) {

    return (
      <>
        <img src={imgSrc} alt={`${eventName} Image`} style={{width: "100vw", height:'40vh'}} />
        <h1>{eventName}</h1>
        <h2>{time}</h2>
        <h2>Location: {location}</h2>
        <br/>
        <h2>Event Description:</h2>
        <p>{description}</p>

        <button onClick={()=> {
            alert("You have clicked a button")
        }}
        >Book</button>
      </>
    )
}