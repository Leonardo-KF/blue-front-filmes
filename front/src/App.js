import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import Login from "./components/pages/login";
import Cadastro from "./components/pages/cadastro";
import Home from "./components/pages/home";
import Allfilms from "./components/pages/allfilms";
import FilmDetail from "./components/pages/filmedetails";
import Perfil from "./components/pages/perfil";
import Viewedfilms from "./components/pages/viewedfilms";
import axios from "axios";

axios.defaults.baseURL = "https://streaming-api-1.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/filmes" element={<Allfilms />} />
          <Route path="/filme/:id" element={<FilmDetail />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/filmesAssistidos" element={<Viewedfilms />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
