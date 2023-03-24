import { useContext } from "react"
import { NavLink } from "react-router-dom"
import AuthContext from "../store/authContext"

const Header = () => {
    const { token, logout } = useContext(AuthContext)
    return (
        <div>
            {token ? (
                <div>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/add">Add Flick</NavLink>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            ) : (
                <h2>Welcome to FlixList!</h2>
            )}
        </div>
    )
}

export default Header
