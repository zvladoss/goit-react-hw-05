import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import s from "./components/Container/Container.module.css";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const MoviesCast = lazy(() => import("./components/MoviesCast/MoviesCast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <Container>
      <Header />
      <div className={s.contentWrapper}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<DetailsPage />}>
              <Route path="cast" element={<MoviesCast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </Container>
  );
};

export default App;
