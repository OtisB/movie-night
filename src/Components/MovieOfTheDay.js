import { Link } from 'react-router-dom';
import "./MovieOfTheDay.css";
import Rating from "./Rating";

function MovieOfTheDay({ movies }) {
  let randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <Link to={`/${randomMovie.id}`}>
      <div key={randomMovie.id} className="MovieOfTheDayWrapper">
        <div className="ImageAndTitle">
          <img
            className="MovieOfTheDayImage"
            src={randomMovie.fieldImageQuer}
            alt={randomMovie.fieldTitle}
          />
        </div>
        <div className="SectionWrapper">
          <h2>{randomMovie.fieldTitle}</h2>
          <div className="InfoSectionWrapper">
            <p>FSK: {randomMovie.fieldFsk}</p>{" "}

            <Rating rating={randomMovie.fieldRating} />

            <p>Runtime: {randomMovie.fieldRuntime} min</p>
            <p>Production Year: {randomMovie.fieldYearOfPuplication}</p>
          </div>
        </div>
      </div>
    </Link>
    // <DetailView key={randomMovie.id} randomMovie={randomMovie} />
  );
}

export default MovieOfTheDay;
