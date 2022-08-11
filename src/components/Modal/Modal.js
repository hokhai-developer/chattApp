import React from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Modal = ({ children, className, showModal, setShowModal = () => {} }) => {
    return (
        <div
            className={cx('wrapper-modal', className, {
                show: showModal,
            })}
            onClick={() => setShowModal(false)}
        >
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    );
};

Modal.propTypes = {};

export default Modal;
