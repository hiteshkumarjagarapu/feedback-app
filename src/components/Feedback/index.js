import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isValue: false}

  onState = () => this.setState({isValue: true})

  firstText = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg2">
        <h1>How satisfied are you with our customer support performance</h1>
        <ul>
          {emojis.map(e => (
            <li key={e.id}>
              <button type="button" onClick={this.onState}>
                <img src={e.imageUrl} alt={e.name} />
                <br />
                <span>{e.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thanksText = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="t">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>

        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isValue} = this.state

    return (
      <div>
        <div className="bg">
          {isValue ? this.thanksText() : this.firstText()}
        </div>
      </div>
    )
  }
}
export default Feedback
