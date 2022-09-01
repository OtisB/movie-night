import { client } from "../client";
import { useEffect, useState } from "react";

function DataFetch() {
  const [Movies, setMovies] = useState([]);
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
  console.log("ich bin movies useState", Movies);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await client.getEntries({ content_type: "movieNight" });
      const rasponseData = response.items;
      console.log("ich bin unsaubere Daten" + response.items);
      cleanUpData(rasponseData);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    Movies,
    setMovies,
  };
  // <div className="test">
  //   {Movies.length &&
  //     Movies.map((movie) => {
  //       return (
  //         <div key={movie.id}>
  //           <p>{movie.fieldTitle}</p>
  //           <img src={movie.fieldImage} alt={movie.fieldTitle} />
  //           <p>{movie.fieldDescription}</p>
  //           <p>{movie.fieldGenre}</p>
  //           <p>{movie.fieldRating}</p>
  //           <p>{movie.fieldRuntime}</p>
  //           <p>{movie.fieldScreenwriter}</p>
  //           <p>{movie.fieldYearOfPuplication}</p>
  //           <p>{movie.fieldCast}</p>
  //         </div>
  //       );
  //     })}
  // </div>
}

export default DataFetch;