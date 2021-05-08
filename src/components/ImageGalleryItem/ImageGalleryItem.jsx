import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
    return (
        images.map(image => (
          <li key={image.id} className={styles.ImageGalleryItem}>
          <img src={image.webformatURL} alt={image.tags} className={styles.ImageGalleryItemImage} />
        </li> ))
     
    )
}

export default ImageGalleryItem;