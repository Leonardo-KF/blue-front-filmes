import { useState, useEffect, React } from "react";
import CardFilm from "../structure/cardfilm";
import axios from "axios";

function AllFilms() {
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
    <div className="all-films-content">
      {Movies.map((movie) => {
        return (
          <CardFilm
            img={movie.cover}
            alt={movie.title}
            title={movie.title}
            id={movie.id}
            key={movie.id}
          />
        );
      })}
    </div>
  );
}

export default AllFilms;
