import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchSearchByQuery } from "../../services/api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [wasSearched, setWasSearched] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const results = await fetchSearchByQuery(query);
        const filtered = results?.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setMovies(filtered || []);
      } catch (error) {
        console.error(error);
        setMovies([]);
      }
    };

    getMovies();
  }, [query]);

  const handleChange = (newQuery) => {
    if (!newQuery.trim()) {
      setSearchParams({});
      setMovies([]);
      setWasSearched(false);
    } else {
      setSearchParams({ query: newQuery });
      setWasSearched(true);
    }
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} />

      {wasSearched && query && movies.length === 0 && (
        <p>No movies found for "{query}"</p>
      )}

      {movies.length > 0 && (
        <MoviesList
          moviesList={movies}
          query={query}
          wasSearched={wasSearched}
        />
      )}
    </div>
  );
};

export default MoviesPage;
