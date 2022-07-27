import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay,ModalWindow,ModalImg } from 'components/Modal/Modal.styled.js';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

    render() {
        console.log('imageModal', this.props.imageModal);
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
            <ModalWindow>
                <ModalImg src ={this.props.imageModal} alt='modal'/>
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
Modal.defaultProps = {
    children:null,
}
Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};