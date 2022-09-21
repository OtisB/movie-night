import { useParams } from "react-router-dom";
import useDataFetch from "./useDataFetch";
import './DetailView.css';
import Rating from './Rating';
import Error from "./Error";

function DetailView() {

    const { id } = useParams();
    const movies = useDataFetch();

    const currentMovie = movies.find(movie => id == movie.id);

    const listOf = (arr) => {
        let i = 0;
        const arrLength = arr.length;
        arr = arr.map(item => {
            if (i < arrLength) {
                item += ', ';
            }
            i++;
            return item;
        });

        return arr;
    };

    return (
        <section className="detail-section">
            {currentMovie !== undefined ? <article key={currentMovie.id} className="detail-view-container">

                <img
                    className="detail-view-image"
                    src={currentMovie.fieldImageQuer}
                    alt={currentMovie.fieldTitle}
                />

                <div className="detail-view-info">
                    <h2>{currentMovie.fieldTitle}</h2>
                    <p>Rating: <Rating rating={currentMovie.fieldRating} /></p>
                    <p>Genre: {currentMovie.fieldGenre}</p>
                    <p>Runtime: {currentMovie.fieldRuntime} Minutes</p>
                    <p>FSK: {currentMovie.fieldFsk}</p>
                    <p>Production Year: {currentMovie.fieldYearOfPuplication}</p>
                    <p>Directors: {listOf(currentMovie.fieldDirectors)}</p>
                    <p>Actors: {listOf(currentMovie.fieldCast)}</p>
                    <p>Screenwriter: {currentMovie.fieldScreenwriter}</p>
                    <div className="description">
                        {currentMovie.fieldDescription}
                    </div>
                </div>
            </article> : <Error text='Something went wrong!' />}
        </section>
    );
}

export default DetailView;