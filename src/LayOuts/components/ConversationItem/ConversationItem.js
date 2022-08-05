import React from 'react';
import classNames from 'classnames/bind';
import styles from './ConversationItem.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const ConversationItem = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>avatar</div>
            <div className={cx('center')}>
                <div className={cx('content')}>
                    <h4 className={cx('name')}>Name conversation</h4>
                    <p className={cx('last-message')}>the last message</p>
                </div>
                <p className={cx('time-stamp')}>11 gio</p>
            </div>
        </div>
    );
};

ConversationItem.propTypes = {};

export default ConversationItem;
