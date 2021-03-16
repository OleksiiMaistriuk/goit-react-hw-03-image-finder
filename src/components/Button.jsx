const LoadMoreButton = ({ onFatchImages }) => {
  return (
    <>
      <button onClick={onFatchImages} type="button">
        <span>Load more</span>
      </button>
    </>
  );
};
export default LoadMoreButton;
