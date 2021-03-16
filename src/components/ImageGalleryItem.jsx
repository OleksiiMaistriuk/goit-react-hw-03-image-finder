const ImageGalleryItem = ({ previewURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={previewURL} alt="title" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
