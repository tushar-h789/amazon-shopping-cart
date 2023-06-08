import React, { useContext } from "react";
import Logo from "../../images/Logo.svg";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <nav className="header-nav">
      <img src={Logo} alt="" />

      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button onClick={handleSignOut}>Log Out</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>

      {user?.email && <p>Welcome, {user.email} </p>}
    </nav>
  );
};

export default Header;
