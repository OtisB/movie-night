import "./MovieOfTheDay.css";

function MovieOfTheDay({ movies }) {
  let randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div key={randomMovie.id} className="MovieOfTheDayWrapper">
      <div className="ImageAndTitle">
        <h2>{randomMovie.fieldTitle}</h2>
        <img
          className="MovieOfTheDayImage"
          src={randomMovie.fieldImageQuer}
          alt={randomMovie.fieldTitle}
        />
      </div>
      <div className="SectionWrapper">
        <p>FSK: {randomMovie.fieldFsk}</p>{" "}
        <ul className="RatingWrapper">
          <li className="Rating isRated">&#9734;</li>
          <li className="Rating isRated">&#9734;</li>
          <li className="Rating isRated">&#9734;</li>
          <li className="Rating isRated">&#9734;</li>
          <li className="Rating isRated">&#9734;</li>
        </ul>
        <p>Runtime: {randomMovie.fieldRuntime}</p>
        <p>Production Year: {randomMovie.fieldYearOfPuplication}</p>
      </div>
    </div>
  );
}

export default MovieOfTheDay;
