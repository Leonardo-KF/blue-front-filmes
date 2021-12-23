import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Perfil() {
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  const [user, setUser] = useState("");
  const getUser = async () => {
    const user = await axios.get("/auth/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setUser(user.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  function Viewedfilms() {
    navigate("/filmesAssistidos");
  }

  return (
    <div className="box-perfil-content">
      <div className="box-perfil">
        <div className="box-avatar">
          <img
            src={user.imageUrl}
            id="avatar-img"
            alt="avatar usuario"
            width="300"
            height="300"
          />
        </div>
        <div className="box-dados-content">
          <div className="box-dados">
            <label>Nome:</label>
            <h2>{user.name}</h2>
          </div>
          <div className="box-dados">
            <label>E-mail:</label>
            <h2>{user.email}</h2>
          </div>
          <div className="box-dados">
            <label>Data de nascimento:</label>
            <h2>{user.birthdate}</h2>
          </div>
          <div className="box-dados">
            <button onClick={Viewedfilms}>Filmes assistidos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
