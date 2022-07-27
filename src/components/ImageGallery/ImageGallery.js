import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from 'components/ImageGalleryItem/ImageGalleryItem.styled.js';


export const ImageGallery = ({ pictures, onClick,havdleImageModal }) => {
  return (
    <ImageGalleryList>
      {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
          onClick={havdleImageModal}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          largeImage={onClick}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ),
    onClick: PropTypes.func.isRequired,
};