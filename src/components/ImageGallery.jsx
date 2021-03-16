import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ children }) => {
  return (
    <ul className="ImageGallery">
      {children.map(({ previewURL, id }) => (
        <ImageGalleryItem key={id} previewURL={previewURL} />
      ))}
    </ul>
  );
};
export default ImageGallery;
