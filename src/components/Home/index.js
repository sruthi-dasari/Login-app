import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === true) {
      return <Logout buttonContent="Logout" />
    }
    return <Login buttonContent="Login" />
  }

  render() {
    return (
      <div className="bg-container">
        <div className="main-card">{this.renderAuthButton()}</div>
      </div>
    )
  }
}

export default Home
