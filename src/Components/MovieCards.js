import { useState, useEffect } from "react";
import MovieCardSmall from "./MovieCardSmall";
import "./MovieCards.css";

function MovieCards({ movies }) {
  const [firstMovieIndex, setFirstMovieIndex] = useState(0);
  const [lastMovieIndex, setLastMovieIndex] = useState(4);
  const [shownMovies, setShownMovies] = useState(movies.slice(firstMovieIndex, lastMovieIndex + 1));

  const shownRange = lastMovieIndex - firstMovieIndex;

  const handleClickPrev = (event) => {
    event.preventDefault();

    if ((firstMovieIndex - shownRange) < 0) {
      setFirstMovieIndex(0);
      setLastMovieIndex(4);
    } else {
      setFirstMovieIndex(firstMovieIndex - shownRange - 1);
      setLastMovieIndex(lastMovieIndex - shownRange - 1);
    }
  };

  const handleClickNext = (event) => {
    event.preventDefault();

    if ((lastMovieIndex + shownRange) > movies.length) {
      setFirstMovieIndex(((movies.length - 1)) - shownRange);
      setLastMovieIndex(movies.length - 1);
    } else {
      setFirstMovieIndex(firstMovieIndex + shownRange + 1);
      setLastMovieIndex(lastMovieIndex + shownRange + 1);
    }
  };

  useEffect(() => {
    setShownMovies(movies.slice(firstMovieIndex, lastMovieIndex + 1));
  }, [firstMovieIndex, lastMovieIndex]);

  return (
    <section id="cards">
      <button onClick={handleClickPrev}>Prev</button>
      <button onClick={handleClickNext}>Next</button>
      <div className="cards-container">
        {shownMovies.map(shownMovie => {
          return (
            <MovieCardSmall {...shownMovie} key={shownMovie.id} />
          )
        })}
      </div>
    </section>
  );
}

export default MovieCards;
