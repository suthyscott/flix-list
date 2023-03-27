import { useContext } from "react"
import { NavLink } from "react-router-dom"
import AuthContext from "../store/authContext"

const Header = () => {
    const { token, logout } = useContext(AuthContext)
    return (token ? (
                <nav className="border border-blue-700 flex justify-center">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/add">Add Flick</NavLink>
                    <button onClick={() => logout()}>Logout</button>
                </nav>
            ) : (
                <h2 className="flex justify-center">Welcome to FlixList!</h2>
            )
    )
}

export default Header
