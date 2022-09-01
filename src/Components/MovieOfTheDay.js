import "./MovieOfTheDay.css";

function MovieOfTheDay({ movies }) {
  let randomMovie = movies[Math.floor(Math.random() * movies.length)];

  console.log(randomMovie);
  return (
    <div key={randomMovie.id} className="MovieOfTheDay">
      <p>{randomMovie.fieldTitle}</p>
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
