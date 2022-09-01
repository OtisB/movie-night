import { Link } from 'react-router-dom';
import DataFetch from "./DataFetch";
import './Main.css';

function Main() {

  const movies = DataFetch();   //DataFetch is used as custom hook!
  console.log('main');

  const checkForMovies = () => {
    return (!movies || movies.length === 0) ? false : true;
  };

  return (
    <div className='main-container'>
      {!checkForMovies() && <div className='no-data-message'>There are no Movies yet!</div>}
      {checkForMovies() && <div>Yay, Movies!</div>}
      {/* {checkForMovies() && <Movie of the Day movies={movies}/>} */}
      {/* {checkForMovies() && <SmallCard movies={movies}/>} */}
    </div>
  )
}

export default Main;