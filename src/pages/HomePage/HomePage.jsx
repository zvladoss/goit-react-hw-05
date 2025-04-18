import React, { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchMoviesList } from "../../services/api";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const data = await fetchMoviesList();
        setMoviesList(data);
      } catch (error) {
        setError("Error fetching movies list");
      } finally {
        setLoading(false);
      }
    };
    getMoviesList();
  }, []);

  if (loading) return <Loader />;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Most Popular</h2>
      {moviesList.length > 0 ? (
        <MoviesList moviesList={moviesList} />
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
};

export default HomePage;
