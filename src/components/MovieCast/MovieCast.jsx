import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import s from "./MovieCast.module.css";
const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const defaultActorImg =
    "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+image";

  useEffect(() => {
    const getCast = async () => {
      const data = await fetchCastById(movieId);
      setMovieCast(data);
    };
    getCast();
  }, [movieId]);
  return (
    <div className={s.castGallery}>
      <ul className={s.castList}>
        {movieCast.map((cast) => (
          <li key={cast.id} className={s.castItem}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : defaultActorImg
              }
              alt={cast.name}
              className={s.actorImg}
            />
            <h3 className={s.actorName}>{cast.name}</h3>
            <p className={s.role}>{cast.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
