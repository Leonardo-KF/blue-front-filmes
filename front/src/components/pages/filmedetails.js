import axios from "axios";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailFilm() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const id = useParams().id;

  const getMovie = async () => {
    return await axios.get(`/movie/findUnique/${id}`);
  };
  useEffect(() => {
    getMovie().then((response) => {
      setMovie(response.data);
      setGenres(response.data.genres);
    });
  }, []);

  return (
    <div className="box-film">
      <div class="card mb-3" style={{ "max-width": "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={movie.cover}
              class="img-fluid rounded-start"
              alt={movie.title}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{movie.title}</h5>
              {genres.map((item) => {
                return <span className="badge bg-primary">{item}</span>;
              })}
              <p class="card-text">{movie.resume}</p>
              <p class="card-text">{movie.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
