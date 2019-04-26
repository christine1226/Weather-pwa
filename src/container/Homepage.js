import React from 'react'
import axios from 'axios'
import DisplayWeather from './DisplayWeather'
import { withRouter } from 'react-router-dom'
var API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`

class Homepage extends React.Component{
  state = {
    weather: '',
    input: '',
    show: false,
    error: false
  }

  getWeather = (e) => {
    e.preventDefault()
    console.log('we hit')
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&units=imperial&APPID=${API_KEY}`)
    .then(res => this.setState({weather: res.data}, this.setState({
      show: true
    }, console.log(res)))
  ).catch(error => this.setState({
    error: true
  }))

  }

  handleInput = (e) => {
    e.preventDefault()
    let capitalized = e.target.value.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
    console.log(e.target.value)
    this.setState({
      error: false,
      show: false,
      input: capitalized
    })
  }

  render(){
    return(
      <div className='container'>
        <h1>Where in the weather?</h1>
        <form onSubmit={this.getWeather}>
        <input onChange={this.handleInput} value={this.state.input} type='text' placeholder='city'></input>
        <input type='submit' value='submit' />
        </form>
        {this.state.error ? `No results found for ${this.state.input}` : null}
        {this.state.show ? <DisplayWeather data={this.state.weather} /> : null}
        {!this.state.show ? <img src='https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80' alt='' /> : null}
      </div>
    )
  }
}
export default withRouter(Homepage)
