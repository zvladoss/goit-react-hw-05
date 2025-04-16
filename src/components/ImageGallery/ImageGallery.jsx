import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.galleryItem}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
