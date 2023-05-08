import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        console.log(`Previous Speed ${prevState.speed}`)
        return {speed: prevState.speed + 10}
      })
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(`Previous Speed ${prevState.speed}`)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="min-max-text">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            className="button accelerate"
            type="submit"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="button breaks"
            type="submit"
            onClick={this.onDecrement}
          >
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
