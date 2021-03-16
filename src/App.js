import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import LoadMoreButton from './components/Button';

import getApi from './components/FinderAPI.jsx';

const App = () => {
  const [images, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeQuery = value => {
    setIsLoading(true);
    setCurrentPage(1);
    setImagesList([]);
    setSearchQuery(value);
    handleShowPictures(value);
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
    getApi(searchQuery, currentPage)
      .then(({ hits }) => {
        setImagesList(prevState => [...prevState, ...hits]);
      })

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
      <SearchBar onSubmit={handleChangeQuery} />
      <ImageGallery>{images}</ImageGallery>

      {isLoading && <LoadMoreButton onFatchImages={handleLoadMoreImg} />}
    </div>
  );
};
export default App;
