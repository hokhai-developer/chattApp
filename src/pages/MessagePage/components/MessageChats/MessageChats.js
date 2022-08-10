import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './MessageChats.module.scss';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

const cx = classNames.bind(styles);
const MessageChats = (props) => {
    const endRef = useRef(null);
    useEffect(() => {
        if (endRef?.current) {
            endRef?.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        }
    }, []);
    return (
        <div className={cx('wrapper-chats')}>
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <div className={cx('scroll-to-view')} ref={endRef}></div>
        </div>
    );
};

MessageChats.propTypes = {};

export default MessageChats;
