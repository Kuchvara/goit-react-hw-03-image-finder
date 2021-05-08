import styles from './Button.module.css';

const Button = ({ onClick }) => {
    window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

    return (
        <button type='button' onClick={onClick} className={styles.Button}>Load more</button>
    )
}

export default Button;