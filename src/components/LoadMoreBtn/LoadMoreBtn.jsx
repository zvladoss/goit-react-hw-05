import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoadMore, disabled }) => {
  return (
    <button
      className={s.loadMoreButton}
      onClick={onLoadMore}
      disabled={disabled}
    >
      Load more
    </button>
  );
};
export default LoadMoreBtn;
