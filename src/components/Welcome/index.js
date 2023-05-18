import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  render() {
    return (
      <div className="Cont">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="click" onClick={this.callFunction()}>
          button
        </button>
      </div>
    )
  }
}

export default Welcome
