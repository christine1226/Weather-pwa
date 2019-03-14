import React from 'react'
import axios from 'axios'
import DisplayWeather from './DisplayWeather'
import { withRouter } from 'react-router-dom'


class Homepage extends React.Component{
  state = {
    weather: '',
    input: '',
    show: false
  }

  getWeather = (e) => {
    e.preventDefault()
    console.log('we hit')
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&units=imperial&APPID=d7c5a0840876d1cefcf371c90d2cd463`)
    .then(res => this.setState({weather: res.data}, this.setState({
      show: true
    }, console.log(res.data)))
    ).catch(error => console.log('ERROR', error))

  }

  handleInput = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      show: false,
      input: e.target.value
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
        {this.state.show ? <DisplayWeather data={this.state.weather} /> : null}
      </div>
    )
  }
}
export default withRouter(Homepage)
