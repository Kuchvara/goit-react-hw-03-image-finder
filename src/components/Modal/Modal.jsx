import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {    
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  }

  onBackDropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return (
      createPortal(
        <div className={styles.Overlay} onClick={this.onBackDropClick}>
          <div className={styles.Modal}>
            <img src={this.props.Url} alt="" />
          </div>
        </div>, modalRoot
      )
    )
  }
};

export default Modal;