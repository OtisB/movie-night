import { useParams } from "react-router-dom";
import useDataFetch from "./useDataFetch";
import './DetailView.css';
import Rating from './Rating';

function DetailView() {

    const { id } = useParams();
    const movies = useDataFetch();

    const currentMovie = movies.find(movie => id == movie.id);

    //console.log(currentMovie.fieldDirectors);
    return (
        <>
            {currentMovie && <article key={currentMovie.id} className="detail-view-container">
                <figure>
                    <figcaption><h2>{currentMovie.fieldTitle}</h2></figcaption>
                    <img
                        className="detail-view-image"
                        src={currentMovie.fieldImageQuer}
                        alt={currentMovie.fieldTitle}
                    />
                </figure>
                <div className="detail-view-info">
                    <p>FSK: {currentMovie.fieldFsk}</p>
                    <p>Rating: <Rating rating={currentMovie.fieldRating} /></p>
                    <p>Runtime: {currentMovie.fieldRuntime} Minutes</p>
                    <p>Production Year: {currentMovie.fieldYearOfPuplication}</p>
                    <p>Directors: {currentMovie.fieldDirectors}</p>
                    <p>Actors: {currentMovie.fieldCast}</p>
                    <p>Screenwriter: {currentMovie.fieldScreenwriter}</p>
                    <div className="description">
                        {currentMovie.fieldDescription}
                    </div>
                </div>
            </article>}
        </>
    );
}

export default DetailView;