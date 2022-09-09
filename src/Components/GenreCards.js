import "./GenreCards.css";
import MovieCardSmall from "./MovieCardSmall";
import Header from "./Header";
import Footer from "./Footer";
import useDataFetch from "./useDataFetch";
import { useParams }from "react-router-dom";

export default function GenreCards(){
    const { id } = useParams();
    const movies = useDataFetch();
    let genreMovies = [];

  const checkForMovies = (g) => {
    genreMovies = movies.filter(movie => movie.fieldGenre.toLowerCase() === g);
    return genreMovies;
  };

  return (
    <div>
        <Header />
        <div className="genre-container">
        {checkForMovies(id)&&genreMovies.length? genreMovies.map(movie => <MovieCardSmall {...movie} key={movie.id}/>):<h2>Nothing to Show, so far!</h2>}
        </div>
    </div>
  )
}

