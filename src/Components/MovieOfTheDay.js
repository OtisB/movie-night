import "./MovieOfTheDay.css";

function MovieOfTheDay({ movies }) {
  let randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div key={randomMovie.id} className="MovieOfTheDay">
      <h2>{randomMovie.fieldTitle}</h2>
      <div className="MovieOfTheDayWrapper">
        <img
          className="MovieOfTheDayImage"
          src={randomMovie.fieldImage}
          alt={randomMovie.fieldTitle}
        />
        <div className="InfoSection">
          <p>Runtime: {randomMovie.fieldFsk}</p>
          <p>Rating: {randomMovie.fieldRating}</p>
          <p>Runtime: {randomMovie.fieldRuntime}</p>
          <p>Production Year: {randomMovie.fieldYearOfPuplication}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieOfTheDay;
