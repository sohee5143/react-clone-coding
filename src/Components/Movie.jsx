import "../index.css";

function Movie({ data }) {
  return (
    <div className="movieBox">
      <img src={data.poster_path} className="imageBox"></img>
      <div className="infoBox">
        <div className="title">{data.title}</div>
        <div className="rate">{data.vote_average}</div>
      </div>
    </div>
  );
}

export default Movie;
