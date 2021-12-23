import axios from "axios";
import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DetailFilm() {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
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
    <div className="box-film-detail">
      <div className="box-film">
        <div className="card mb-3" style={{ "max-width": "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={movie.cover}
                className="img-fluid rounded-start"
                alt={movie.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                {genres.map((item) => {
                  return <span className="badge bg-primary">{item}</span>;
                })}
                <p className="card-text">{movie.resume}</p>
                <p className="card-text">{movie.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
