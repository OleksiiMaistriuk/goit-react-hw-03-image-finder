import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ picture, description = 'image', onCloseModal }) => {
  const handleCloseModal = event => {
    if (event.target === event.currentTarget) onCloseModal();
  };

  useEffect(() => {
    function onKeyup(e) {
      if (e.key === 'Escape') {
        onCloseModal();
      }
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  });

  return (
    <div className="Overlay" onClick={handleCloseModal}>
      <div className="Modal">
        <img src={picture} alt={description} />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  picture: PropTypes.string.isRequired,
  description: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
};
