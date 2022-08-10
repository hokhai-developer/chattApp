import React from 'react';
import classNames from 'classnames/bind';
import styles from './MessageForm.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const MessageForm = (props) => {
    return (
        <div className={cx('wrapper-form')}>
            <div className={cx('form-content')}>
                <div className={cx('form-input')}>
                    <input placeholder="Nhập tin nhắn muốn gửi" className={cx('input-text')} />
                </div>
                <button className={cx('form-btn-send')}>Gửi</button>
            </div>
        </div>
    );
};

MessageForm.propTypes = {};

export default MessageForm;
