import "./navbar.css";
import {BrowserRouter, Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout =  (e) => {
    dispatch({type:"LOGOUT"})
    localStorage.removeItem("user")
  
}
  const handleLogin = (e) => { 
    navigate("/login")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}} >
        <span className="logo">Hotel Booking</span>
        </Link>
       {user ? 
       (<>
       <div>{user.email}</div>
       <button className="navLogout" onClick={handleLogout}>Logout</button>
       </>) : 
       ( <div className="navItems">
          <button className="navButton">Register</button>
          <button onClick={handleLogin} className="navButton">Login</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
