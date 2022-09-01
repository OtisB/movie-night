import "./MovieOfTheDay.css";

function MovieCards({ movies }) {
  console.clear();

  return (
    <div className="cards-container">
      {movies.map(movie => {
        //console.log(movie);
        return (
          // replace with MovieCard
          <div className="movie-card" key={movie.id}>
            <h3>Test</h3>
            <h3>{movie.fieldTitle}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default MovieCards;
