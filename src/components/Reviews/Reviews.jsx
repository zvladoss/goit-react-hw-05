import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";
import s from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchReviewsById(movieId);
        console.log("Reviews data:", data);
        setMovieReviews(data);
      } catch (error) {
        setError("Failed to load reviews. Please try again later.");
      }
    };
    getReviews();
  }, [movieId]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!movieReviews?.length) {
    return <h2>No reviews available for this film.</h2>;
  }

  return (
    <div className={s.reviewContainer}>
      <ul className={s.reviewList}>
        {movieReviews?.map((review) => (
          <li className={s.reviewItem} key={review.id}>
            <h3 className={s.reviewAuthor}>{review.author}</h3>
            <p className={s.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
