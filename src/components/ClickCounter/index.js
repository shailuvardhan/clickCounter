import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickedButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="title">
            The button has been clicked <span className="count">{count}</span>{' '}
            times
          </h1>
          <p className="para">Click the button to increase the count</p>
          <button type="button" onClick={this.onClickedButton} className="btn">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
