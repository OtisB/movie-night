import MovieCardSmall from "./MovieCardSmall";
import "./MovieCards.css";

function MovieCards({ movies }) {
  //console.clear();
  // console.log(movies);

  let firstMovieIndex = 0;
  let lastMovieIndex = 4;
  // For Prev and next Buttons
  const shownRange = lastMovieIndex - firstMovieIndex;

  const shownMovies = movies.slice(firstMovieIndex, lastMovieIndex + 1); // + 1 is cut off

  return (
    <div className="cards-container">
      {shownMovies.map(movie => {
        console.log(movie);
        return (
          <MovieCardSmall {...movie} key={movie.id} />
        )
      })}
    </div>
  );
}

export default MovieCards;
