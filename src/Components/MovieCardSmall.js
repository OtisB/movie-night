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

  //split title
  let mainTitle = fieldTitle;
  let additionalTitle;
  if (mainTitle.includes(" - ")) {
    const titleParts = mainTitle.split(' - ');
    mainTitle = titleParts[0];
    additionalTitle = titleParts[1];
  }

  return (

    <div className="movie-card" key={id}>
      <h3>{mainTitle}</h3>
      <h4>{additionalTitle}</h4>
      <p>{fieldFsk}</p>
      <p>{fieldRuntime}</p>
      <p>{fieldRating}</p>
    </div>
  );
}

export default MovieCardSmall;
