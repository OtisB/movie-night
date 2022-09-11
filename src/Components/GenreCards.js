import "./GenreCards.css";
import MovieCardSmall from "./MovieCardSmall";
import Header from "./Header";
import Footer from "./Footer";
import useDataFetch from "./useDataFetch";
import { useParams } from "react-router-dom";

export default function GenreCards() {
  const { genre } = useParams();
  const movies = useDataFetch();
  let genreMovies = [];

  const checkForMovies = () => {
    if (genre === 'all') genreMovies = movies;
    else genreMovies = movies.filter(movie => movie.fieldGenre.toLowerCase() === genre);

    return genreMovies;
  };

  return (
    <>
      <Header />
      <section className="genre-section">
        <div className="genre-cards-row">
          {checkForMovies() && genreMovies.length ? genreMovies.map(movie => <MovieCardSmall {...movie} key={movie.id} />) : <h2>Nothing to Show, so far!</h2>}
        </div>
      </section>
    </>
  )
}

