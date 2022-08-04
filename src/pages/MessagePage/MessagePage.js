import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './MessagePage.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const MessagePage = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>this is message page</div>
        </div>
    );
};

MessagePage.propTypes = {};

export default MessagePage;
