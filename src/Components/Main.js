//import { Link } from "react-router-dom";
import useDataFetch from "./useDataFetch";
import MovieOfTheDay from "./MovieOfTheDay";
import MovieCards from "./MovieCards";
import "./Main.css";

function Main() {
  const movies = useDataFetch();
  console.log("main");

  const checkForMovies = () => {
    return !movies || movies.length === 0 ? false : true;
  };

  return (
    <div className="main-container">
      {!checkForMovies() && (
        <div className="no-data-message">There are no Movies yet!</div>
      )}
      {checkForMovies() && <MovieOfTheDay movies={movies} />}
      {checkForMovies() && <div>Yay, Movies!</div>}

      {checkForMovies() && <MovieCards movies={movies} />}
    </div>
  );
}

export default Main;
