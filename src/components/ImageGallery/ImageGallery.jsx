import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({images, onClick}) => {

    return (
        <ul className={styles.ImageGallery}>
            <ImageGalleryItem images={images} onClick={onClick}/>
        </ul>
    )
}

export default ImageGallery