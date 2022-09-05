import { useParams } from "react-router-dom";
import useDataFetch from "./useDataFetch";
import './DetailView.css';
import Rating from './Rating';

function DetailView() {

    const { id } = useParams();
    const movies = useDataFetch();

    const currentMovie = movies.find(movie => id == movie.id);

    return (
        <>
            {currentMovie && <article key={currentMovie.id} className="detail-view-container">
                <figure>
                    <figcaption><h2>{currentMovie.fieldTitle}</h2></figcaption>
                    <img
                        className="detail-view-image"
                        src={currentMovie.fieldImage}
                        alt={currentMovie.fieldTitle}
                    />
                </figure>
                <div className="detail-view-info">
                    <p>Runtime: {currentMovie.fieldFsk}</p>
                    <p>Rating: <Rating rating={currentMovie.fieldRating} /></p>
                    <p>Runtime: {currentMovie.fieldRuntime}</p>
                    <p>Production Year: {currentMovie.fieldYearOfPuplication}</p>
                </div>
            </article>}
        </>
    );
}

export default DetailView;