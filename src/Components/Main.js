import useDataFetch from "./useDataFetch";
import MovieOfTheDay from "./MovieOfTheDay";
import MovieCards from "./MovieCards";
import "./Main.css";

function Main() {
  const movies = useDataFetch();

  const checkForMovies = () => {
    return !movies || movies.length === 0 ? false : true;
  };

  return (
    <div className="main-container">
      {!checkForMovies() && (
        <div className="no-data-message">There are no Movies yet!</div>
      )}
      {checkForMovies() && <MovieOfTheDay movies={movies} />}

    </div>
  );
}

export default Main;
