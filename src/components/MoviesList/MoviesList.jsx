import { Link, useLocation } from "react-router-dom";
import s from "./MoviesList.module.css";

const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  const defaultImage =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  const getPosterUrl = (path) =>
    path ? `https://image.tmdb.org/t/p/w500/${path}` : defaultImage;
  if (!moviesList || moviesList.length === 0) {
    return <p>No movies available.</p>;
  }

  return (
    <div className={s.gallery}>
      <ul className={s.list}>
        {moviesList.map((movie) => (
          <li key={movie.id} className={s.item}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <img
                src={getPosterUrl(movie.poster_path)}
                alt={movie.title}
                className={s.poster}
              />
              <p className={s.title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
