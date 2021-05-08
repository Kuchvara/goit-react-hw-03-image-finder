import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({images, children}) => {

    return (
        <ul className={styles.ImageGallery}>
            <ImageGalleryItem images={images}/>
        </ul>
    )
}

export default ImageGallery