import { React, useState, useEffect } from "react";
import axios from "axios";
import CardFilm from "../structure/cardfilm";
import { useNavigate } from "react-router-dom";

function Viewedfilms() {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  const [watchMovies, setwatchMovies] = useState([]);

  const getMoviesWatched = async () => {
    return await axios.get("/user/seeList", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  };
  useEffect(() => {
    getMoviesWatched()
      .then((response) => {
        setwatchMovies(response.data);
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  console.log(watchMovies);

  if (watchMovies.length === 0) {
    return (
      <div className="all-films-content">
        <h4 className="message-films">Nenhum filme assistido ainda!!</h4>
      </div>
    );
  } else {
    return (
      <div className="all-films-content">
        {watchMovies.map((movie) => {
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
}

export default Viewedfilms;
