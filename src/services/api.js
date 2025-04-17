import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODgzOGExZGUzYWY3MDZlYzZkM2YwODM3NzQ2OWNhYyIsIm5iZiI6MTczMzIzMzg2Mi43NTYsInN1YiI6IjY3NGYwY2M2NTI5ODg2ODQ2NGI4YThmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Hbpt_K77bfwy2aHOnwwb_jHYmQwRlOSY9C7IkZyYWs",
  },
};
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchMoviesList = async () => {
  const { data } = await axios.get(
    "trending/movie/day?language=en-US",
    options
  );

  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`, options);
  return data;
};

export const fetchCastById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, options);
  return data.cast;
};

export const fetchReviewsById = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, options);
  return data.results;
};

export const fetchSearchByQuery = async (query) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&page=1`,
    options
  );
  return data.results;
};
