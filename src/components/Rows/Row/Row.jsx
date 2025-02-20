import { useEffect, useState } from "react";
import Instance from "../../../utils/Axios";
import styles from "./Row.module.css";
import movietrailer from "movie-trailer";
import YouTube from "react-youtube";

// eslint-disable-next-line react/prop-types
function Row({ title, fetchUrl, isSmall }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    Instance.get(fetchUrl).then((res) => setmovies(res.data.results));
  }, [fetchUrl]);
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movietrailer(
        movie?.title + "trailer" || movie?.name || movie?.original_name || ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className={styles.single_row_container}>
      <div className={styles.banner_title}>
        <h1>{title}</h1>
      </div>
      <div
        className={`${styles.movie_row} ${
          isSmall ? styles.isSmall : styles.isLarge
        }`}
      >
        {movies?.map((singleMovie) => (
          <>
            <div>
              <img
                src={BaseUrl + singleMovie.poster_path}
                alt=""
                onClick={() => handleClick(singleMovie)}
              />
            </div>
          </>
        ))}
      </div>
      <div className={styles.YouTube}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}
export default Row;
