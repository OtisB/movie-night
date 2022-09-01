function MovieOfTheDay({ movies }) {
  console.log("message" + movies);
  <div className="MovieOfTheDay">
    {movies.length &&
      movies.map((movies) => {
        return (
          <div key={movies.id} className="MovieOfTheDay">
            <p>{movies.fields.title}</p>
            <img
              src={movies.fields.image}
              alt={movies.fieldTitle}
              className="MovieOfTheDayImage"
            />
            <div className="MovieOfTheDayInfoSection">
              <p>{movies.fieldDescription}</p>
              <p>{movies.fieldGenre}</p>
              <p>{movies.fieldRating}</p>
              <p>{movies.fieldRuntime}</p>
              <p>{movies.fieldScreenwriter}</p>
              <p>{movies.fieldYearOfPuplication}</p>
              <p>{movies.fieldCast}</p>
            </div>
          </div>
        );
      })}
  </div>;
}
export default MovieOfTheDay;
