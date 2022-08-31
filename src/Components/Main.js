import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import DataFetch from "./DataFetch";
import './Main.css';

function Main() {
  const [noData, setNoData] = useState(false);

  const movies = DataFetch();

  useEffect(() => {
    checkForMovies();
  }, []);


  const checkForMovies = () => {
    if (!movies || movies.length === 0) {
      setNoData(true);
    }
  };

  return (
    <div className='main-container'>
      {noData && <div className='no-data-message'>There are no Movies yet!</div>}
      {/* {!noData && <Movie of the Day movies={movies}/>} */}
      {/* {!noData && <SmallCard movies={movies}/>} */}
    </div>
  )
}

export default Main;