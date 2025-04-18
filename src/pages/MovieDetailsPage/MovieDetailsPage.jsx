import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state || "/movies");

  useEffect(() => {
    console.log("useEffect triggered");
    const getMovieDetail = async () => {
      const data = await fetchMovieById(movieId);
      console.log("Movie data:", data);
      setMovieDetail(data);
    };
    getMovieDetail();
  }, [movieId]);

  if (!movieDetail) return <Loader />;

  return (
    <div className={s.detailsWrapper}>
      <Link to={goBackLink.current} className={s.backLink}>
        Go back
      </Link>
      <div className={s.movieInfo}>
        <img
          src={
            movieDetail.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`
              : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"
          }
          alt={movieDetail.title}
          className={s.poster}
        />
        <div className={s.movieDescr}>
          <h1 className={s.infoTitle}>{movieDetail.title}</h1>
          <p className={s.title}>Popularity: {movieDetail.popularity}</p>
          <h2>Overview</h2>
          <p className={s.title}>{movieDetail.overview}</p>
          <div className={s.genres}>
            <h3>Genres</h3>
            <p>{movieDetail.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
      </div>
      <div className={s.navLink}>
        <NavLink to="cast" className={s.link}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={s.link}>
          Reviews
        </NavLink>
      </div>
      <div className={s.outlet}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
