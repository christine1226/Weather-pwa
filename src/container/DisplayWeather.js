import React from 'react'
import WeatherImg from './WeatherImg'
import {withRouter} from 'react-router-dom'

class DisplayWeather extends React.Component{
  state={
    description: ''
  }
  componentDidMount = () =>{
    this.setState({
      description: this.props.data
    })
  }

  render(){
    return(
      <div>
        <h1>{this.props.data.name}</h1>
        {this.props.data ? <WeatherImg weather={this.props.data.weather[0].description}/> : null }

        <p>Conditions: {this.props.data ? this.props.data.weather[0].description : 'No Data Available'}</p>
        <p>Temperature: {this.props.data ? Math.round(this.props.data.main.temp) : 'No Data Available'} degrees</p>
        <p>Temp Lows: {this.props.data ? Math.round(this.props.data.main.temp_min) : 'No Data Available'} degrees</p>
        <p>Max Temp: {this.props.data ? Math.round(this.props.data.main.temp_max) : 'No Data Available'} degrees</p>
        <p>Wind: {this.props.data ? Math.round(this.props.data.wind.speed) : 'No Data Available'}mph</p>
        <p>Visibility: {Math.round((this.props.data.visibility)*0.000621371)} miles</p>
        <a href="3-day-weather">View 3 Day Weather</a>
      </div>
    )
  }
}
export default withRouter(DisplayWeather)
