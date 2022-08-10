import React from 'react';
import classNames from 'classnames/bind';
import styles from './MessageChats.module.scss';
import PropTypes from 'prop-types';
import Avatar from '~/components/Avatar';

const cx = classNames.bind(styles);
const MessageItem = (props) => {
    return (
        <div className={cx('wrapper-item')}>
            <div className={cx('item-avatar')}>
                <Avatar type="single" />
            </div>
            <div className={cx('item-mess')}>
                <p className={cx('mess')}>Lorem ipsum</p>
                <p className={cx('time')}>15:51</p>
            </div>
        </div>
    );
};

MessageItem.propTypes = {};

export default MessageItem;
