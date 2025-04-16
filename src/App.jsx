import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import { fetchImages } from "./components/services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page, { signal });
        if (data.results.length === 0) {
          if (page === 1)
            toast("No images found.", {
              duration: 2500,
            });
          setHasMoreImages(false);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
          if (data.results.length < 12) {
            toast("End of collection.", { duration: 2500 });
            setHasMoreImages(false);
          }
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    return () => controller.abort();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) {
      toast.error("Please enter a valid search term.");
      return;
    }
    setQuery(trimmedQuery);
    setPage(1);
    setImages([]);
    setHasMoreImages(true);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setModalData(image);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && hasMoreImages && (
        <LoadMoreBtn onLoadMore={loadMoreImages} />
      )}
      {modalData && <ImageModal data={modalData} onClose={closeModal} />}
      <Toaster position="top-right" />
    </Container>
  );
};

export default App;
