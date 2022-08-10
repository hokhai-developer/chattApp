import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './MessagePage.module.scss';
import PropTypes from 'prop-types';
import MessageHeader from './components/MessageHeader';
import MessageChats from './components/MessageChats';
import MessageForm from './components/MessageForm';

const cx = classNames.bind(styles);
const MessagePage = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <MessageHeader />
                <MessageChats />
                <MessageForm />
            </div>
        </div>
    );
};

MessagePage.propTypes = {};

export default MessagePage;
