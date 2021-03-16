import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageData, onShowModal }) => {
  return (
    <li
      onClick={() => onShowModal(imageData.largeImageURL, imageData.tags)}
      className="ImageGalleryItem"
    >
      <img
        src={imageData.webformatURL}
        alt={imageData.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onShowModal: PropTypes.func.isRequired,
  imageData: PropTypes.object.isRequired,
};
