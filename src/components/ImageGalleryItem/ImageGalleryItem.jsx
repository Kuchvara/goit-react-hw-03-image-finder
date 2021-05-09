import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
    return (
        images.map(image => (
          <li key={image.id} className={styles.ImageGalleryItem}>
            <img src={image.webformatURL}
              alt={image.tags}
              className={styles.ImageGalleryItemImage}
              name={image.largeImageURL}
              onClick={onClick}/>
        </li> ))
     
    )
}

export default ImageGalleryItem;