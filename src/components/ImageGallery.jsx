import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ children, onShowModal }) => {
  return (
    <ul className="ImageGallery">
      {children.map((image, index) => (
        <ImageGalleryItem
          key={index}
          imageData={image}
          onShowModal={onShowModal}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
