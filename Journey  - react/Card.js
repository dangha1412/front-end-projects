import React from "react"


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl}/>
            <div className="info">
                <div className="location">                    
                    <p className="country"><i className="fa-solid fa-location-dot" ></i>{props.location}</p>
                    <p className="view"><a href={`${props.googleMapsUrl}`}>View on Google Map</a></p>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}