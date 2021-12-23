import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cadastro() {
  const navigate = useNavigate();

  function returnLogin() {
    navigate("/login");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, birthday, senha, confirmsenha, image } = event.target;
    const data = {
      name: name.value,
      email: email.value,
      birthdate: birthday.value,
      password: senha.value,
      passwordConfirmation: confirmsenha.value,
      imageUrl: image.value,
    };
    if (senha.value !== confirmsenha.value) {
      alert("As senhas não são iguais.");
    } else {
      await axios.post("user/create", data).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <div className="box-cadastro">
      <h2>Cadastro</h2>
      <form className="form-cadastro" onSubmit={handleSubmit}>
        <div className="input-cadastro">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            className="box-input-dados"
            required="required"
            placeholder="Nome"
          />
        </div>
        <div className="input-cadastro">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            name="email"
            className="box-input-dados"
            required="required"
            placeholder="Seu melhor e-mail"
          />
        </div>
        <div className="input-cadastro">
          <label htmlFor="birthday">Data de Nascimento:</label>
          <input
            type="date"
            name="birthday"
            className="box-input-dados"
            required="required"
          />
        </div>
        <div className="input-cadastro">
          <label htmlFor="senha">Senha:</label>
          <input
            type="text"
            name="senha"
            className="box-input-dados"
            required="required"
            placeholder="Senha"
          />
        </div>
        <div className="input-cadastro">
          <label htmlFor="confirmsenha">Confirme sua Senha:</label>
          <input
            type="text"
            name="confirmsenha"
            className="box-input-dados"
            required="required"
            placeholder="Confirme sua Senha"
          />
        </div>
        <div className="input-cadastro">
          <label htmlFor="image">Foto URL:</label>
          <input
            type="text"
            name="image"
            className="box-input-dados"
            required="required"
            placeholder="URL da foto"
          />
        </div>
        <div className="button-form">
          <button type="submit" className="btn-submit-form">
            Cadastrar
          </button>
        </div>
        <div className="button-form">
          <button onClick={returnLogin} className="btn-submit-form">
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
