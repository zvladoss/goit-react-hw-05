import s from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;

  return (
    <div className={s.imageCard} onClick={() => openModal(image)}>
      <img src={urls.small} alt={alt_description || "Image from Unsplash"} />
    </div>
  );
};

export default ImageCard;
