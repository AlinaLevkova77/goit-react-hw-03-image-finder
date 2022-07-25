import PropTypes from 'prop-types';
import { ImageGalleryItems,ImageGalleryImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ 
    id,
    webformatURL,
    largeImageURL,
    tags,
    largeImage,
 }) => {
    return (
        <ImageGalleryItems  key={id} onClick={()=>largeImage(largeImageURL)}>
            <ImageGalleryImage
                src={webformatURL}
                alt={tags}
            />
        </ImageGalleryItems>
    )
}


ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;