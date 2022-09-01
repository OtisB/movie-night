import { client } from "../client";
import { useEffect, useState } from "react";

function useDataFetch() {
  const [movies, setMovies] = useState([]);

  const cleanUpData = (unCleanData) => {
    const cleanData = unCleanData.map((field) => {
      const { sys, fields } = field;
      const { id } = sys;
      const fieldTitle = fields.title;
      const fieldImage = fields.image.fields.file.url;
      const fieldDescription = fields.description;
      const fieldRuntime = fields.runtime;
      const fieldFsk = fields.fsk;
      const fieldGenre = fields.genre;
      const fieldDirectors = fields.directors;
      const fieldCast = fields.cast;
      const fieldScreenwriter = fields.screenwriter;
      const fieldYearOfPuplication = fields.yearOfPuplication;
      const fieldRating = fields.rating;
      const fieldId = fields.id;
      const updatedField = {
        id,
        fieldTitle,
        fieldImage,
        fieldDescription,
        fieldRuntime,
        fieldFsk,
        fieldGenre,
        fieldDirectors,
        fieldCast,
        fieldScreenwriter,
        fieldYearOfPuplication,
        fieldRating,
        fieldId,
      };
      return updatedField;
    });
    setMovies(cleanData);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await client.getEntries();
      const responseData = response.items;
      cleanUpData(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);

  return movies;

  // return (
  //   <div className="test">
  //     {movies.length &&
  //       movies.map((movie) => {
  //         return (
  //           <>
  //             <div key={crypto.randomUUID()}>
  //               <p>{movie.fieldTitle}</p>
  //               <img src={movie.fieldImage} alt={movie.fieldTitle} />
  //               <p>{movie.fieldDescription}</p>
  //               <p>{movie.fieldGenre}</p>
  //               <p>{movie.fieldRating}</p>
  //               <p>{movie.fieldRuntime}</p>
  //               <p>{movie.fieldScreenwriter}</p>
  //               <p>{movie.fieldYearOfPuplication}</p>
  //               <p>{movie.fieldCast}</p>
  //               <p>{movie.fieldRuntime}</p>
  //             </div>
  //           </>
  //         );
  //       })}
  //   </div>
  // );

  //
}
export default useDataFetch;
