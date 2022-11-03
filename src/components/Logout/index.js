import './index.css'
import Login from './components/Login'
import Message from './components/Message'

const Logout = () => {

    onLogout = () =>{
        <Login/>
    }

    return (
        <Message msg = "Welcome User"/>
        <button className = "button" onClick = "onLogout">Logout</button>
    )
}

export default Logout