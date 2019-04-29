import React from 'react'

export default class WeatherImg extends React.Component{
  state={
    img: ''
  }
  componentDidMount = () => {
    let date = (new Date).getHours()
    console.log(date)

    setTimeout(()=>{
      if(this.props.weather.includes('thunderstorm') && date <= 13){
        this.setState({
          img: 'https://media0.giphy.com/media/cSVkEGjGsWz8k/giphy.gif?cid=3640f6095c899200466b433463ec64e7'
        })
      }
      else if(this.props.weather.includes('rain') && date >= 13){
        this.setState({
          img: 'https://media2.giphy.com/media/EQIkgfMCjs1kk/giphy.gif?cid=3640f6095c89928672346f4f67bfb926'
        })
      }
      else if(this.props.weather === 'clear sky' && date <= 13){
        this.setState({
          img: 'https://media.tenor.com/images/539162268b1dfb04278b1f85bf5d0aab/tenor.gif'
        })
      }
      else if(this.props.weather === 'clear sky' && date >= 13){
        this.setState({
          img: 'https://media.giphy.com/media/PFx5PEKR9ey64/giphy.gif'
        })
      }
      else if(this.props.weather.includes('cloud') && date >= 13){
        this.setState({
          img: 'http://s2.favim.com/orig/28/animation-cartoon-cloud-clouds-gif-Favim.com-238473.gif'
        })
      } else if(this.props.weather.includes('cloud', 'cloudy') && date <= 13){
        this.setState({
          img: 'https://media2.giphy.com/media/pjw5mc8Ze2mH5m5yZ6/giphy.gif?cid=3640f6095c89865b4c6d2f4b59606dee'
        })}
      }, 100)
  }


  render(){

    return(
      <div className='display-img'>
        {this.state.img ? <img src={this.state.img} alt='' /> : null}
      </div>
    )
  }
}
