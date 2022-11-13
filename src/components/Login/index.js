import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Logout from '../Logout'

class Login extends Component {
  onLogin = () => <Logout buttonContent="Logout" />

  render() {
    const {buttonContent} = this.props
    return (
      <>
        <Message msg="Please Login" />
        <button className="button" onClick={this.onLogin}>
          {buttonContent}
        </button>
      </>
    )
  }
}

export default Login
