import "./MovieCardSmall.css";

function MovieCardSmall({
  id,
  fieldImage,
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
      <div className="card-image-container">
        <img
          src={fieldImage}
          alt={fieldTitle}
        />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{mainTitle}</h2>
          <h4>{additionalTitle}</h4>
        </div>
        <div className="card-text">
          <p>FSK: {fieldFsk}</p>
          <p>Runtime: {fieldRuntime} min</p>
        </div>
        <div className="rating-container">
          {fieldRating}</div>
      </div>
    </div>
  );
}

export default MovieCardSmall;
