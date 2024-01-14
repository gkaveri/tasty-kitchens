/*import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>0</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter*/

import {Component} from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>{this.state.count}</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
