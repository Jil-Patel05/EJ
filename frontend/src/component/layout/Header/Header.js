import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Header.css'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Header = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const {isAuthenticated,user } = useSelector(
    (state) => state.user
  );
  const Routing = () => {
    if(user.role=='admin')
      return (
        <>
          <NavLink className="dropdown-item" to="/admin/dashboard"><DashboardIcon/>-Dashboard </NavLink>
        </>
      );
    else {
      return (
        <>

        </>
      );
    }
  }
  const Change = () => {
    dispatch(logout());
    alert.success("logout successfully")
    navigate('/');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">JP<span>Zone</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">Search</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Cart</NavLink>
            </li> */}
            {isAuthenticated ?
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img
                    className="speedDialIcon"
                    src={user.avatar.url ? user.avatar.url : "https://www.pngitem.com/pimgs/m/9-93862_my-account-account-vector-icon-png-transparent-png.png"}
                    alt="Profile"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <Routing/>
                  <NavLink className="dropdown-item" to="/account"><PersonIcon/>-My Account</NavLink>
                  <NavLink className="dropdown-item" to="/cart"><ShoppingCartIcon/>-Cart</NavLink>
                  <NavLink className="dropdown-item" to="/orders"><ListAltIcon/>-Orders</NavLink>
                  <button className="dropdown-item" onClick={Change} > <ExitToAppIcon/>-Logout</button>
                </div>
              </li>
              :
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Account</NavLink>
              </li>
            }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;