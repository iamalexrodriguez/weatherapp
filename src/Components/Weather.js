import React from "react"

const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country && <p className="weather__key">Location: 
            <span className="weather__value"> {props.city}, {props.country}</span>
            </p>
        }
        {
            props.temperature && <p className="weather__key">Temperature: 
                <span className="weather__value"> {props.temperature} ℃ <br/>
                <span className="weather__subvalue"> Min:</span> {props.minTemp}℃  
                <span className="weather__subvalue"> Max:</span> {props.maxTemp}℃ 
                </span>
            </p>
        }
        {
            props.humidity && <p className="weather__key">Humidity: 
            <span className="weather__value"> {props.humidity}</span>
            </p>
        }
        {
            props.description && <p className="weather__key">Conditions: 
            <span className="weather__value"> {props.description}</span>
            </p>
        }
        {
            props.sunrise && <p className="weather__key">Sunrise: 
            <span className="weather__value"> {props.sunrise} am</span>
            </p>
        }
        {
            props.sunset && <p className="weather__key">Sunset: 
            <span className="weather__value"> {props.sunset} pm</span>
            </p>
        }
        {
            props.latitude && <p className="weather__key">Coordinates: <br/>
            <span className="weather__subvalue"> Latitude: </span> <span className="weather__value"> {props.latitude} </span> <br/>
            <span className="weather__subvalue"> Longitude: </span> <span className="weather__value"> {props.longitude}</span>  
            </p>
        }
        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
)

export default Weather;