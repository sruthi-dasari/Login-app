import {Component} from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import Message from './components/Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === true) {
      return <Logout/>
    }
    return <Login/>
  }

  render() {

    return (
      <div className="bg-container">
        <div className="main-card">{this.renderAuthButton()}</div>
      </div>
    )
}

// const Home = () => {
//   return (
//     <div className="bg-container">
//       <div className="main-card">
//         <Message />
//         <Login />
//       </div>
//     </div>
//   )
// }

export default Home
