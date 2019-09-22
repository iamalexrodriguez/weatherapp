import React from "react";
import Titles from "./Components/Titles"
import Form from "./Components/Form"
import Weather from "./Components/Weather"
const API_KEY = "8c656c00806a03b43d836d08c16d0f77"

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        minTemp: undefined,
        maxTemp: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    convertEpoch = (epoch, shift) => {  
        let epochConv = new Date( (epoch + shift) *1000)
        let epochHours= epochConv.getUTCHours() 
        let epochMinutes = epochConv.getUTCMinutes()
        return(epochHours + ":" + epochMinutes)
    }

    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        const data = await API_CALL.json()
        console.log(data)

        if (city && country) {
            let sunriseTime = data.sys.sunrise
            let sunsetTime = data.sys.sunset
            let timezone = data.timezone

            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                minTemp: data.main.temp_min,
                maxTemp: data.main.temp_max,
                sunrise: this.convertEpoch(sunriseTime, timezone),
                sunset: this.convertEpoch(sunsetTime, timezone),
                latitude: data.coord.lat,
                longitude: data.coord.lon,
                error: ""
            })
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                minTemp: undefined,
                maxTemp: undefined,
                sunrise: undefined,
                sunset: undefined,
                latitude: undefined,
                longitude: undefined,
                error: "Please enter the values"
            })
        }

    }


    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather} />
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        minTemp={this.state.minTemp}
                                        maxTemp={this.state.maxTemp}
                                        sunrise={this.state.sunrise}
                                        sunset={this.state.sunset}
                                        latitude={this.state.latitude}
                                        longitude={this.state.longitude}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





export default App;
