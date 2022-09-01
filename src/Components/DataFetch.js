import { client } from "../client";
import { useEffect, useState } from "react";

function useDataFetch() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await client.getEntries();
      const responseData = response.items;
      setMovies(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(Movies);

  // return (
  //   <div className="test">
  //     {Movies.length &&
  //       Movies.map((movie) => {
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
