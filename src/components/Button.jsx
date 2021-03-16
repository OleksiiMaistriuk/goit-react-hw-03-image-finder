import PropTypes from 'prop-types';
const LoadMoreButton = ({ onFatchImages }) => {
  return (
    <>
      <button className="loadMoreButton" onClick={onFatchImages} type="button">
        <span>Load more</span>
      </button>
    </>
  );
};
export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onFatchImages: PropTypes.func.isRequired,
};
