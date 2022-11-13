import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {msg} = this.props

    return <h1 className="message">{msg}</h1>
  }
}

export default Message
