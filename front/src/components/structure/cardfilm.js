import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CardFilm(props) {
  const [status, setStatus] = useState("❌");
  const [buttoncontent, setButtonContent] = useState("Assistido");

  const [watchMovies, setwatchMovies] = useState([]);

  const getMoviesWatched = async () => {
    await axios
      .get("/user/seeList", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setwatchMovies(response.data);
      });
  };
  if (watchMovies === []) {
    getMoviesWatched();
  }

  const watchMovie = async () => {
    await axios.patch(`/user/addList/${props.id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  };

  console.log(watchMovies);

  if (watchMovies) {
    console.log(watchMovies.length);
    for (let i = 0; i < watchMovies.length; i++) {
      console.log("rodou for");
      if (props.id === watchMovies[i].id) {
        console.log("rodou if");
        setStatus("✅");
        setButtonContent("Não assistido");
      }
    }
  }

  return (
    <div className="card card-films-content" style={{ width: "18rem" }}>
      <Link to={`/filme/${props.id}`}>
        <img src={props.img} className="card-img-top" alt={props.alt} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p>Assistido: {status}</p>
        <button onClick={watchMovie} className="btn btn-primary">
          {buttoncontent}
        </button>
      </div>
    </div>
  );
}

export default CardFilm;
