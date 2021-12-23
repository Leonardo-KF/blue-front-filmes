import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
  function LogoutUser() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const [user, setUser] = useState();

  const button = (
    <button onClick={LogoutUser} className="btn-logout">
      <IoLogOutOutline />
    </button>
  );

  let token = localStorage.getItem("token");

  return (
    <div className="header-page">
      <Link className="header-name" to="/">
        <h3>FilmFlix</h3>
      </Link>
      <button onClick={LogoutUser} className="btn-logout">
        <IoLogOutOutline size="30" />
      </button>
    </div>
  );
}

export default Header;
