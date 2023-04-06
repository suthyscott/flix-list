import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import AuthContext from "../store/authContext"
// import Hamburger from "hamburger-react"

const Header = () => {
    const { token, logout } = useContext(AuthContext)
    const [isOpen, setOpen] = useState(false)

    return token ? (
        <nav className="flex justify-end items-center bg-primary mb-2 h-[10vh] ">
            <div
                className={`${
                    isOpen
                        ? "absolute bg-primary w-full top-[10vh] h-[90vh] flex flex-col items-center justify-start"
                        : "hidden"
                }`}
            >
                <NavLink to="/home" onClick={() => setOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/add" onClick={() => setOpen(false)}>
                    Add Flick
                </NavLink>
                <button
                    onClick={() => {
                        setOpen(false)
                        logout()
                    }}
                >
                    Logout
                </button>
            </div>
            <div className="desktop:hidden">
                {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
            </div>
            <div className="reverseDesktop:hidden">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/add">Add Flick</NavLink>
                <button
                    onClick={() => {
                        logout()
                    }}
                >
                    Logout
                </button>
            </div>
        </nav>
    ) : (
        <h2 className="flex justify-center">Welcome to FlixList!</h2>
    )
}

export default Header
