import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {running: false, timer: 25, seconds: 59.9}

  incClicked = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  decClicked = () => {
    this.setState(prevState => ({
      timer: prevState.timer - 1,
    }))
  }

  reset = () => {
    clearInterval(this.timerId)
    this.setState({timer: 25, seconds: 59.9, running: false})
  }

  timerStart = () => {
    this.setState(prevState => {
      const {running} = prevState
      return {
        running: !running,
      }
    })
  }

  tick = () => {
    this.setState(prevState => {
      if (Math.floor(prevState.seconds) === 0) {
        ;({timer: prevState.timer - 1, seconds: 59.9})
      } else {
        ;({seconds: prevState.seconds - 1})
      }
    })
  }

  render() {
    const {running, timer, seconds} = this.state
    if (running) {
      this.timerId = setInterval(this.tick, 1000)
    } else {
      clearInterval(this.timerId)
    }
    return (
      <div className="bg-container">
        <h1 className="heading"> Digital Timer </h1>
        <div className="game-con">
          <div className="up-card">
            <div className="timer-con">
              <p className="timer" id="timer">
                {timer}:
                {Math.floor(seconds) === 59
                  ? '00'
                  : Math.floor(seconds) > 9
                  ? Math.floor(seconds)
                  : '0' + Math.floor(seconds)}
              </p>
              <p className="status"> {running ? 'Running' : 'Paused'} </p>
            </div>
          </div>
          <div className="down-card">
            <div className="btn-container">
              <div className="btn">
                <button
                  className="pause-btn"
                  type="button"
                  onClick={this.timerStart}
                >
                  {running ? (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                      className="icon-img"
                    />
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                      className="icon-img"
                    />
                  )}
                </button>
                <p className="extra"> {running ? 'Pause' : 'Start'} </p>
              </div>
              <div className="btn">
                <button
                  className="pause-btn"
                  type="button"
                  onClick={this.reset}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="icon-img"
                  />
                </button>
                <p className="extra"> Reset </p>
              </div>
            </div>
            <p className="extra-1"> Set Timer limit </p>
            <div className="inc-dec">
              {running === false ? (
                <button
                  className="inc-dec-btn"
                  type="button"
                  onClick={this.decClicked}
                >
                  -
                </button>
              ) : (
                <button className="inc-dec-btn" type="button">
                  -
                </button>
              )}
              <p className="inc-dec-val"> {timer} </p>
              {running === false ? (
                <button
                  className="inc-dec-btn"
                  type="button"
                  onClick={this.incClicked}
                >
                  +
                </button>
              ) : (
                <button className="inc-dec-btn" type="button">
                  +
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
