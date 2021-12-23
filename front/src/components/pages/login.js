import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const login = {
      email: user,
      password: senha,
    };
    axios.post("/auth/login", login).then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/filmes");
    });
  };

  return (
    <div className="box-login">
      <div className="login-content">
        <h2>Login</h2>
        <form className="form-login">
          <div className="input-login">
            <label htmlFor="user">Email:</label>
            <input
              type="text"
              name="user"
              className="box-input-dados"
              required="required"
              onChange={(event) => setUser(event.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-login">
            <label htmlFor="senha">Senha:</label>
            <input
              type="text"
              name="senha"
              className="box-input-dados"
              required="required"
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Senha"
            />
          </div>
          <button onClick={handleSubmit} className="btn-submit-form">
            Entrar
          </button>
          <div className="box-login-cadastrar">
            <h2>
              Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
