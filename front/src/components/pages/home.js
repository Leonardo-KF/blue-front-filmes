import { useState, useEffect, React } from "react";
import axios from "axios";

function Home() {
  const [Movies, setMovies] = useState([]);

  async function getMovies() {
    return await axios.get("/movie/findMany");
  }

  useEffect(() => {
    getMovies().then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="home-page-start">
      <div>
        <h4>Os melhores filmes você encontra aqui!!</h4>
      </div>
    </div>
  );
}

export default Home;
