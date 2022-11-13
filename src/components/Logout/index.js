import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Message from '../Message'

class Logout extends Component {
  onLogout = () => <Login buttonContent="Login" />

  render() {
    const {buttonContent} = this.props
    return (
      <>
        <Message msg="Welcome User" />
        <button className="button" onClick={this.onLogout}>
          {buttonContent}
        </button>
      </>
    )
  }
}

export default Logout
