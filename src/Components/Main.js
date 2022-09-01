
import { Link } from 'react-router-dom';
import useDataFetch from "./useDataFetch";
import './Main.css';
import MovieOfTheDay from "./MovieOfTheDay";

function Main() {

  const movies = useDataFetch();   //DataFetch is used as custom hook!
  console.log('main:', movies);


  const checkForMovies = () => {
    return !movies || movies.length === 0 ? false : true;
  };

  return (
    <div className="main-container">
      {!checkForMovies() && (
        <div className="no-data-message">There are no Movies yet!</div>
      )}
      {checkForMovies() && <div>Yay, Movies!</div>}
      {/* {checkForMovies() && <Movie of the Day movies={movies}/>} */}
      {/* {checkForMovies() && <SmallCard movies={movies}/>} */}
      <MovieOfTheDay />
    </div>
  );
}

export default Main;
