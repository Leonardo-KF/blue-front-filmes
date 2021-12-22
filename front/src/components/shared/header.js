import React from "react";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

function Header() {
  function LogoutUser() {
    return;
  }

  return (
    <div className="header-page">
      <Link to="/home">
        <h3>FilmFlix</h3>
      </Link>
      <div className="perfil-header-area">
        <div className="perfil-avatar"></div>

        <button onClick={LogoutUser} className="btn-logout">
          <IoLogOutOutline />
        </button>
      </div>
    </div>
  );
}

export default Header;
