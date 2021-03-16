import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import LoadMoreButton from './components/Button';
import Modal from './components/Modal';

import getApi from './components/FinderAPI.jsx';

const App = () => {
  const [images, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');

  const handleChangeQuery = value => {
    setIsLoading(true);
    setCurrentPage(1);
    setImagesList([]);
    setSearchQuery(value);
    handleShowPictures(value);
  };

  const handleShowModal = (img, alt) => {
    if (!showModal) {
      setDescription(prevState => alt);
      setPicture(prevState => img);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleLoadMoreImg = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleShowPictures = searchQuery => {
    setIsLoading(true);
    getApi(searchQuery, currentPage)
      .then(({ hits }) => {
        setImagesList(prevState => [...prevState, ...hits]);
      })
      .then(() => setIsLoading(false))
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        handleScroll();
      });
  };

  useEffect(() => {
    if (searchQuery === '' && currentPage === 1) {
      return;
    }

    handleShowPictures(searchQuery);
  }, [currentPage]);

  return (
    <div>
      <SearchBar onFormSubmit={handleChangeQuery} />
      <ImageGallery onShowModal={handleShowModal}>{images}</ImageGallery>
      {images.length > 0 && !isLoading && (
        <LoadMoreButton onFatchImages={handleLoadMoreImg} />
      )}
      {showModal && (
        <Modal
          picture={picture}
          description={description}
          onCloseModal={handleShowModal}
        />
      )}
    </div>
  );
};
export default App;
