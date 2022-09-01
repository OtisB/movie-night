function MovieOfTheDay({ movies }) {
  let randomMovie = movies[Math.floor(Math.random() * movies.length)];
  console.log(randomMovie);
  return (
    <div className="MovieOfTheDay">
      {randomMovie.map((movie) => {
        return (
          <div key={movie.id} className="MovieOfTheDay">
            <p>{movie.fieldTitle}</p>
            <img
              src={movie.fieldImage}
              alt={movie.fieldTitle}
              className="MovieOfTheDayImage"
            />
            <div className="MovieOfTheDayInfoSection">
              <p>{movie.fieldDescription}</p>
              <p>{movie.fieldGenre}</p>
              <p>{movie.fieldRating}</p>
              <p>{movie.fieldRuntime}</p>
              <p>{movie.fieldScreenwriter}</p>
              <p>{movie.fieldYearOfPuplication}</p>
              <p>{movie.fieldCast}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieOfTheDay;
