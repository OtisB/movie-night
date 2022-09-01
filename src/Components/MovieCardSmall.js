import "./MovieCardSmall.css";

function MovieCardSmall({
  id,
  fildImage,
  fieldTitle,
  fieldFsk,
  fieldRuntime,
  fieldRating,
  fieldGenre
}) {



  return (

    <div className="movie-card" key={id}>
      <h3>{fieldTitle}</h3>
      <h3>{fieldFsk}</h3>
      <h3>{fieldRuntime}</h3>
      <h3>{fieldRating}</h3>
    </div>
  );
}

export default MovieCardSmall;
