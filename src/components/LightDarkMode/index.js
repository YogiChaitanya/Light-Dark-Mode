// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  onClickBtn = () => {
    this.setState(preState => ({
      isClicked: !preState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state

    const btnText = isClicked ? 'Light Mode' : 'Dark Mode'
    const containerBg = isClicked ? 'dark-background' : 'light-background'
    const headingColor = isClicked ? 'heading-dark' : 'heading-light'

    return (
      <div className="bg-container">
        <div className={`card-container ${containerBg}`}>
          <h1 className={headingColor}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickBtn}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
