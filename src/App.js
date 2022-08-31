import "./App.css";
import { client } from "./client";
import { useEffect, useState } from "react";

function App() {
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
      cleanUpData(rasponseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
